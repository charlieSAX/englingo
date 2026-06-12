import { useEffect, useMemo, useRef, useState } from 'react';
import { DIALOGUES, findDialogue, type DialogueLine, type YourTurn } from '../data/dialogues';
import { hueVars } from '../lib/hues';
import { speak, speakAsync, stopSpeaking } from '../lib/speech';
import { hasRecognition, hearOnce, matchSpoken } from '../lib/recognition';
import { actions, getState, useProgress } from '../lib/store';
import { confettiBurst } from '../lib/confetti';
import { CheckIcon, MicIcon, NavTalkIcon, XIcon } from '../components/icons';

const DIALOGUE_XP = 15;

// ─────────────────────────────────────────────────────────────────────────────
// Conversation mode. List of situations → chat-style player. The other side
// speaks aloud; on your turn you see the Cantonese meaning and pick the
// natural English. Wrong picks teach (shake + stay) — they never block.
// ─────────────────────────────────────────────────────────────────────────────

export function ConversationList({ onStart }: { onStart: (id: string) => void }) {
  const p = useProgress();
  const doneCount = DIALOGUES.filter((d) => p.dialogues[d.id]).length;
  return (
    <div className="page-scroll">
      <h1 className="page-title">對話</h1>
      <p className="page-sub">
        識字唔等於識講。喺真實情境入面練吓。已完成 {doneCount}/{DIALOGUES.length}
      </p>
      {DIALOGUES.map((d) => {
        const done = p.dialogues[d.id] === true;
        return (
          <button
            key={d.id}
            className="convo-card"
            style={hueVars(d.hue) as React.CSSProperties}
            onClick={() => onStart(d.id)}
          >
            <span className="cc-icon" aria-hidden="true">
              <NavTalkIcon />
            </span>
            <span className="cc-body">
              <span className="cc-title">
                {d.title} <span className="cc-han f-han">{d.titleHan}</span>
              </span>
              <span className="cc-sub f-han">{d.partner}</span>
            </span>
            {done && (
              <span className="cc-done" aria-label="完成">
                <CheckIcon />
              </span>
            )}
          </button>
        );
      })}
      <p style={{ textAlign: 'center', color: 'var(--muted)', fontWeight: 600, fontSize: 12.5, marginTop: 16 }}>
        每段對話 +{DIALOGUE_XP} XP · 可以重複練習
      </p>
    </div>
  );
}

interface Bubble {
  side: 'them' | 'you';
  en: string;
  cn: string;
}

