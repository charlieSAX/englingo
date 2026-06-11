import type { HueKey } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// Conversation mode — scripted dialogues in real situations.
// The other speaker's lines are spoken aloud (en-GB). On the learner's turn,
// the Cantonese meaning is shown and they choose the natural English way to
// say it from three options. Distractors are plausible but wrong (broken
// grammar, wrong register, or wrong meaning) so a wrong pick teaches.
// Fully offline; no backend.
// ─────────────────────────────────────────────────────────────────────────────

export interface YourTurn {
  speaker: 'you';
  /** the natural English reply (the correct answer) */
  en: string;
  /** the Cantonese meaning shown as the prompt: 「你想講…」 */
  cn: string;
  /** two wrong English options */
  distractors: [string, string];
}

export interface TheirTurn {
  speaker: 'them';
  en: string;
  cn: string;
}

export type DialogueLine = TheirTurn | YourTurn;

export interface Dialogue {
  id: string;
  title: string;
  titleHan: string;
  hue: HueKey;
  /** who you are talking to, shown in the header */
  partner: string;
  lines: DialogueLine[];
}

export const DIALOGUES: Dialogue[] = [
  {
    id: 'd-coffee',
    title: 'Ordering coffee',
    titleHan: '買咖啡',
    hue: 'mandarin',
    partner: '咖啡師 Barista',
    lines: [
      { speaker: 'them', en: 'Hi, what can I get you?', cn: '你好，想要啲咩呀？' },
      {
        speaker: 'you',
        en: 'Could I get a latte, please?',
        cn: '唔該，要一杯鮮奶咖啡。',
        distractors: ['I am a latte, please.', 'Give me latte now.']
      },
      { speaker: 'them', en: 'Sure. Anything else?', cn: '好呀。仲要啲咩嗎？' },
      {
        speaker: 'you',
        en: "No thanks, that's all.",
        cn: '唔使喇，夠喇。',
        distractors: ['No more of things.', 'Yes no thank you.']
      },
      { speaker: 'them', en: "That'll be thirty dollars.", cn: '一共三十蚊。' },
      {
        speaker: 'you',
        en: 'Here you go.',
        cn: '嗱，俾你。',
        distractors: ['Money is here you.', 'Take of my money.']
      },
      { speaker: 'them', en: 'Thanks! It will be ready in a minute.', cn: '唔該！一陣就整好。' },
      {
        speaker: 'you',
        en: 'Thanks so much. Have a nice day!',
        cn: '多謝晒。祝你今日愉快！',
        distractors: ['Thank you very day!', 'Nice day to my coffee.']
      }
    ]
  },
  {
    id: 'd-catchup',
    title: 'Bumping into a friend',
    titleHan: '偶遇朋友',
    hue: 'jade',
    partner: '老友 Old friend',
    lines: [
      { speaker: 'them', en: "Hey! Long time no see. How's it going?", cn: '喂！好耐冇見，最近點呀？' },
      {
        speaker: 'you',
        en: 'Not bad! Busy with work. How about you?',
        cn: '幾好呀！返工好忙。你呢？',
        distractors: ['Not bad! Work is busy me.', 'I am work very busy you?']
      },
      { speaker: 'them', en: 'Same here. We should grab a coffee sometime.', cn: '我都係。不如搵日飲返杯咖啡。' },
      {
        speaker: 'you',
        en: 'Sounds good. Are you free this weekend?',
        cn: '好呀。你今個週末得唔得閒呀？',
        distractors: ['Sounds good. Are you free money?', 'Good sound. This weekend you empty?']
      },
      { speaker: 'them', en: 'Saturday works for me.', cn: '星期六我得。' },
      {
        speaker: 'you',
        en: 'Perfect, see you then!',
        cn: '好，到時見！',
        distractors: ['Perfect, look at you then!', 'See you there time!']
      }
    ]
  },
  {
    id: 'd-directions',
    title: 'Asking for directions',
    titleHan: '問路',
    hue: 'azure',
    partner: '路人 Passer-by',
    lines: [
      {
        speaker: 'you',
        en: 'Excuse me, how do I get to the station?',
        cn: '唔該，請問點去車站呀？',
        distractors: ['Excuse me, where station going me?', 'Sorry, station how to be?']
      },
      { speaker: 'them', en: 'Go straight and turn left at the corner.', cn: '直行，去到轉角轉左。' },
      {
        speaker: 'you',
        en: 'Is it far from here?',
        cn: '離呢度遠唔遠呀？',
        distractors: ['Is it far of here?', 'Here is it long away?']
      },
      { speaker: 'them', en: 'About five minutes on foot.', cn: '行路大概五分鐘。' },
      {
        speaker: 'you',
        en: 'Great, thank you so much!',
        cn: '太好喇，唔該晒！',
        distractors: ['Great, thank you too much!', 'Big thanks of you!']
      },
      { speaker: 'them', en: 'No worries. Have a good one!', cn: '唔使客氣，祝你愉快！' }
    ]
  },
  {
    id: 'd-phone',
    title: 'A phone call',
    titleHan: '電話約朋友',
    hue: 'violet',
    partner: '朋友 Friend',
    lines: [
      { speaker: 'them', en: "Hello? Oh hi! What's up?", cn: '喂？哦你好呀！咩事呀？' },
      {
        speaker: 'you',
        en: 'Are you free on Friday night?',
        cn: '你星期五晚得唔得閒呀？',
        distractors: ['Are you free in Friday night?', 'Friday night you are empty?']
      },
      { speaker: 'them', en: "Let me check... yes, I'm free.", cn: '等我睇吓⋯⋯得，我得閒。' },
      {
        speaker: 'you',
        en: 'Do you want to get dinner together?',
        cn: '想唔想一齊食晚飯呀？',
        distractors: ['Do you want dinner to me?', 'You want eat together dinner or no?']
      },
      { speaker: 'them', en: 'Sure! Where shall we meet?', cn: '好呀！喺邊度等？' },
      {
        speaker: 'you',
        en: "Let's meet at the station at seven.",
        cn: '七點喺車站等啦。',
        distractors: ['We meet station seven o’clock place.', "Let's meet on the station in seven."]
      },
      { speaker: 'them', en: 'Perfect. See you Friday!', cn: '好。星期五見！' }
    ]
  },
  {
    id: 'd-shopping',
    title: 'Buying clothes',
    titleHan: '買衫',
    hue: 'pink',
    partner: '店員 Shop assistant',
    lines: [
      { speaker: 'them', en: 'Hi there, can I help you?', cn: '你好，需唔需要幫手呀？' },
      {
        speaker: 'you',
        en: "Yes, I'm looking for a jacket.",
        cn: '係呀，我想搵件外套。',
        distractors: ['Yes, I am looking a jacket.', 'Yes, jacket is looking for me.']
      },
      { speaker: 'them', en: 'What size are you?', cn: '你著咩碼呀？' },
      {
        speaker: 'you',
        en: 'Medium, I think. Can I try it on?',
        cn: '應該中碼。可唔可以試著呀？',
        distractors: ['Medium. Can I try it up?', 'Middle size. Can I taste it?']
      },
      { speaker: 'them', en: 'Of course, the fitting room is over there.', cn: '梗係得，試身室喺嗰邊。' },
      {
        speaker: 'you',
        en: "It fits well. I'll take it.",
        cn: '幾合身，要呢件喇。',
        distractors: ["It fits good. I'll bring it.", 'It is fitting me well done.']
      },
      { speaker: 'them', en: "Great! That's two hundred dollars.", cn: '好！一共二百蚊。' }
    ]
  },
  {
    id: 'd-doctor',
    title: 'At the doctor',
    titleHan: '睇醫生',
    hue: 'teal',
    partner: '醫生 Doctor',
    lines: [
      { speaker: 'them', en: 'What seems to be the problem?', cn: '你邊度唔舒服呀？' },
      {
        speaker: 'you',
        en: 'I have a headache and a fever.',
        cn: '我頭痛同埋發燒。',
        distractors: ['I am a headache and fever.', 'My head is paining fire.']
      },
      { speaker: 'them', en: 'How long have you felt like this?', cn: '噉樣幾耐喇？' },
      {
        speaker: 'you',
        en: 'Since yesterday morning.',
        cn: '由尋日朝早開始。',
        distractors: ['From yesterday until morning.', 'Since the morning of tomorrow.']
      },
      { speaker: 'them', en: 'Take this medicine twice a day, and rest.', cn: '呢隻藥一日食兩次，同埋要休息。' },
      {
        speaker: 'you',
        en: 'Thank you, doctor.',
        cn: '唔該醫生。',
        distractors: ['Thanks you of doctor.', 'Doctor is thanked.']
      }
    ]
  },
  {
    id: 'd-restaurant',
    title: 'At a restaurant',
    titleHan: '餐廳食飯',
    hue: 'amber',
    partner: '侍應 Waiter',
    lines: [
      { speaker: 'them', en: 'Are you ready to order?', cn: '可以落單未呀？' },
      {
        speaker: 'you',
        en: 'Yes. Could we have two bowls of noodles?',
        cn: '可以。唔該兩碗麵。',
        distractors: ['Yes. Give two noodles bowls.', 'Yes. Two noodles we are having?']
      },
      { speaker: 'them', en: 'Anything to drink?', cn: '要啲咩飲品呀？' },
      {
        speaker: 'you',
        en: 'Two cups of tea, please.',
        cn: '唔該兩杯茶。',
        distractors: ['Two teas of cups, please.', 'Please tea two cup.']
      },
      { speaker: 'them', en: "No problem. It won't be long.", cn: '冇問題，好快嚟。' },
      { speaker: 'them', en: 'Here you are. Enjoy!', cn: '嚟喇，慢慢食！' },
      {
        speaker: 'you',
        en: 'It smells amazing. Thank you!',
        cn: '好香呀，唔該晒！',
        distractors: ['It smells amazed. Thank you!', 'The smell is tasting good!']
      }
    ]
  },
  {
    id: 'd-interview',
    title: 'A job interview',
    titleHan: '見工',
    hue: 'coral',
    partner: '面試官 Interviewer',
    lines: [
      { speaker: 'them', en: 'Tell me about yourself.', cn: '介紹吓你自己。' },
      {
        speaker: 'you',
        en: "I'm hard-working and I learn fast.",
        cn: '我做嘢好勤力，學嘢又快。',
        distractors: ['I am working hardly and learn fastly.', 'Me is hard work and fast.']
      },
      { speaker: 'them', en: 'Why do you want this job?', cn: '點解你想做呢份工？' },
      {
        speaker: 'you',
        en: 'Because I love talking to people.',
        cn: '因為我鍾意同人傾偈。',
        distractors: ['Because I love talking at people.', 'Because people is loving my talk.']
      },
      { speaker: 'them', en: 'When can you start?', cn: '你幾時可以開始返工？' },
      {
        speaker: 'you',
        en: 'I can start next week.',
        cn: '我下個禮拜可以開始。',
        distractors: ['I can start the week of next.', 'Next week can start me.']
      },
      { speaker: 'them', en: "Great. We'll be in touch!", cn: '好。我哋會再聯絡你！' }
    ]
  }
];

export function findDialogue(id: string): Dialogue | undefined {
  return DIALOGUES.find((d) => d.id === id);
}
