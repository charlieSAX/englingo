// ─────────────────────────────────────────────────────────────────────────────
// Speak-and-check via the Web Speech API's SpeechRecognition (the device's own
// dictation engine — nothing is uploaded by the app, no backend involved).
//
// iOS Safari exposes it as webkitSpeechRecognition. Some environments expose
// the constructor but fail at runtime (e.g. older standalone PWAs): the first
// runtime failure flips a kill switch so all mic UI disappears gracefully.
// ─────────────────────────────────────────────────────────────────────────────

type SR = {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  continuous: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
  onend: (() => void) | null;
};

function ctor(): (new () => SR) | null {
  const w = window as unknown as Record<string, unknown>;
  return (w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null) as (new () => SR) | null;
}

let runtimeBroken = false;

/** Can this device do speak-and-check right now? */
export function hasRecognition(): boolean {
  return !runtimeBroken && ctor() !== null;
}

export interface HearResult {
  ok: boolean; // recognition itself worked (not whether the answer matched)
  transcript: string;
  /** 'denied' = mic permission refused; 'unavailable' = engine broken here */
  error?: 'denied' | 'unavailable' | 'silent';
}

/** Listen once (max ~7s) and return the best transcript. */
export function hearOnce(): Promise<HearResult> {
  const C = ctor();
  if (!C || runtimeBroken) return Promise.resolve({ ok: false, transcript: '', error: 'unavailable' });
  return new Promise((resolve) => {
    let settled = false;
    let rec: SR;
    const finish = (r: HearResult) => {
      if (settled) return;
      settled = true;
      try {
        rec.abort();
      } catch {
        /* ignore */
      }
      resolve(r);
    };
    try {
      rec = new C();
    } catch {
      runtimeBroken = true;
      resolve({ ok: false, transcript: '', error: 'unavailable' });
      return;
    }
    rec.lang = 'en-GB';
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.continuous = false;
    const timeout = setTimeout(() => finish({ ok: false, transcript: '', error: 'silent' }), 8000);
    rec.onresult = (e) => {
      clearTimeout(timeout);
      const alts: string[] = [];
      const last = e.results[e.results.length - 1];
      for (let i = 0; i < last.length; i++) alts.push(last[i].transcript);
      finish({ ok: true, transcript: alts.join('\n') });
    };
    rec.onerror = (e) => {
      clearTimeout(timeout);
      const err = e?.error ?? '';
      if (err === 'not-allowed' || err === 'service-not-allowed') {
        if (err === 'service-not-allowed') runtimeBroken = true;
        finish({ ok: false, transcript: '', error: 'denied' });
      } else if (err === 'no-speech' || err === 'aborted') {
        finish({ ok: false, transcript: '', error: 'silent' });
      } else {
        runtimeBroken = true;
        finish({ ok: false, transcript: '', error: 'unavailable' });
      }
    };
    rec.onend = () => {
      clearTimeout(timeout);
      finish({ ok: false, transcript: '', error: 'silent' });
    };
    try {
      rec.start();
    } catch {
      clearTimeout(timeout);
      runtimeBroken = true;
      finish({ ok: false, transcript: '', error: 'unavailable' });
    }
  });
}

// ── forgiving matching ───────────────────────────────────────────────────────

const NUMBER_WORDS: Record<string, string> = {
  '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
  '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten',
  '20': 'twenty', '30': 'thirty', '100': 'hundred', '200': 'two hundred'
};

function normalise(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => NUMBER_WORDS[w] ?? w)
    .join(' ')
    .split(' ');
}

function similar(a: string, b: string): boolean {
  if (a === b) return true;
  if (a.length < 3 || b.length < 3) return false;
  // tiny edit-distance tolerance for accent slips (colour/color, gonna/going)
  if (Math.abs(a.length - b.length) > 2) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++; j++;
    } else {
      edits++;
      if (edits > 1) return false;
      if (a.length > b.length) i++;
      else if (b.length > a.length) j++;
      else { i++; j++; }
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

/**
 * Forgiving match: at least 75% of the expected words must appear (in order)
 * in what was heard. Short phrases (≤2 words) must match fully.
 * The transcript may contain several newline-separated alternatives.
 */
export function matchSpoken(expected: string, heardRaw: string): { ok: boolean; ratio: number } {
  let best = 0;
  for (const alt of heardRaw.split('\n')) {
    const want = normalise(expected);
    const got = normalise(alt);
    if (want.length === 0) continue;
    let gi = 0;
    let hit = 0;
    for (const w of want) {
      for (let k = gi; k < got.length; k++) {
        if (similar(w, got[k])) {
          hit++;
          gi = k + 1;
          break;
        }
      }
    }
    best = Math.max(best, hit / want.length);
  }
  const need = normalise(expected).length <= 2 ? 0.99 : 0.75;
  return { ok: best >= need, ratio: best };
}
