import { useEffect, useState } from 'react';
import { LEVELS, findLesson } from './data';
import { hueVars } from './lib/hues';
import type { HueKey, Progress } from './types';
import { initSpeech, setPreferredVoice } from './lib/speech';
import { actions, isLessonDone, useProgress, getState } from './lib/store';
import { Grain } from './components/bits';
import { NavLearnIcon, NavPractiseIcon, NavStatsIcon, NavTalkIcon, NavYouIcon } from './components/icons';
import { Welcome } from './screens/Welcome';
import { Home } from './screens/Home';
import { Practise } from './screens/Practise';
import { Stats } from './screens/Stats';
import { You } from './screens/You';
import { ConversationList, DialoguePlayer } from './screens/Conversation';
import { findDialogue } from './data/dialogues';
import { LessonPlayer, type Session } from './screens/LessonPlayer';

type Tab = 'learn' | 'talk' | 'practise' | 'stats' | 'you';

const TAB_HUES: Record<Tab, HueKey> = {
  learn: 'jade',
  talk: 'coral',
  practise: 'teal',
  stats: 'violet',
  you: 'amber'
};

/** Hue of the unit holding the first unfinished lesson — colours the Learn tab. */
function currentUnitHue(p: Progress): HueKey {
  for (const level of LEVELS)
    for (const unit of level.units)
      for (const lesson of unit.lessons) if (!isLessonDone(p, lesson.id)) return unit.hue;
  return 'jade';
}

export default function App() {
  const p = useProgress();
  const [tab, setTab] = useState<Tab>('learn');
  const [session, setSession] = useState<Session | null>(null);
  const [dialogueId, setDialogueId] = useState<string | null>(null);

  useEffect(() => {
    initSpeech(getState().voiceURI);
    actions.dailyHeartRefill();
  }, []);

  useEffect(() => {
    setPreferredVoice(p.voiceURI);
  }, [p.voiceURI]);

  // active hue: the playing lesson's unit, else the learner's current unit
  let hue: HueKey = TAB_HUES[tab];
  if (session?.kind === 'lesson') hue = findLesson(session.lessonId)?.unit.hue ?? 'jade';
  else if (session?.kind === 'practise') hue = 'teal';
  else if (dialogueId) hue = findDialogue(dialogueId)?.hue ?? 'coral';
  else if (tab === 'learn') hue = currentUnitHue(p);

  return (
    <div className={`app-center${p.reduceMotion ? ' reduce-motion' : ''}`}>
      <div className="phone" style={hueVars(hue) as React.CSSProperties}>
        <Grain />

        {!p.onboarded ? (
          <Welcome />
        ) : session ? (
          <LessonPlayer
            key={session.kind === 'lesson' ? session.lessonId : 'practise'}
            session={session}
            onExit={() => setSession(null)}
          />
        ) : dialogueId ? (
          <DialoguePlayer key={dialogueId} dialogueId={dialogueId} onExit={() => setDialogueId(null)} />
        ) : (
          <>
            {tab === 'learn' && <Home onStartLesson={(lessonId) => setSession({ kind: 'lesson', lessonId })} />}
            {tab === 'talk' && <ConversationList onStart={(id) => setDialogueId(id)} />}
            {tab === 'practise' && <Practise onStart={() => setSession({ kind: 'practise' })} onGoLearn={() => setTab('learn')} />}
            {tab === 'stats' && <Stats />}
            {tab === 'you' && <You />}

            <nav className="nav" aria-label="Main">
              <NavBtn label="學習" active={tab === 'learn'} onClick={() => setTab('learn')}>
                <NavLearnIcon />
              </NavBtn>
              <NavBtn label="對話" active={tab === 'talk'} onClick={() => setTab('talk')}>
                <NavTalkIcon />
              </NavBtn>
              <NavBtn label="練習" active={tab === 'practise'} onClick={() => setTab('practise')}>
                <NavPractiseIcon />
              </NavBtn>
              <NavBtn label="統計" active={tab === 'stats'} onClick={() => setTab('stats')}>
                <NavStatsIcon />
              </NavBtn>
              <NavBtn label="我" active={tab === 'you'} onClick={() => setTab('you')}>
                <NavYouIcon />
              </NavBtn>
            </nav>
          </>
        )}
      </div>
    </div>
  );
}

function NavBtn({
  label,
  active,
  onClick,
  children
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button className={active ? 'on' : ''} aria-label={label} aria-current={active ? 'page' : undefined} onClick={onClick}>
      <span className="pill">{children}</span>
      <span className="lab">{label}</span>
    </button>
  );
}
