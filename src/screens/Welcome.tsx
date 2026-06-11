import { useState } from 'react';
import { actions } from '../lib/store';
import { Ipa } from '../components/bits';

const GOALS = [
  { xp: 10, label: '輕鬆', sub: '一日約一課' },
  { xp: 20, label: '正常', sub: '一日約兩課' },
  { xp: 30, label: '認真', sub: '一日約三課' }
];

export function Welcome() {
  const [step, setStep] = useState<1 | 2>(1);
  const [goal, setGoal] = useState(20);

  if (step === 1) {
    return (
      <div className="welcome">
        <div className="wordmark">
          EngLingo
          <span className="yue" aria-hidden="true">
            英
          </span>
        </div>
        <p className="tag">輕輕鬆鬆學英文。真人發音、IPA 音標，一步一步嚟。</p>
        <div className="heroline">
          <div className="char-big f-hero">Hello</div>
          <div className="jyut" style={{ color: 'var(--jade-d)', fontWeight: 700, fontSize: 20, marginTop: 8 }}>
            <Ipa ipa="/həˈləʊ/" />
          </div>
          <div className="f-han" style={{ color: 'var(--muted)', fontWeight: 500, marginTop: 6 }}>你好</div>
        </div>
        <button className="cont" style={{ marginTop: 34 }} onClick={() => setStep(2)}>
          開始學習
        </button>
      </div>
    );
  }

  return (
    <div className="welcome">
      <div className="wordmark" style={{ fontSize: 30 }}>
        每日目標
      </div>
      <p className="tag">定個小目標，連續學習更易堅持。隨時可以喺「我」→ 設定度改。</p>
      <div className="goal-row" style={{ opacity: 0, animation: 'rise .7s .3s cubic-bezier(.2,.8,.25,1) forwards' }}>
        {GOALS.map((g) => (
          <button key={g.xp} className={`goal${goal === g.xp ? ' sel' : ''}`} onClick={() => setGoal(g.xp)}>
            {g.xp} XP
            <small>
              {g.label} · {g.sub}
            </small>
          </button>
        ))}
      </div>
      <button className="cont" style={{ marginTop: 26 }} onClick={() => actions.completeOnboarding(goal)}>
        開始喇！
      </button>
    </div>
  );
}
