# EngLingo verification harness

Critical path: open app → lesson path → play a full lesson (all six exercise
types) → XP/streak recorded → conversation dialogue start-to-finish → donation
link present → progress survives reload.

A product change is **shipped** only when every check below passes against the
deployed URL (https://charliesax.github.io/englingo/), not just localhost.

## How to run

1. `npm run dev -- --port 5199` (or use the live URL).
2. Drive the app with Playwright (or paste the snippets into the browser
   console — they are plain DOM scripts).
3. Run the lesson loop at viewports 320×568, 375×667, 390×844 and 430×932.
   PASS = every step reports `over: 0` (no vertical scrolling needed) and the
   lesson reaches COMPLETE.

## Checks

1. **Lesson loop** (`scripts/lesson-loop.js`): seeds an onboarded profile,
   opens the current lesson, answers every exercise (pairs brute-forced),
   records `scrollHeight - clientHeight` per screen, finishes the lesson.
2. **Conversation loop**: open 對話 tab → first dialogue → deliberately pick
   one wrong option (must shake and stay) → finish → expect `xpTotal` +15 and
   `dialogues['d-coffee'] === true` in localStorage `englingo:v1`.
3. **Donation**: `.support` (You tab) and `.support-mini` (lesson complete)
   both have `href="https://buymeacoffee.com/charliewrol"` and `target=_blank`.
4. **Skip-ahead**: Settings 跳級 → 第 4/5/6 級 unlocks those levels and moves
   START; levels above stay locked.
5. **Migration**: write a pre-conversation profile (no `dialogues` field) to
   `englingo:v1`, reload — app renders, XP and lessons kept, no console errors.
6. **Console**: zero errors after the full pass.
7. **Build**: `npm run build` on the Mac (rollup native module is macOS-only;
   the Linux sandbox cannot build, only typecheck with `tsc --noEmit`).

## Speak-and-check checks (added 2026-06-12)

8. **SpeakIt in lessons**: with recognition mocked, a 跟住講 exercise appears;
   wrong transcript → teaching note; two wrongs → 跳過 button (skip advances
   with no answer recorded); matching transcript → 講得好 banner.
9. **Mic in Conversation**: on the learner's turn `.co-mic` listens; wrong
   transcript shows 你講咗：…; matching transcript behaves like the correct tap.
10. **Pacing**: with a slow TTS mock (2.2s/utterance), consecutive bubbles
    arrive ≥ the utterance duration apart — nothing is cut off.
11. **Voice ranking**: with fake voices injected, the Settings picker orders
    Premium > Enhanced > plain, hides novelty voices (Zarvox, Bubbles…), and
    auto-pick speaks with the top-ranked voice at rate 0.95.
12. **Toggle**: 口講練習 off → no mic in dialogues, no speakIt in lessons.

MOCKING GOTCHA: this Chromium exposes BOTH `window.SpeechRecognition` and
`window.webkitSpeechRecognition` natively — override BOTH or the app will use
the real (hanging) engine. Also use a plain `window.SpeechSynthesisUtterance`
replacement when injecting fake voices, because the native utterance's `voice`
setter rejects non-native voice objects.

## The lesson-loop snippet

See `.claude/scripts/lesson-loop.js`. Reseed between runs:

```js
localStorage.setItem('englingo:v1', JSON.stringify({ onboarded: true, dailyGoalXp: 20,
  xpTotal: 0, gems: 0, hearts: 5, challenge: false, reduceMotion: false, voiceURI: null,
  unlockedFloor: 0, streak: { count: 0, lastDay: null, freezes: 1 }, days: {}, lessons: {},
  chests: {}, srs: {}, flags: { silentHint: true, voiceNote: true }, dialogues: {} }));
location.reload();
```
