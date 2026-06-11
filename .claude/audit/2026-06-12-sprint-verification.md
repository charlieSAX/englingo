# 2026-06-12 sprint — runtime verification log (raw evidence)

Dev server: vite on localhost:5199 (Mac host). Driver: Playwright (real browser).
Rubric: /Users/crosser/Obsidian/Projects/Rubric - EngLingo Sprint - 2026-06-12.md

## 1. Viewport fit (lesson loop, per-screen `scrollHeight - clientHeight`)

- BASELINE before fix, 320×568: intro over=150, pickMeaning list over=140,
  pairs over=147, grid2 over=39-71. (Charlie's bug confirmed.)
- AFTER fix:
  - 320×568: 12 screens + COMPLETE, all over=0.
  - 375×667: full lesson, overflows NONE.
  - 390×844: full lesson, overflows NONE.
  - 430×932: full lesson, overflows NONE.
- Welcome screen 320×568: overflow 0.

## 2. Levels 4-6 content

- 80 vocab entries per level (grep count of `ipa:` = 80/80/80, 240 total).
- No duplicate vocab ids across levels 1-6; no duplicate `en` or `trad`
  (after fixes: dog id `gau2zai2`, Lonely 孤獨 replaced Upset 唔開心).
- All `needs` ids in sentences.ts resolve to vocab ids (node script: NONE missing).
- All lesson newWords/reviewWords ids resolve (node script: ALL RESOLVE).
- Jump 跳級 to L4: floor=4 persisted, START moved to "Nervous 緊張" (c4u1l1);
  full L4 lesson played to COMPLETE, overflows NONE.
- L6 at 320×568: first word "Opportunity", full lesson COMPLETE, overflows NONE.
- tsc --noEmit clean; `npm run build` (Mac) clean; bundle 89,087 B gzip JS.

## 3. Conversation mode

- 8 dialogue cards render on 對話 tab.
- d-coffee played start to finish: wrong pick shakes and stays (accuracy
  recorded 44% in brute-force run), correct pick appends bubble + speaks,
  completion screen 完成對話！ +15 XP; localStorage shows xpTotal=15 and
  dialogues={"d-coffee":true}.
- d-directions: dialogue starting on the learner's turn works (3 options,
  prompt shows the Cantonese meaning).
- Visual check 375×667: chat bubbles + pinned options, no clipping.

## 4. Donation

- You tab `.support` href=https://buymeacoffee.com/charliewrol target=_blank.
- Lesson-complete `.support-mini` same href.
- Live BMC page fetched: "Support Charlie Rosser" page is up.

## 5. Migration / no-break

- Old-shaped profile (no `dialogues` key, xp=120, c1u1l1 done) loaded after
  update: xp kept 120, lesson kept, home renders, 5 nav tabs, no errors.

## 6. Console

- 0 errors, 0 warnings across the full pass.

## Outstanding at time of writing

- Live deploy + re-verification on https://charliesax.github.io/englingo/
  (criterion 9) — done after push; see session log.
