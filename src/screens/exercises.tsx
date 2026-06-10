import { useEffect, useMemo, useRef, useState } from 'react';
import type { IntroEx, ListenChooseEx, PairsEx, PickImageEx, PickMeaningEx, Vocab, WordBankEx } from '../types';
import { Ipa, SpeakerRound, SpeakerSquare } from '../components/bits';
import { speak } from '../lib/speech';
import { actions } from '../lib/store';

// ─────────────────────────────────────────────────────────────────────────────
// EngLingo exercises — for Cantonese speakers learning English.
//   • HERO / audio = English (the target being taught) + IPA.
//   • GLOSS / options that show meaning = Traditional Cantonese (known language).
//   • UI chrome is in Cantonese.
// The 'pickImage' slot is kept (data-model compatibility): dir 'toEmoji' = show
// the English word, pick its Cantonese meaning; 'toChar' = show Cantonese, pick
// the English word.
// ─────────────────────────────────────────────────────────────────────────────

export interface ExerciseApi {
  setCheckable(on: boolean): void;
  registerChecker(fn: () => { ok: boolean; reveal?: string }): void;
  selfComplete(ok: boolean, praise?: string): void;
}

function useAutoSpeak(text: string | null, delay = 300) {
  useEffect(() => {
    if (!text) return;
    const t = setTimeout(() => speak(text), delay);
    return () => clearTimeout(t);
  }, [text, delay]);
}

function reveal(w: Vocab): string {
  return `${w.en} ${w.ipa ?? ''} — ${w.trad}`;
}

// ── 1. intro ─────────────────────────────────────────────────────────────────

export function IntroCard({ ex }: { ex: IntroEx }) {
  const w = ex.word;
  useAutoSpeak(w.en);
  useEffect(() => {
    actions.recordSeen(w.id);
  }, [w.id]);
  const hearRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <div className="prompt">新生字</div>
      <div className="sub">撳一下聽吓，然後繼續</div>
      <div className="hero">
        <div className="char-big f-hero" style={{ marginTop: 30 }}>
          {w.en}
        </div>
        <div className="jyut">
          <Ipa ipa={w.ipa} />
        </div>
        <div className="eng f-han">{w.trad}</div>
        <button ref={hearRef} className="speak" onClick={() => speak(w.en, hearRef.current)}>
          <SpeakerIconInline />
          聽吓
        </button>
      </div>
    </>
  );
}

function SpeakerIconInline() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9z" />
      <path d="M16 8a5 5 0 0 1 0 8M18.5 5.5a9 9 0 0 1 0 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// ── choice plumbing ──────────────────────────────────────────────────────────

