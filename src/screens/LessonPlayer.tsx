import { useEffect, useMemo, useRef, useState } from 'react';
import type { Exercise } from '../types';
import { findLesson } from '../data';
import { generateLesson, generateReview, exerciseWordIds } from '../lib/generator';
import { actions, dueWords, getState, useProgress } from '../lib/store';
import { confettiBurst } from '../lib/confetti';
import { hasEnglishVoice, isIOS, speak, stopSpeaking } from '../lib/speech';
import { CheckIcon, HeartIcon, XIcon } from '../components/icons';
import { IntroCard, ListenChoose, Pairs, PickImage, PickMeaning, WordBank, type ExerciseApi } from './exercises';

export type Session = { kind: 'lesson'; lessonId: string } | { kind: 'practise' };

const PRAISE = ['好嘢! · Nice one', '啱晒! · Correct', 'Leng! · Beautiful', '叻! · Smart'];

interface Banner {
  good: boolean;
  title: string;
  sub?: string;
}

export function LessonPlayer({ session, onExit }: { session: Session; onExit: () => void }) {
  const progress = useProgress();

  const ref = session.kind === 'lesson' ? findLesson(session.lessonId) : null;

  const exercises = useMemo<Exercise[]>(() => {
    const p = getState();
    if (session.kind === 'lesson') return generateLesson(session.lessonId, p);
    return generateReview(dueWords(p, 10), null, p, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.kind, session.kind === 'lesson' ? session.lessonId : 'practise']);

  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<'work' | 'checked' | 'complete' | 'failed'>('work');
  const [checkable, setCheckable] = useState(false);
  const [banner, setBanner] = useState<Banner | null>(null);
  const [gentleHearts, setGentleHearts] = useState(5);
  const [stats, setStats] = useState({ answered: 0, correct: 0 });
  const [earned, setEarned] = useState(0);
  const [hint, setHint] = useState<string | null>(null);

  const checkerRef = useRef<(() => { ok: boolean; reveal?: string }) | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const appliedRef = useRef(false);

  const ex = exercises[idx];
  const hearts = progress.challenge ? progress.hearts : gentleHearts;
  const total = exercises.length;

  // one-time hints: iOS silent switch + missing English voice
  useEffect(() => {
    const p = getState();
    if (isIOS() && !p.flags['silentHint']) {
      setHint('iPhone 提示：熄咗靜音掣先聽到英文發音。');
      actions.setFlag('silentHint');
      return;
    }
    const t = setTimeout(() => {
      if (!hasEnglishVoice() && !getState().flags['voiceNote']) {
        setHint('搵唔到英文發音 — 喺 設定 → 輔助使用 → 朗讀內容 → 語音 → English 度加一把。');
        actions.setFlag('voiceNote');
      }
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => () => stopSpeaking(), []);

  const api: ExerciseApi = useMemo(
    () => ({
      setCheckable: (on) => setCheckable(on),
      registerChecker: (fn) => {
        checkerRef.current = fn;
      },
      selfComplete: (ok, praise) => {
        if (ex) actions.recordAnswer(exerciseWordIds(ex), ok);
        setStats((s) => ({ answered: s.answered + 1, correct: s.correct + (ok ? 1 : 0) }));
        setBanner({ good: ok, title: praise ?? PRAISE[Math.floor(Math.random() * PRAISE.length)] });
        setPhase('checked');
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [idx, exercises]
  );

  function doCheck() {
    const checker = checkerRef.current;
    if (!checker || phase !== 'work') return;
    const { ok, reveal } = checker();
    if (ex) actions.recordAnswer(exerciseWordIds(ex), ok);
    setStats((s) => ({ answered: s.answered + 1, correct: s.correct + (ok ? 1 : 0) }));
    if (ok) {
      setBanner({ good: true, title: PRAISE[Math.floor(Math.random() * PRAISE.length)] });
    } else {
      setBanner({ good: false, title: '唔啱喎', sub: reveal });
      if (progress.challenge) {
        actions.loseHeart();
        if (getState().hearts <= 0) {
          setPhase('failed');
          return;
        }
      } else {
        setGentleHearts((h) => Math.max(0, h - 1));
      }
    }
    setPhase('checked');
  }

  function advance() {
    setBanner(null);
    setCheckable(false);
    checkerRef.current = null;
    if (idx + 1 >= total) {
      setPhase('complete');
      return;
    }
    setIdx(idx + 1);
    setPhase('work');
  }

  // apply rewards exactly once on completion
  useEffect(() => {
    if (phase !== 'complete' || appliedRef.current) return;
    appliedRef.current = true;
    const perfect = stats.answered > 0 && stats.correct === stats.answered;
    if (session.kind === 'lesson' && ref) {
      const xp = ref.lesson.xp ?? 20;
      setEarned(actions.completeLesson(ref.lesson.id, xp, perfect));
    } else {
      const xp = 12 + (perfect ? 3 : 0);
      actions.completePractise(xp);
      setEarned(xp);
    }
    confettiBurst(phoneRef.current, getState().reduceMotion);
    speak('Well done');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  useEffect(() => {
    phoneRef.current = document.querySelector('.phone');
  }, []);

  // ── failed (Challenge Mode only) ────────────────────────────────────────────
  if (phase === 'failed') {
    const canRefill = progress.gems >= 300;
    return (
      <div className="stage" style={{ top: 54 }}>
        <div className="exscreen active anim">
          <div className="done-wrap">
            <div className="trophy" aria-hidden="true">
              💔
            </div>
            <h1>冇晒心心</h1>
            <p>挑戰模式用晒心心就會結束嗰課。</p>
            <div className="scards">
              <button
                className="cont"
                style={{ marginTop: 26, opacity: canRefill ? 1 : 0.45 }}
                disabled={!canRefill}
                onClick={() => {
                  if (actions.refillHearts(300)) setPhase('work');
                }}
              >
                補充心心 · 300 💎
              </button>
            </div>
            <button
              className="cont"
              style={{ marginTop: 12, background: 'var(--line)', color: 'var(--muted)', boxShadow: '0 6px 0 var(--line-d)' }}
              onClick={onExit}
            >
              結束
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── complete ────────────────────────────────────────────────────────────────
  if (phase === 'complete') {
    const acc = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 100;
    return (
      <>
        <div className="stage" style={{ top: 54 }}>
          <div className="exscreen active anim">
            <div className="done-wrap">
              <div className="trophy" aria-hidden="true">
                🏆
              </div>
              <h1>{session.kind === 'lesson' ? '完成一課！' : '完成練習！'}</h1>
              <p>叻仔叻女 · well done</p>
              <div className="scards">
                <div className="scard xp">
                  <div className="k">總 XP</div>
                  <div className="v">+{earned}</div>
                </div>
                <div className="scard acc">
                  <div className="k">準確度</div>
                  <div className="v">{acc}%</div>
                </div>
                <div className="scard streak">
                  <div className="k">連續</div>
                  <div className="v">{progress.streak.count}🔥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="btn good" onClick={onExit}>
            繼續
          </button>
        </div>
      </>
    );
  }

  // ── playing ─────────────────────────────────────────────────────────────────
  const isIntro = ex?.kind === 'intro';
  const isPairs = ex?.kind === 'pairs';
  const btnLabel = phase === 'checked' ? '繼續' : isIntro ? '繼續' : '檢查';
  const btnDisabled = phase === 'work' && !isIntro && !checkable;
  const btnClass = `btn${phase === 'checked' ? ' good' : ''}${btnDisabled ? ' dis' : ''}`;
  const btnAction = () => {
    if (phase === 'checked') advance();
    else if (isIntro) {
      if (ex) actions.recordSeen((ex as { word: { id: string } }).word.id);
      advance();
    } else doCheck();
  };

  return (
    <>
      <div className="hud">
        <button className="quit" aria-label="離開" onClick={onExit}>
          <XIcon />
        </button>
        <div className="track" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={idx}>
          <i style={{ width: `${(idx / Math.max(total, 1)) * 100}%` }} />
        </div>
        <div className="hearts" aria-label={`${hearts} hearts`}>
          <HeartIcon />
          <span className="n">{hearts}</span>
        </div>
      </div>

      <div className="stage">
        <div key={idx} className="exscreen active anim">
          {ex?.kind === 'intro' && <IntroCard ex={ex} />}
          {ex?.kind === 'pickImage' && <PickImage ex={ex} api={api} />}
          {ex?.kind === 'pickMeaning' && <PickMeaning ex={ex} api={api} />}
          {ex?.kind === 'listenChoose' && <ListenChoose ex={ex} api={api} />}
          {ex?.kind === 'pairs' && <Pairs ex={ex} api={api} />}
          {ex?.kind === 'wordBank' && <WordBank ex={ex} api={api} />}
        </div>
      </div>

      {hint && (
        <div className="hintbar" role="status">
          <span aria-hidden="true">🎧</span>
          {hint}
          <button onClick={() => setHint(null)}>OK</button>
        </div>
      )}

      <div className="footer">
        {banner && (
          <div className={`banner show ${banner.good ? 'good' : 'bad'}`} role="status">
            {banner.good ? <CheckIcon /> : <XIcon width={3} />}
            <span>
              {banner.title}
              {banner.sub && <small>{banner.sub}</small>}
            </span>
          </div>
        )}
        {!(isPairs && phase === 'work') && (
          <button className={btnClass} onClick={btnAction} disabled={btnDisabled}>
            {btnLabel}
          </button>
        )}
      </div>
    </>
  );
}
