# EngLingo 英

為廣東話人士而設嘅英文學習 app — a beautiful, lightweight, Duolingo-style app that teaches beginner **English to Cantonese speakers**. The mirror image of [Idoialingo](https://github.com/charlieSAX/idoialingo).

- **Target shown as the hero:** English words + **IPA** pronunciation (RP / British)
- **Known language / gloss:** Traditional Cantonese with Jyutping
- **Interface language:** Cantonese (廣東話)
- **Audio:** the device's own English voice (`en-GB` preferred) via the Web Speech API — no audio files, works offline
- **Architecture:** single-page PWA. No backend, no login, no database. Progress lives in `localStorage` under its own key (`englingo:v1`), so it never clashes with Idoialingo even on the same domain.

Three levels · 24 units · ~120 English words mapped to authentic colloquial Cantonese, with exercises generated fresh by an engine every session. The Cantonese aspect unit is re-pointed to teach English tense (past / -ing / perfect / will).

## Run it

```bash
npm install
npm run dev        # local dev
npm run build      # static production build in dist/
npm run preview    # serve the production build locally
```

## Put it on an iPhone (GitHub Pages)

1. Create a repo (e.g. `englingo`), **Settings → Pages → Source: GitHub Actions**.
2. Push this folder. The included workflow builds with the right base path and publishes to `https://<you>.github.io/englingo/`.
3. On the iPhone: open that URL in Safari → Share → **Add to Home Screen**. Launches full-screen with the 英 icon, works offline.

## English audio on iOS

For the nicest voice: **設定 → 輔助使用 → 朗讀內容 → 語音 → English → British English**, and download the Enhanced / Premium voice. Flip the silent switch off to hear it in Safari (the app reminds you once). The IPA shown is RP (British), to match.

## Project shape

```
src/
  data/        vocabulary bank (English + IPA ↔ Cantonese gloss) + sentences
  lib/         exercise generator · SRS + progress store · English speech · hues
  screens/     welcome · home path · lesson player · six exercises · practise · stats · you/settings
  components/  icons · IPA & Jyutping renderers · speaker buttons
```

Built by flipping Idoialingo: same engine, gamification, SRS, PWA and backup/restore — direction reversed and the interface translated to Cantonese.
