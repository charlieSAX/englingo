// ─────────────────────────────────────────────────────────────────────────────
// English audio via the Web Speech API, tuned for iOS Safari:
//  • speak() must follow a user gesture → we prime the engine on first tap.
//  • The hardware silent switch mutes Safari TTS → one-time hint elsewhere.
//  • Voices load asynchronously → cache on `voiceschanged`.
// Prefers a British (en-GB) voice to match the RP IPA shown under each word,
// then any English voice.
// ─────────────────────────────────────────────────────────────────────────────

const EN_GB_RE = /en.?GB|en.?UK|british|daniel|kate|serena|stephanie|arthur|oliver/i;
const EN_ANY_RE = /^en\b|^en[-_]/i;
/** macOS/iOS novelty + legacy voices that sound robotic or silly — never auto-pick. */
const NOVELTY_RE =
  /albert|bad news|good news|bahh|bells|boing|bubbles|cellos|jester|organ|superstar|trinoids|whisper|wobble|zarvox|eddy|flo|grandma|grandpa|junior|kathy|ralph|reed|rocko|sandy|shelley|fred/i;

let voices: SpeechSynthesisVoice[] = [];
let preferredURI: string | null = null;
let primed = false;

function refresh() {
  try {
    voices = window.speechSynthesis?.getVoices() ?? [];
  } catch {
    voices = [];
  }
}

/**
 * Score a voice for fluency. Premium/Enhanced system voices sound far more
 * natural than the compact defaults; novelty voices are excluded outright.
 */
function voiceScore(v: SpeechSynthesisVoice): number {
  const s = `${v.lang} ${v.name} ${v.voiceURI}`;
  if (NOVELTY_RE.test(v.name)) return -100;
  if (!EN_ANY_RE.test(v.lang)) return -50;
  let score = 0;
  if (/premium/i.test(s)) score += 40;
  if (/enhanced/i.test(s)) score += 30;
  if (/natural|neural|siri/i.test(s)) score += 25;
  if (/google|microsoft/i.test(s)) score += 15; // Android/desktop quality voices
  if (EN_GB_RE.test(s)) score += 10;
  if (/en.?(AU|IE|NZ)/i.test(v.lang)) score += 4;
  if (/en.?US/i.test(v.lang)) score += 3;
  if (v.localService) score += 2; // works offline
  if (/compact/i.test(s)) score -= 20;
  return score;
}

export function initSpeech(savedVoiceURI: string | null) {
  preferredURI = savedVoiceURI;
  refresh();
  try {
    window.speechSynthesis.onvoiceschanged = refresh;
  } catch {
    /* no speech support */
  }
  // Prime on the very first user gesture so iOS lets later speak() calls play.
  const prime = () => {
    if (primed) return;
    primed = true;
    try {
      const u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
    window.removeEventListener('pointerdown', prime);
  };
  window.addEventListener('pointerdown', prime, { once: true });
}

export function setPreferredVoice(uri: string | null) {
  preferredURI = uri;
}

export function englishVoices(): SpeechSynthesisVoice[] {
  refresh();
  // best first, novelty voices hidden from the picker too
  return voices
    .filter((v) => EN_ANY_RE.test(v.lang) && !NOVELTY_RE.test(v.name))
    .sort((a, b) => voiceScore(b) - voiceScore(a));
}

export function hasEnglishVoice(): boolean {
  refresh();
  return voices.some((v) => EN_ANY_RE.test(v.lang));
}

function pickVoice(): SpeechSynthesisVoice | undefined {
  refresh();
  if (preferredURI) {
    const chosen = voices.find((v) => v.voiceURI === preferredURI);
    if (chosen) return chosen;
  }
  const ranked = voices
    .filter((v) => EN_ANY_RE.test(v.lang))
    .sort((a, b) => voiceScore(b) - voiceScore(a));
  return ranked.length > 0 && voiceScore(ranked[0]) > -50 ? ranked[0] : undefined;
}

/** Natural speaking rate. Single words a touch slower for clarity. */
function rateFor(text: string): number {
  return text.trim().includes(' ') ? 0.95 : 0.9;
}

/**
 * Speak English text. Optionally pass an element to pulse while speaking
 * (adds the `play` class, removes it when done).
 */
export function speak(text: string, el?: HTMLElement | null) {
  void speakAsync(text, el);
}

/**
 * Speak and resolve when the utterance has actually finished, so callers can
 * wait for the whole sentence before moving on. Falls back to a length-based
 * timer if the engine never fires end events (no voices / muted / no support).
 */
export function speakAsync(text: string, el?: HTMLElement | null): Promise<void> {
  if (el) {
    el.classList.remove('play');
    void el.offsetWidth; // restart the CSS animation
    el.classList.add('play');
  }
  return new Promise<void>((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      if (el) el.classList.remove('play');
      resolve();
    };
    // Fallback: ~450ms per word + headroom, capped, in case onend never fires.
    const words = Math.max(1, text.trim().split(/\s+/).length);
    const fallback = setTimeout(finish, Math.min(1200 + words * 450, 9000));
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-GB';
      u.rate = rateFor(text);
      const v = pickVoice();
      if (v) u.voice = v;
      u.onend = () => {
        clearTimeout(fallback);
        finish();
      };
      u.onerror = () => {
        clearTimeout(fallback);
        finish();
      };
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch {
      clearTimeout(fallback);
      finish(); /* no speech support — UI still works silently */
    }
  });
}

export function stopSpeaking() {
  try {
    window.speechSynthesis.cancel();
  } catch {
    /* ignore */
  }
}

export function isIOS(): boolean {
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && 'ontouchend' in document);
}
