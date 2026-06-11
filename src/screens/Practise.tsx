import { VOCAB } from '../data';
import { dueWords, useProgress, wordsLearned } from '../lib/store';

export function Practise({ onStart, onGoLearn }: { onStart: () => void; onGoLearn: () => void }) {
  const p = useProgress();
  const learned = wordsLearned(p);
  const due = dueWords(p, 6);

  if (learned === 0) {
    return (
      <div className="page-scroll">
        <h1 className="page-title">練習</h1>
        <p className="page-sub">幫你溫習最弱嘅生字</p>
        <div className="empty">
          <div className="big" aria-hidden="true">
            🌱
          </div>
          <h3>仲未有嘢可以溫習</h3>
          <p>練習會揀返你學過嘅生字。完成第一課之後，啲字就會喺度等你練習。</p>
          <button className="cont" style={{ marginTop: 26, maxWidth: 280 }} onClick={onGoLearn}>
            去上堂
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-scroll">
      <h1 className="page-title">練習</h1>
      <p className="page-sub">你嘅生字庫有 {learned} 個字 · 最弱嘅排先</p>

      <div className="statcard" style={{ marginBottom: 18 }}>
        <div className="k">準備溫習</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 10 }}>
          {due.map((id) => {
            const w = VOCAB[id];
            if (!w) return null;
            return (
              <span
                key={id}
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: 7,
                  background: 'var(--paper2)',
                  borderRadius: 12,
                  padding: '7px 11px',
                  fontWeight: 700,
                  boxShadow: 'inset 0 0 0 1px var(--line-d)'
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 800 }}>{w.en}</span>
                <span style={{ fontSize: 11, color: 'var(--ux-d)' }}>{w.ipa}</span>
              </span>
            );
          })}
        </div>
      </div>

      <button className="cont" onClick={onStart}>
        開始練習 · +12 XP
      </button>
      <p style={{ textAlign: 'center', color: 'var(--muted)', fontWeight: 600, fontSize: 12.5, marginTop: 14 }}>
        每次都會重新生成，練習永遠唔會用完。
      </p>
    </div>
  );
}