export function DialoguePlayer({ dialogueId, onExit }: { dialogueId: string; onExit: () => void }) {
  const dlg = findDialogue(dialogueId);
  const p = useProgress();
  const [idx, setIdx] = useState(0); // next line to play
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false); // a line is being spoken
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<string | null>(null);
  const [micOk, setMicOk] = useState(() => hasRecognition());
  const [stats, setStats] = useState({ answered: 0, correct: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const awardedRef = useRef(false);

  const line: DialogueLine | undefined = dlg?.lines[idx];

  // advance through consecutive "them" lines, waiting for each sentence to
  // finish speaking before the next bubble appears
  useEffect(() => {
    if (!dlg || done) return;
    if (idx >= dlg.lines.length) {
      setDone(true);
      return;
    }
    const l = dlg.lines[idx];
    if (l.speaker !== 'them') return;
    let cancelled = false;
    const t = setTimeout(async () => {
      if (cancelled) return;
      setBusy(true);
      setBubbles((b) => [...b, { side: 'them', en: l.en, cn: l.cn }]);
      await speakAsync(l.en);
      if (cancelled) return;
      setTimeout(() => {
        if (cancelled) return;
        setBusy(false);
        setIdx((i) => i + 1);
      }, 500);
    }, bubbles.length === 0 ? 450 : 250);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, dlg, done]);

  // award once
  useEffect(() => {
    if (!done || awardedRef.current || !dlg) return;
    awardedRef.current = true;
    actions.completeDialogue(dlg.id, DIALOGUE_XP);
    confettiBurst(document.querySelector('.phone'), getState().reduceMotion);
    speak('Well done');
  }, [done, dlg]);

  useEffect(() => () => stopSpeaking(), []);

  // keep the newest bubble in view
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [bubbles, done]);

  const options = useMemo(() => {
    if (!line || line.speaker !== 'you') return [];
    const yt = line as YourTurn;
    const opts = [yt.en, ...yt.distractors];
    // stable shuffle per line
    let seed = 0;
    for (const c of yt.en) seed = (seed * 31 + c.charCodeAt(0)) % 9973;
    return opts
      .map((o, i) => ({ o, k: (seed * (i + 7)) % 13 }))
      .sort((a, b) => a.k - b.k || a.o.localeCompare(b.o))
      .map((x) => x.o);
  }, [line]);

  if (!dlg) return null;

  const acceptAnswer = async (yt: YourTurn) => {
    setWrong(null);
    setHeard(null);
    setBusy(true);
    setBubbles((b) => [...b, { side: 'you', en: yt.en, cn: yt.cn }]);
    await speakAsync(yt.en); // say her line in full before the reply comes
    setBusy(false);
    setIdx((i) => i + 1);
  };

  const pick = (opt: string) => {
    if (!line || line.speaker !== 'you' || busy || listening) return;
    const yt = line as YourTurn;
    const ok = opt === yt.en;
    setStats((s) => ({ answered: s.answered + 1, correct: s.correct + (ok ? 1 : 0) }));
    if (!ok) {
      setWrong(opt);
      setTimeout(() => setWrong(null), 700);
      return;
    }
    void acceptAnswer(yt);
  };

  /** Speak the reply instead of tapping it. */
  const speakAnswer = async () => {
    if (!line || line.speaker !== 'you' || busy || listening) return;
    const yt = line as YourTurn;
    setListening(true);
    setHeard(null);
    const r = await hearOnce();
    setListening(false);
    if (!r.ok) {
      if (r.error === 'silent') setHeard('（聽唔到，再試吓）');
      else {
        setMicOk(false); // permission refused or engine broken: hide the mic
        setHeard(null);
      }
      return;
    }
    const verdict = matchSpoken(yt.en, r.transcript);
    setStats((s) => ({ answered: s.answered + 1, correct: s.correct + (verdict.ok ? 1 : 0) }));
    if (verdict.ok) {
      void acceptAnswer(yt);
    } else {
      setHeard(`你講咗：${r.transcript.split('\n')[0]}`);
    }
  };

  const yourTurn = !done && line?.speaker === 'you' && !busy;
  const acc = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 100;

  return (
    <div style={hueVars(dlg.hue) as React.CSSProperties} className="convo-root">
      <div className="hud">
        <button className="quit" aria-label="離開" onClick={onExit}>
          <XIcon />
        </button>
        <div className="convo-head">
          <div className="ch-title">{dlg.title}</div>
          <div className="ch-sub f-han">{dlg.partner}</div>
        </div>
        <div
          className="track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={dlg.lines.length}
          aria-valuenow={Math.min(idx, dlg.lines.length)}
          style={{ maxWidth: 70 }}
        >
          <i style={{ width: `${(Math.min(idx, dlg.lines.length) / dlg.lines.length) * 100}%` }} />
        </div>
      </div>

      <div className={`convo-scroll${yourTurn ? ' with-options' : ''}`} ref={scrollRef}>
        {bubbles.map((b, i) => (
          <div key={i} className={`cb ${b.side}`}>
            <button
              className="cb-bubble"
              onClick={() => speak(b.en)}
              aria-label={`再聽：${b.en}`}
            >
              <span className="cb-en">{b.en}</span>
              <span className="cb-cn f-han">{b.cn}</span>
            </button>
          </div>
        ))}
        {done && (
          <div className="convo-done">
            <div className="trophy" aria-hidden="true">
              🏆
            </div>
            <h1>完成對話！</h1>
            <p className="f-han">
              +{DIALOGUE_XP} XP · 準確度 {acc}%
            </p>
            <button className="cont" onClick={onExit}>
              繼續
            </button>
          </div>
        )}
      </div>

      {yourTurn && (
        <div className="convo-options">
          <div className="co-prompt f-han">
            你想講：「{(line as YourTurn).cn}」。用英文點講？
          </div>
          {options.map((o) => (
            <button
              key={o}
              className={`lopt co-opt${wrong === o ? ' no shake' : ''}`}
              onClick={() => pick(o)}
            >
              {o}
            </button>
          ))}
          {micOk && p.speakPractice && (
            <button
              className={`co-mic${listening ? ' listening' : ''}`}
              onClick={speakAnswer}
              disabled={listening}
              aria-label="用講嘅答"
            >
              <MicIcon />
              <span className="f-han">{listening ? '聽緊⋯⋯講啦' : '唔撳喇，直接講！'}</span>
            </button>
          )}
          {heard && <div className="mic-heard co-heard">{heard}</div>}
        </div>
      )}
    </div>
  );
}
