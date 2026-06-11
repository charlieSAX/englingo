import type { Level, Vocab } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// Level 6 — "Sound natural" 地道
// Abstract everyday words, describing, adverbs, communication verbs, the
// expressions people actually say, connecting words, plans and reactions.
// Same conventions as Levels 4-5.
// ─────────────────────────────────────────────────────────────────────────────

export const VOCAB_L6: Vocab[] = [
  // Unit 1 — Big little words 抽象
  { id: 'gei1wui6', trad: '機會', jyut: 'gei1 wui6', en: 'Opportunity', ipa: '/ˌɒpəˈtjuːnəti/' },
  { id: 'kyut3ding6', trad: '決定', jyut: 'kyut3 ding6', en: 'Decision', ipa: '/dɪˈsɪʒən/' },
  { id: 'gin3ji5', trad: '建議', jyut: 'gin3 ji5', en: 'Advice', ipa: '/ədˈvaɪs/' },
  { id: 'syun2zaak6', trad: '選擇', jyut: 'syun2 zaak6', en: 'Choice', ipa: '/tʃɔɪs/' },
  { id: 'co3ng6', trad: '錯誤', jyut: 'co3 ng6', en: 'Mistake', ipa: '/mɪˈsteɪk/' },
  { id: 'sing4gung1', trad: '成功', jyut: 'sing4 gung1', en: 'Success', ipa: '/səkˈses/' },
  { id: 'sat1baai6', trad: '失敗', jyut: 'sat1 baai6', en: 'Failure', ipa: '/ˈfeɪljə/' },
  { id: 'jyun4jan1', trad: '原因', jyut: 'jyun4 jan1', en: 'Reason', ipa: '/ˈriːzən/' },
  { id: 'man6tai4', trad: '問題', jyut: 'man6 tai4', en: 'Problem', ipa: '/ˈprɒbləm/' },
  { id: 'baan6faat3', trad: '辦法', jyut: 'baan6 faat3', en: 'Solution', ipa: '/səˈluːʃən/' },

  // Unit 2 — Describing 形容
  { id: 'hou2zeng3', trad: '好正', jyut: 'hou2 zeng3', en: 'Amazing', ipa: '/əˈmeɪzɪŋ/' },
  { id: 'hou2caa1', trad: '好差', jyut: 'hou2 caa1', en: 'Terrible', ipa: '/ˈterəbəl/' },
  { id: 'hou2faan4', trad: '好煩', jyut: 'hou2 faan4', en: 'Annoying', ipa: '/əˈnɔɪɪŋ/' },
  { id: 'syu1fuk6', trad: '舒服', jyut: 'syu1 fuk6', en: 'Comfortable', ipa: '/ˈkʌmftəbəl/' },
  { id: 'fong1bin6', trad: '方便', jyut: 'fong1 bin6', en: 'Convenient', ipa: '/kənˈviːniənt/' },
  { id: 'ho2kaau3', trad: '可靠', jyut: 'ho2 kaau3', en: 'Reliable', ipa: '/rɪˈlaɪəbəl/' },
  { id: 'kei4gwaai3', trad: '奇怪', jyut: 'kei4 gwaai3', en: 'Strange', ipa: '/streɪndʒ/' },
  { id: 'pou2tung1', trad: '普通', jyut: 'pou2 tung1', en: 'Ordinary', ipa: '/ˈɔːdənri/' },
  { id: 'dak6bit6', trad: '特別', jyut: 'dak6 bit6', en: 'Special', ipa: '/ˈspeʃəl/' },
  { id: 'jau5jung6', trad: '有用', jyut: 'jau5 jung6', en: 'Useful', ipa: '/ˈjuːsfəl/' },

  // Unit 3 — Adverbs 副詞
  { id: 'zeoi3gan6', trad: '最近', jyut: 'zeoi3 gan6', en: 'Recently', ipa: '/ˈriːsəntli/' },
  { id: 'zeoi3zung1', trad: '最終', jyut: 'zeoi3 zung1', en: 'Eventually', ipa: '/ɪˈventʃuəli/' },
  { id: 'zik1hak1', trad: '即刻', jyut: 'zik1 hak1', en: 'Immediately', ipa: '/ɪˈmiːdiətli/' },
  { id: 'dat6jin4', trad: '突然', jyut: 'dat6 jin4', en: 'Suddenly', ipa: '/ˈsʌdənli/' },
  { id: 'kei4sat6', trad: '其實', jyut: 'kei4 sat6', en: 'Actually', ipa: '/ˈæktʃuəli/' },
  { id: 'caa1m4do1', trad: '差唔多', jyut: 'caa1 m4 do1', en: 'Almost', ipa: '/ˈɔːlməʊst/' },
  { id: 'do1sou3', trad: '多數', jyut: 'do1 sou3', en: 'Probably', ipa: '/ˈprɒbəbli/' },
  { id: 'ngaam1saai3', trad: '啱晒', jyut: 'ngaam1 saai3', en: 'Exactly', ipa: '/ɪɡˈzæktli/' },
  { id: 'siu2sam1', trad: '小心', jyut: 'siu2 sam1', en: 'Carefully', ipa: '/ˈkeəfəli/' },
  { id: 'jat1zik6', trad: '一直', jyut: 'jat1 zik6', en: 'All along', ipa: '/ˌɔːl əˈlɒŋ/' },

  // Unit 4 — Communication 溝通
  { id: 'gaai2sik1', trad: '解釋', jyut: 'gaai2 sik1', en: 'Explain', ipa: '/ɪkˈspleɪn/' },
  { id: 'jing1sing4', trad: '應承', jyut: 'jing1 sing4', en: 'Promise', ipa: '/ˈprɒmɪs/' },
  { id: 'tau4sou3', trad: '投訴', jyut: 'tau4 sou3', en: 'Complain', ipa: '/kəmˈpleɪn/' },
  { id: 'tai4ji5', trad: '提議', jyut: 'tai4 ji5', en: 'Suggest', ipa: '/səˈdʒest/' },
  { id: 'dou6hip3', trad: '道歉', jyut: 'dou6 hip3', en: 'Apologise', ipa: '/əˈpɒlədʒaɪz/' },
  { id: 'tai4hei2', trad: '提起', jyut: 'tai4 hei2', en: 'Mention', ipa: '/ˈmenʃən/' },
  { id: 'aai3gaau1', trad: '嗌交', jyut: 'aai3 gaau1', en: 'Argue', ipa: '/ˈɑːɡjuː/' },
  { id: 'syut3fuk6', trad: '說服', jyut: 'syut3 fuk6', en: 'Persuade', ipa: '/pəˈsweɪd/' },
  { id: 'gong2daai6waa6', trad: '講大話', jyut: 'gong2 daai6 waa6', en: 'Tell a lie', ipa: '/ˌtel ə ˈlaɪ/' },
  { id: 'gong2siu3', trad: '講笑', jyut: 'gong2 siu3', en: 'Joke', ipa: '/dʒəʊk/' },

  // Unit 5 — Everyday expressions 日常用語
  { id: 'mou5man6tai4', trad: '冇問題', jyut: 'mou5 man6 tai4', en: 'No problem', ipa: '/ˌnəʊ ˈprɒbləm/' },
  { id: 'tai2cing4fong3', trad: '睇情況', jyut: 'tai2 cing4 fong3', en: 'It depends', ipa: '/ɪt dɪˈpendz/' },
  { id: 'maan6maan2lai4', trad: '慢慢嚟', jyut: 'maan6 maan2 lai4', en: 'Take your time', ipa: '/ˌteɪk jɔː ˈtaɪm/' },
  { id: 'zuk1nei5hou2wan6', trad: '祝你好運', jyut: 'zuk1 nei5 hou2 wan6', en: 'Good luck', ipa: '/ˌɡʊd ˈlʌk/' },
  { id: 'zou6dak1hou2', trad: '做得好', jyut: 'zou6 dak1 hou2', en: 'Well done', ipa: '/ˌwel ˈdʌn/' },
  { id: 'dang2zan6', trad: '等陣', jyut: 'dang2 zan6', en: 'Hold on', ipa: '/ˌhəʊld ˈɒn/' },
  { id: 'hou2ho2sik1', trad: '好可惜', jyut: 'hou2 ho2 sik1', en: 'What a pity', ipa: '/ˌwɒt ə ˈpɪti/' },
  { id: 'ceoi4bin2', trad: '隨便', jyut: 'ceoi4 bin2', en: 'Help yourself', ipa: '/ˌhelp jɔːˈself/' },
  { id: 'm4sai2haak3hei3', trad: '唔使客氣', jyut: 'm4 sai2 haak3 hei3', en: "You're welcome", ipa: '/jɔː ˈwelkəm/' },
  { id: 'gaa1jau2', trad: '加油', jyut: 'gaa1 jau2', en: 'Keep going', ipa: '/ˌkiːp ˈɡəʊɪŋ/' },

  // Unit 6 — Connecting words 連接詞
  { id: 'jan1wai6', trad: '因為', jyut: 'jan1 wai6', en: 'Because', ipa: '/bɪˈkɒz/' },
  { id: 'seoi1jin4', trad: '雖然', jyut: 'seoi1 jin4', en: 'Although', ipa: '/ɔːlˈðəʊ/' },
  { id: 'bat1gwo3', trad: '不過', jyut: 'bat1 gwo3', en: 'However', ipa: '/haʊˈevə/' },
  { id: 'ceoi4fei1', trad: '除非', jyut: 'ceoi4 fei1', en: 'Unless', ipa: '/ənˈles/' },
  { id: 'faan2ji4', trad: '反而', jyut: 'faan2 ji4', en: 'Instead', ipa: '/ɪnˈsted/' },
  { id: 'zung2zi1', trad: '總之', jyut: 'zung2 zi1', en: 'Anyway', ipa: '/ˈeniweɪ/' },
  { id: 'gong2hoi1jau6gong2', trad: '講開又講', jyut: 'gong2 hoi1 jau6 gong2', en: 'By the way', ipa: '/ˌbaɪ ðə ˈweɪ/' },
  { id: 'so2ji5', trad: '所以', jyut: 'so2 ji5', en: 'So', ipa: '/səʊ/' },
  { id: 'jyu4gwo2', trad: '如果', jyut: 'jyu4 gwo2', en: 'If', ipa: '/ɪf/' },
  { id: 'tung4maai4', trad: '同埋', jyut: 'tung4 maai4', en: 'And', ipa: '/ænd/' },

  // Unit 7 — Plans & dreams 將來
  { id: 'mung6soeng2', trad: '夢想', jyut: 'mung6 soeng2', en: 'Dream', ipa: '/driːm/' },
  { id: 'muk6biu1', trad: '目標', jyut: 'muk6 biu1', en: 'Goal', ipa: '/ɡəʊl/' },
  { id: 'gai3waak6', trad: '計劃', jyut: 'gai3 waak6', en: 'Plan', ipa: '/plæn/' },
  { id: 'zoeng1loi4', trad: '將來', jyut: 'zoeng1 loi4', en: 'Future', ipa: '/ˈfjuːtʃə/' },
  { id: 'hei1mong6', trad: '希望', jyut: 'hei1 mong6', en: 'Hope', ipa: '/həʊp/' },
  { id: 'gaan2', trad: '揀', jyut: 'gaan2', en: 'Choose', ipa: '/tʃuːz/' },
  { id: 'goi2sin6', trad: '改善', jyut: 'goi2 sin6', en: 'Improve', ipa: '/ɪmˈpruːv/' },
  { id: 'goi2bin3', trad: '改變', jyut: 'goi2 bin3', en: 'Change', ipa: '/tʃeɪndʒ/' },
  { id: 'zeon6lik6', trad: '盡力', jyut: 'zeon6 lik6', en: 'Try your best', ipa: '/ˌtraɪ jɔː ˈbest/' },
  { id: 'daat6sing4', trad: '達成', jyut: 'daat6 sing4', en: 'Achieve', ipa: '/əˈtʃiːv/' },

  // Unit 8 — Reactions 反應
  { id: 'sat1mong6', trad: '失望', jyut: 'sat1 mong6', en: 'Disappointed', ipa: '/ˌdɪsəˈpɔɪntɪd/' },
  { id: 'mun5ji3', trad: '滿意', jyut: 'mun5 ji3', en: 'Satisfied', ipa: '/ˈsætɪsfaɪd/' },
  { id: 'hau6fui3', trad: '後悔', jyut: 'hau6 fui3', en: 'Regret', ipa: '/rɪˈɡret/' },
  { id: 'gwaa3zyu6', trad: '掛住', jyut: 'gwaa3 zyu6', en: 'Miss', ipa: '/mɪs/', pos: 'v.' },
  { id: 'gam2dung6', trad: '感動', jyut: 'gam2 dung6', en: 'Moved', ipa: '/muːvd/' },
  { id: 'nau1', trad: '嬲', jyut: 'nau1', en: 'Angry', ipa: '/ˈæŋɡri/' },
  { id: 'geng1', trad: '驚', jyut: 'geng1', en: 'Scared', ipa: '/skeəd/' },
  { id: 'laang5zing6', trad: '冷靜', jyut: 'laang5 zing6', en: 'Calm', ipa: '/kɑːm/' },
  { id: 'gan2jiu3', trad: '緊要', jyut: 'gan2 jiu3', en: 'Important', ipa: '/ɪmˈpɔːtənt/' },
  { id: 'fong3sam1', trad: '放心', jyut: 'fong3 sam1', en: 'Relieved', ipa: '/rɪˈliːvd/' }
];