function useChoice(api: ExerciseApi, correctId: string, revealText: string) {
  const [chosen, setChosen] = useState<string | null>(null);
  const [graded, setGraded] = useState<null | { ok: boolean }>(null);
  const chosenRef = useRef<string | null>(null);

  useEffect(() => {
    api.registerChecker(() => {
      const ok = chosenRef.current === correctId;
      setGraded({ ok });
      return { ok, reveal: ok ? undefined : revealText };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctId, revealText]);

  const select = (id: string) => {
    if (graded) return;
    chosenRef.current = id;
    setChosen(id);
    api.setCheckable(true);
  };

  const optClass = (id: string, base: string) => {
    let c = base;
    if (graded) {
      if (id === correctId) c += ' ok';
      else if (id === chosen && !graded.ok) c += ' no';
    } else if (id === chosen) c += ' sel';
    return c;
  };

  return { select, optClass, graded };
}

// ── 2. meaning grid ('pickImage' slot) ──────────────────────────────────────

export function PickImage({ ex, api }: { ex: PickImageEx; api: ExerciseApi }) {
  const w = ex.word;
  const { select, optClass } = useChoice(api, w.id, reveal(w));
  useAutoSpeak(ex.dir === 'toEmoji' ? w.en : null);

  if (ex.dir === 'toEmoji') {
    // hear/see the English → pick the Cantonese meaning
    return (
      <>
        <div className="prompt">揀啱意思</div>
        <div className="qrow">
          <SpeakerSquare text={w.en} label="聽英文" />
          <div>
            <div className="qc f-hero">{w.en}</div>
            <div className="qj">
              <Ipa ipa={w.ipa} />
            </div>
          </div>
        </div>
        <div className="grid2">
          {ex.options.map((o) => (
            <button key={o.id} className={optClass(o.id, 'opt')} onClick={() => select(o.id)}>
              <span className="om f-han">{o.trad}</span>
            </button>
          ))}
        </div>
      </>
    );
  }

  // Cantonese prompt → pick the English word
  return (
    <>
      <div className="prompt">揀啱英文字</div>
      <div className="qrow">
        <div className="qe f-han">{w.trad}</div>
      </div>
      <div className="grid2">
        {ex.options.map((o) => (
          <button
            key={o.id}
            className={optClass(o.id, 'opt')}
            onClick={() => {
              select(o.id);
              speak(o.en);
            }}
          >
            <span className="om">{o.en}</span>
            <span className="ol">{o.ipa}</span>
          </button>
        ))}
      </div>
    </>
  );
}

// ── 3. pickMeaning ───────────────────────────────────────────────────────────

export function PickMeaning({ ex, api }: { ex: PickMeaningEx; api: ExerciseApi }) {
  const w = ex.word;
  const { select, optClass } = useChoice(api, w.id, reveal(w));
  useAutoSpeak(ex.dir === 'toEn' ? w.en : null);

  if (ex.dir === 'toEn') {
    // English shown → pick the Cantonese meaning
    return (
      <>
        <div className="prompt">呢個字係咩意思？</div>
        <div className="qrow">
          <SpeakerSquare text={w.en} label="聽英文" />
          <div>
            <div className="qc f-hero">{w.en}</div>
            <div className="qj">
              <Ipa ipa={w.ipa} />
            </div>
          </div>
        </div>
        <div className="list-opts">
          {ex.options.map((o, i) => (
            <button key={o.id} className={optClass(o.id, 'lopt')} onClick={() => select(o.id)}>
              <span className="idx">{i + 1}</span>
              <span className="f-han" style={{ fontSize: 22, fontWeight: 800 }}>
                {o.trad}
              </span>
            </button>
          ))}
        </div>
      </>
    );
  }

  // Cantonese shown → pick the English word
  return (
    <>
      <div className="prompt">用英文點講？</div>
      <div className="qrow">
        <div className="qe f-han">{w.trad}</div>
      </div>
      <div className="list-opts">
        {ex.options.map((o, i) => (
          <button
            key={o.id}
            className={optClass(o.id, 'lopt')}
            onClick={() => {
              select(o.id);
              speak(o.en);
            }}
          >
            <span className="idx">{i + 1}</span>
            <span style={{ fontWeight: 800, fontSize: 18 }}>{o.en}</span>
            <span style={{ color: 'var(--ux-d)', fontSize: 12.5 }}>{o.ipa}</span>
          </button>
        ))}
      </div>
    </>
  );
}

// ── 4. listenChoose ──────────────────────────────────────────────────────────

export function ListenChoose({ ex, api }: { ex: ListenChooseEx; api: ExerciseApi }) {
  const w = ex.word;
  const { select, optClass } = useChoice(api, w.id, reveal(w));
  useAutoSpeak(w.en, 380);
  return (
    <>
      <div className="prompt">你聽到咩？</div>
      <div className="qrow">
        <SpeakerSquare text={w.en} label="再聽一次" />
        <div style={{ fontWeight: 700, color: 'var(--muted)' }}>撳喇叭再聽一次</div>
      </div>
      <div className="grid2">
        {ex.options.map((o) => (
          <button key={o.id} className={optClass(o.id, 'opt')} onClick={() => select(o.id)}>
            <span className="om f-han">{o.trad}</span>
          </button>
        ))}
      </div>
    </>
  );
}

// ── 5. pairs (English ↔ Cantonese) ──────────────────────────────────────────

interface PTile {
  key: string;
  side: 'L' | 'R';
  word: Vocab;
}

export function Pairs({ ex, api }: { ex: PairsEx; api: ExerciseApi }) {
  const tiles = useMemo<PTile[]>(() => {
    const shuffle = <T,>(a: T[]) => {
      const x = a.slice();
      for (let i = x.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [x[i], x[j]] = [x[j], x[i]];
      }
      return x;
    };
    const left = shuffle(ex.words).map<PTile>((w) => ({ key: `L-${w.id}`, side: 'L', word: w }));
    const right = shuffle(ex.words).map<PTile>((w) => ({ key: `R-${w.id}`, side: 'R', word: w }));
    const rows: PTile[] = [];
    for (let r = 0; r < left.length; r++) rows.push(left[r], right[r]);
    return rows;
  }, [ex]);

  const [sel, setSel] = useState<{ L: string | null; R: string | null }>({ L: null, R: null });
  const [gone, setGone] = useState<Set<string>>(new Set());
  const [bad, setBad] = useState<Set<string>>(new Set());

  const tap = (t: PTile) => {
    if (gone.has(t.key) || bad.size > 0) return;
    if (t.side === 'L') speak(t.word.en); // left tiles are English → play them
    const next = { ...sel, [t.side]: sel[t.side] === t.key ? null : t.key } as typeof sel;
    setSel(next);
    if (next.L && next.R) {
      const lWord = next.L.slice(2);
      const rWord = next.R.slice(2);
      if (lWord === rWord) {
        const l = next.L;
        const r = next.R;
        setSel({ L: null, R: null });
        setTimeout(() => {
          setGone((g) => {
            const ng = new Set(g);
            ng.add(l);
            ng.add(r);
            if (ng.size === tiles.length) {
              setTimeout(() => api.selfComplete(true, '叻! · all matched'), 380);
            }
            return ng;
          });
        }, 140);
      } else {
        const l = next.L;
        const r = next.R;
        setBad(new Set([l, r]));
        setSel({ L: null, R: null });
        setTimeout(() => setBad(new Set()), 380);
      }
    }
  };

  return (
    <>
      <div className="prompt">配對</div>
      <div className="sub">將每個英文字配對佢嘅意思</div>
      <div className="pairs">
        {tiles.map((t) => {
          let cls = 'ptile';
          if (sel[t.side] === t.key) cls += ' sel';
          if (gone.has(t.key)) cls += ' gone';
          if (bad.has(t.key)) cls += ' bad';
          return (
            <button key={t.key} className={cls} onClick={() => tap(t)} aria-label={t.side === 'L' ? t.word.en : t.word.trad}>
              {t.side === 'L' ? (
                <>
                  <span className="pc f-hero">{t.word.en}</span>
                  <span className="pj">{t.word.ipa}</span>
                </>
              ) : (
                <span className="pen f-han">{t.word.trad}</span>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}

// ── 6. wordBank / typeHeard ──────────────────────────────────────────────────

export function WordBank({ ex, api }: { ex: WordBankEx; api: ExerciseApi }) {
  const sentenceText = ex.sentence.tokens.map((t) => t.t).join(' ');
  const [picked, setPicked] = useState<number[]>([]);
  const [graded, setGraded] = useState<null | { ok: boolean }>(null);
  const pickedRef = useRef<number[]>([]);

  useAutoSpeak(ex.heard ? sentenceText : null, 380);

  useEffect(() => {
    api.registerChecker(() => {
      const answer = ex.sentence.tokens.map((t) => t.t).join('|');
      const got = pickedRef.current.map((i) => ex.bank[i].t).join('|');
      const ok = got === answer;
      setGraded({ ok });
      if (ok) speak(sentenceText);
      return {
        ok,
        reveal: ok ? undefined : `${ex.sentence.en} — ${ex.sentence.cn}`
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ex]);

  const add = (i: number) => {
    if (graded || picked.includes(i)) return;
    const next = [...picked, i];
    pickedRef.current = next;
    setPicked(next);
    speak(ex.bank[i].t);
    api.setCheckable(next.length > 0);
  };
  const remove = (i: number) => {
    if (graded) return;
    const next = picked.filter((x) => x !== i);
    pickedRef.current = next;
    setPicked(next);
    api.setCheckable(next.length > 0);
  };

  return (
    <>
      <div className="prompt">{ex.heard ? '聽寫' : '砌句子'}</div>
      {ex.heard ? (
        <div className="qrow">
          <SpeakerSquare text={sentenceText} label="再聽一次" />
          <div style={{ fontWeight: 700, color: 'var(--muted)' }}>撳喇叭再聽一次</div>
        </div>
      ) : (
        <div className="qrow">
          <div className="qe f-han">{ex.sentence.cn}</div>
        </div>
      )}
      <div className="wb-answer" aria-label="你嘅答案">
        {picked.map((i) => (
          <button key={i} className="wtile" onClick={() => remove(i)} aria-label={`移除 ${ex.bank[i].t}`}>
            <span className="wc f-hero">{ex.bank[i].t}</span>
            <span className="wj">{ex.bank[i].j}</span>
          </button>
        ))}
      </div>
      <div className="wb-bank">
        {ex.bank.map((tile, i) => (
          <button key={i} className={`wtile${picked.includes(i) ? ' used' : ''}`} onClick={() => add(i)} aria-label={tile.t}>
            <span className="wc f-hero">{tile.t}</span>
            <span className="wj">{tile.j}</span>
          </button>
        ))}
      </div>
      {graded && !graded.ok && (
        <div style={{ marginTop: 18, fontWeight: 700, color: 'var(--jade-d)' }}>
          {ex.sentence.tokens.map((t, i) => (
            <span key={i} className="f-hero" style={{ fontSize: 20, marginRight: 6 }}>
              {t.t}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export { SpeakerRound };
