import { useEffect, useRef, useState } from 'react';
import { actions, useProgress, wordsLearned } from '../lib/store';
import { englishVoices, isIOS, setPreferredVoice, speak } from '../lib/speech';

function Switch({ on, onToggle, label }: { on: boolean; onToggle: () => void; label: string }) {
  return <button className={`switch${on ? ' on' : ''}`} role="switch" aria-checked={on} aria-label={label} onClick={onToggle} />;
}

export function You() {
  const p = useProgress();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [restoreMsg, setRestoreMsg] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const update = () => setVoices(englishVoices());
    update();
    try {
      window.speechSynthesis.addEventListener('voiceschanged', update);
      return () => window.speechSynthesis.removeEventListener('voiceschanged', update);
    } catch {
      return;
    }
  }, []);

  const backup = () => {
    const blob = new Blob([actions.exportProgress()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `englingo-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setRestoreMsg('備份已經存咗去你嘅「檔案」/「下載」。');
  };

  const onRestoreFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    if (!window.confirm('用呢個備份還原？會覆蓋呢部機而家嘅進度。')) return;
    const text = await file.text();
    const ok = actions.importProgress(text);
    setRestoreMsg(ok ? '進度已還原 ✓' : '呢個檔案唔似係 EngLingo 嘅備份。');
  };

  return (
    <div className="page-scroll">
      <h1 className="page-title">我</h1>
      <p className="page-sub">
        {wordsLearned(p)} 個生字 · {p.xpTotal} XP · 連續 {p.streak.count} 日
      </p>

      <div className="setrow" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
        <div>
          <div className="sl">英文發音</div>
          <div className="sd">
            {voices.length === 0 ? '部機暫時搵唔到英文發音。' : '揀一把聲，所有發音都會用佢。撳一下可以試聽。'}
          </div>
        </div>
        <select
          className="select"
          style={{ marginTop: 10 }}
          aria-label="英文發音"
          value={p.voiceURI ?? ''}
          onChange={(e) => {
            const uri = e.target.value || null;
            actions.setVoice(uri);
            setPreferredVoice(uri);
            setTimeout(() => speak('Hello'), 120);
          }}
        >
          <option value="">自動（最好嘅英文發音）</option>
          {voices.map((v) => (
            <option key={v.voiceURI} value={v.voiceURI}>
              {v.name} · {v.lang}
            </option>
          ))}
        </select>
        {isIOS() && (
          <div className="sd" style={{ marginTop: 10 }}>
            💡 想發音靚啲，可以下載英式語音：設定 → 輔助使用 → 朗讀內容 → 語音 → English → British English（揀 Enhanced / Premium）。
          </div>
        )}
      </div>

      <div className="setrow">
        <div>
          <div className="sl">挑戰模式</div>
          <div className="sd">心心會跨課保留，用晒就會結束嗰課。補充要 300 粒寶石。</div>
        </div>
        <Switch on={p.challenge} onToggle={() => actions.setChallenge(!p.challenge)} label="挑戰模式" />
      </div>

      <div className="setrow">
        <div>
          <div className="sl">減少動態效果</div>
          <div className="sd">關閉彈跳動畫同彩屑。</div>
        </div>
        <Switch on={p.reduceMotion} onToggle={() => actions.setReduceMotion(!p.reduceMotion)} label="減少動態效果" />
      </div>

      <div className="setrow">
        <div>
          <div className="sl">每日目標</div>
          <div className="sd">用嚟計連續同熱力圖嘅 XP 目標。</div>
        </div>
        <select
          className="select"
          style={{ width: 110 }}
          aria-label="每日目標"
          value={p.dailyGoalXp}
          onChange={(e) => actions.setDailyGoal(Number(e.target.value))}
        >
          <option value={10}>10 XP</option>
          <option value={20}>20 XP</option>
          <option value={30}>30 XP</option>
        </select>
      </div>

      <div className="setrow" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
        <div>
          <div className="sl">備份同還原</div>
          <div className="sd">進度只係存喺呢部機。可以存一個備份檔案保管，或者搬去另一部電話，隨時還原。</div>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
          <button className="softbtn" onClick={backup}>
            ⤓ 備份
          </button>
          <button className="softbtn" onClick={() => fileRef.current?.click()}>
            ⤒ 還原
          </button>
        </div>
        <input ref={fileRef} type="file" accept="application/json,.json" onChange={onRestoreFile} style={{ display: 'none' }} aria-hidden="true" />
        {restoreMsg && (
          <div className="sd" style={{ marginTop: 10, color: 'var(--ux-d)', fontWeight: 700 }}>
            {restoreMsg}
          </div>
        )}
      </div>

      <button
        className="danger"
        onClick={() => {
          if (window.confirm('重設所有進度？連續、XP、寶石同生字熟練度都會清走，無得返轉頭。')) {
            actions.resetAll();
          }
        }}
      >
        重設進度
      </button>

      <p style={{ textAlign: 'center', color: 'var(--muted)', fontWeight: 600, fontSize: 12, marginTop: 18 }}>
        EngLingo 英 · 所有嘢都存喺呢部機 — 無帳戶、無雲端。
      </p>
    </div>
  );
}
