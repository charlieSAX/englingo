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
  const gb = voices.filter((v) => EN_GB_RE.test(`${v.lang} ${v.name}`));
  const other = voices.filter((v) => EN_ANY_RE.test(v.lang) && !gb.includes(v));
  return [...gb, ...other];
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
  return (
    voices.find((v) => EN_GB_RE.test(`${v.lang} ${v.name}`)) ||
    voices.find((v) => EN_ANY_RE.test(v.lang))
  );
}

/**
 * Speak English text. Optionally pass an element to pulse while speaking
 * (adds the `play` class, removes it when done).
 */
export function speak(text: string, el?: HTMLElement | null) {
  if (el) {
    el.classList.remove('play');
    void el.offsetWidth; // restart the CSS animation
    el.classList.add('play');
  }
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-GB';
    u.rate = 0.85;
    const v = pickVoice();
    if (v) u.voice = v;
    if (el) {
      u.onend = () => el.classList.remove('play');
      u.onerror = () => el.classList.remove('play');
    }
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch {
    /* no speech support — UI still works silently */
  }
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