export const LEVEL6: Level = {
  id: 'C6',
  index: 6,
  title: 'Sound natural',
  titleHan: '地道',
  units: [
    {
      id: 'c6u1',
      index: 1,
      title: 'Big little words',
      titleHan: '抽象',
      hue: 'violet',
      lessons: [
        { id: 'c6u1l1', title: 'Choices', newWords: ['gei1wui6', 'kyut3ding6', 'syun2zaak6', 'gin3ji5', 'man6tai4'] },
        { id: 'c6u1l2', title: 'Win some, lose some', newWords: ['co3ng6', 'sing4gung1', 'sat1baai6', 'jyun4jan1', 'baan6faat3'], reviewWords: ['man6tai4', 'kyut3ding6'] },
        { id: 'c6u1l3', title: 'Words practice', newWords: [], reviewWords: ['gei1wui6', 'kyut3ding6', 'gin3ji5', 'syun2zaak6', 'co3ng6', 'sing4gung1', 'sat1baai6', 'jyun4jan1', 'man6tai4', 'baan6faat3'] },
        { id: 'c6u1l4', title: 'Words mastery', newWords: [], reviewWords: ['gei1wui6', 'kyut3ding6', 'gin3ji5', 'syun2zaak6', 'co3ng6', 'sing4gung1', 'sat1baai6', 'jyun4jan1', 'man6tai4', 'baan6faat3'], xp: 25 }
      ]
    },
    {
      id: 'c6u2',
      index: 2,
      title: 'Describing',
      titleHan: '形容',
      hue: 'coral',
      lessons: [
        { id: 'c6u2l1', title: 'Love it or hate it', newWords: ['hou2zeng3', 'hou2caa1', 'hou2faan4', 'kei4gwaai3', 'dak6bit6'] },
        { id: 'c6u2l2', title: 'Just right', newWords: ['syu1fuk6', 'fong1bin6', 'ho2kaau3', 'pou2tung1', 'jau5jung6'], reviewWords: ['hou2zeng3', 'dak6bit6'] },
        { id: 'c6u2l3', title: 'Describing practice', newWords: [], reviewWords: ['hou2zeng3', 'hou2caa1', 'hou2faan4', 'syu1fuk6', 'fong1bin6', 'ho2kaau3', 'kei4gwaai3', 'pou2tung1', 'dak6bit6', 'jau5jung6'] },
        { id: 'c6u2l4', title: 'Describing mastery', newWords: [], reviewWords: ['hou2zeng3', 'hou2caa1', 'hou2faan4', 'syu1fuk6', 'fong1bin6', 'ho2kaau3', 'kei4gwaai3', 'pou2tung1', 'dak6bit6', 'jau5jung6'], xp: 25 }
      ]
    },
    {
      id: 'c6u3',
      index: 3,
      title: 'Adverbs',
      titleHan: '副詞',
      hue: 'amber',
      lessons: [
        { id: 'c6u3l1', title: 'When it happens', newWords: ['zeoi3gan6', 'zik1hak1', 'dat6jin4', 'zeoi3zung1', 'jat1zik6'] },
        { id: 'c6u3l2', title: 'How it happens', newWords: ['kei4sat6', 'caa1m4do1', 'do1sou3', 'ngaam1saai3', 'siu2sam1'], reviewWords: ['dat6jin4', 'zik1hak1'] },
        { id: 'c6u3l3', title: 'Adverbs practice', newWords: [], reviewWords: ['zeoi3gan6', 'zeoi3zung1', 'zik1hak1', 'dat6jin4', 'kei4sat6', 'caa1m4do1', 'do1sou3', 'ngaam1saai3', 'siu2sam1', 'jat1zik6'] },
        { id: 'c6u3l4', title: 'Adverbs mastery', newWords: [], reviewWords: ['zeoi3gan6', 'zeoi3zung1', 'zik1hak1', 'dat6jin4', 'kei4sat6', 'caa1m4do1', 'do1sou3', 'ngaam1saai3', 'siu2sam1', 'jat1zik6'], xp: 25 }
      ]
    },
    {
      id: 'c6u4',
      index: 4,
      title: 'Communication',
      titleHan: '溝通',
      hue: 'azure',
      lessons: [
        { id: 'c6u4l1', title: 'Speak up', newWords: ['gaai2sik1', 'jing1sing4', 'tai4ji5', 'tai4hei2', 'gong2siu3'] },
        { id: 'c6u4l2', title: 'Sort it out', newWords: ['tau4sou3', 'dou6hip3', 'aai3gaau1', 'syut3fuk6', 'gong2daai6waa6'], reviewWords: ['gaai2sik1', 'jing1sing4'] },
        { id: 'c6u4l3', title: 'Communication practice', newWords: [], reviewWords: ['gaai2sik1', 'jing1sing4', 'tau4sou3', 'tai4ji5', 'dou6hip3', 'tai4hei2', 'aai3gaau1', 'syut3fuk6', 'gong2daai6waa6', 'gong2siu3'] },
        { id: 'c6u4l4', title: 'Communication mastery', newWords: [], reviewWords: ['gaai2sik1', 'jing1sing4', 'tau4sou3', 'tai4ji5', 'dou6hip3', 'tai4hei2', 'aai3gaau1', 'syut3fuk6', 'gong2daai6waa6', 'gong2siu3'], xp: 25 }
      ]
    },
    {
      id: 'c6u5',
      index: 5,
      title: 'Everyday expressions',
      titleHan: '日常用語',
      hue: 'jade',
      lessons: [
        { id: 'c6u5l1', title: 'Smooth replies', newWords: ['mou5man6tai4', 'tai2cing4fong3', 'dang2zan6', 'm4sai2haak3hei3', 'ceoi4bin2'] },
        { id: 'c6u5l2', title: 'Cheer them on', newWords: ['maan6maan2lai4', 'zuk1nei5hou2wan6', 'zou6dak1hou2', 'hou2ho2sik1', 'gaa1jau2'], reviewWords: ['mou5man6tai4', 'dang2zan6'] },
        { id: 'c6u5l3', title: 'Expressions practice', newWords: [], reviewWords: ['mou5man6tai4', 'tai2cing4fong3', 'maan6maan2lai4', 'zuk1nei5hou2wan6', 'zou6dak1hou2', 'dang2zan6', 'hou2ho2sik1', 'ceoi4bin2', 'm4sai2haak3hei3', 'gaa1jau2'] },
        { id: 'c6u5l4', title: 'Expressions mastery', newWords: [], reviewWords: ['mou5man6tai4', 'tai2cing4fong3', 'maan6maan2lai4', 'zuk1nei5hou2wan6', 'zou6dak1hou2', 'dang2zan6', 'hou2ho2sik1', 'ceoi4bin2', 'm4sai2haak3hei3', 'gaa1jau2'], xp: 25 }
      ]
    },
    {
      id: 'c6u6',
      index: 6,
      title: 'Connecting words',
      titleHan: '連接詞',
      hue: 'mandarin',
      lessons: [
        { id: 'c6u6l1', title: 'Cause and effect', newWords: ['jan1wai6', 'so2ji5', 'jyu4gwo2', 'tung4maai4', 'zung2zi1'] },
        { id: 'c6u6l2', title: 'On the other hand', newWords: ['seoi1jin4', 'bat1gwo3', 'ceoi4fei1', 'faan2ji4', 'gong2hoi1jau6gong2'], reviewWords: ['jan1wai6', 'so2ji5'] },
        { id: 'c6u6l3', title: 'Connectors practice', newWords: [], reviewWords: ['jan1wai6', 'seoi1jin4', 'bat1gwo3', 'ceoi4fei1', 'faan2ji4', 'zung2zi1', 'gong2hoi1jau6gong2', 'so2ji5', 'jyu4gwo2', 'tung4maai4'] },
        { id: 'c6u6l4', title: 'Connectors mastery', newWords: [], reviewWords: ['jan1wai6', 'seoi1jin4', 'bat1gwo3', 'ceoi4fei1', 'faan2ji4', 'zung2zi1', 'gong2hoi1jau6gong2', 'so2ji5', 'jyu4gwo2', 'tung4maai4'], xp: 25 }
      ]
    },
    {
      id: 'c6u7',
      index: 7,
      title: 'Plans & dreams',
      titleHan: '將來',
      hue: 'pink',
      lessons: [
        { id: 'c6u7l1', title: 'Looking ahead', newWords: ['mung6soeng2', 'muk6biu1', 'gai3waak6', 'zoeng1loi4', 'hei1mong6'] },
        { id: 'c6u7l2', title: 'Make it happen', newWords: ['gaan2', 'goi2sin6', 'goi2bin3', 'zeon6lik6', 'daat6sing4'], reviewWords: ['muk6biu1', 'gai3waak6'] },
        { id: 'c6u7l3', title: 'Dreams practice', newWords: [], reviewWords: ['mung6soeng2', 'muk6biu1', 'gai3waak6', 'zoeng1loi4', 'hei1mong6', 'gaan2', 'goi2sin6', 'goi2bin3', 'zeon6lik6', 'daat6sing4'] },
        { id: 'c6u7l4', title: 'Dreams mastery', newWords: [], reviewWords: ['mung6soeng2', 'muk6biu1', 'gai3waak6', 'zoeng1loi4', 'hei1mong6', 'gaan2', 'goi2sin6', 'goi2bin3', 'zeon6lik6', 'daat6sing4'], xp: 25 }
      ]
    },
    {
      id: 'c6u8',
      index: 8,
      title: 'Reactions',
      titleHan: '反應',
      hue: 'teal',
      lessons: [
        { id: 'c6u8l1', title: 'How it landed', newWords: ['sat1mong6', 'mun5ji3', 'hau6fui3', 'gam2dung6', 'fong3sam1'] },
        { id: 'c6u8l2', title: 'Strong feelings', newWords: ['gwaa3zyu6', 'nau1', 'geng1', 'laang5zing6', 'gan2jiu3'], reviewWords: ['sat1mong6', 'mun5ji3'] },
        { id: 'c6u8l3', title: 'Reactions practice', newWords: [], reviewWords: ['sat1mong6', 'mun5ji3', 'hau6fui3', 'gwaa3zyu6', 'gam2dung6', 'nau1', 'geng1', 'laang5zing6', 'gan2jiu3', 'fong3sam1'] },
        { id: 'c6u8l4', title: 'Reactions mastery', newWords: [], reviewWords: ['sat1mong6', 'mun5ji3', 'hau6fui3', 'gwaa3zyu6', 'gam2dung6', 'nau1', 'geng1', 'laang5zing6', 'gan2jiu3', 'fong3sam1'], xp: 25 }
      ]
    },
    {
      id: 'c6u9',
      index: 9,
      title: 'Checkpoint',
      titleHan: '關卡',
      hue: 'violet',
      lessons: [
        { id: 'c6u9l1', title: 'Checkpoint I', newWords: [], reviewWords: [], xp: 25 },
        { id: 'c6u9l2', title: 'Checkpoint II', newWords: [], reviewWords: [], xp: 25 },
        { id: 'c6u9l3', title: 'Checkpoint III', newWords: [], reviewWords: [], xp: 25 }
      ]
    }
  ]
};
