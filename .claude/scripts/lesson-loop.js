// EngLingo e2e lesson loop. Run inside the page (Playwright evaluate or the
// browser console) AFTER seeding an onboarded profile (see .claude/verify.md).
// Plays the current lesson start to finish and reports per-screen overflow.
// PASS = every entry has over: 0 and the last entry is COMPLETE.
(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const q = (s) => document.querySelector(s);
  const results = [];
  q('.node.current')?.click(); await sleep(600);
  q('.sheet.show .cont')?.click(); await sleep(800);
  for (let step = 0; step < 40; step++) {
    if (q('.done-wrap')) { results.push({ step, prompt: 'COMPLETE' }); break; }
    const ex = q('.exscreen.active');
    if (!ex) { results.push({ step, prompt: 'NO-SCREEN' }); break; }
    const prompt = ex.querySelector('.prompt')?.textContent ?? '?';
    results.push({ step, prompt, over: ex.scrollHeight - ex.clientHeight });
    if (prompt === '配對') {
      let guard = 0;
      while (ex.querySelectorAll('.ptile:not(.gone)').length > 0 && guard++ < 80) {
        const tiles = [...ex.querySelectorAll('.ptile:not(.gone)')];
        const left = tiles.find((t) => t.querySelector('.pc'));
        if (!left) break;
        for (const r of tiles.filter((t) => t.querySelector('.pen'))) {
          left.click(); await sleep(70);
          r.click(); await sleep(480);
          if (r.classList.contains('gone')) break;
        }
      }
      await sleep(900);
      q('.footer .btn')?.click(); await sleep(450);
      continue;
    }
    const opt = ex.querySelector('.opt, .lopt');
    if (opt) { opt.click(); await sleep(120); }
    const bank = ex.querySelectorAll('.wb-bank .wtile:not(.used)');
    for (const t of [...bank].slice(0, 6)) { t.click(); await sleep(50); }
    q('.footer .btn')?.click(); await sleep(400);
    const fb2 = q('.footer .btn');
    if (fb2 && fb2.textContent.includes('繼續')) { fb2.click(); await sleep(450); }
  }
  console.table(results);
  return results;
})();
