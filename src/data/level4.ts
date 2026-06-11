import type { Level, Vocab } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// Level 4 — "Real life" 生活
// Secondary-school everyday English: feelings, personality, opinions, phrasal
// verbs, money, food, home, clothes. English heroes + RP IPA; gloss is
// colloquial Traditional Cantonese with Jyutping (words.hk conventions,
// changed tones used where that is what people say).
// ─────────────────────────────────────────────────────────────────────────────

export const VOCAB_L4: Vocab[] = [
  // Unit 1 — Feelings 感受
  { id: 'zi6hou4', trad: '自豪', jyut: 'zi6 hou4', en: 'Proud', ipa: '/praʊd/' },
  { id: 'gan2zoeng1', trad: '緊張', jyut: 'gan2 zoeng1', en: 'Nervous', ipa: '/ˈnɜːvəs/' },
  { id: 'gaam3gaai3', trad: '尷尬', jyut: 'gaam3 gaai3', en: 'Embarrassed', ipa: '/ɪmˈbærəst/' },
  { id: 'mun6', trad: '悶', jyut: 'mun6', en: 'Bored', ipa: '/bɔːd/' },
  { id: 'ging1ngaa6', trad: '驚訝', jyut: 'ging1 ngaa6', en: 'Surprised', ipa: '/səˈpraɪzd/' },
  { id: 'daam1sam1', trad: '擔心', jyut: 'daam1 sam1', en: 'Worried', ipa: '/ˈwʌrid/' },
  { id: 'fong3sung1', trad: '放鬆', jyut: 'fong3 sung1', en: 'Relaxed', ipa: '/rɪˈlækst/' },
  { id: 'dou3gei6', trad: '妒忌', jyut: 'dou3 gei6', en: 'Jealous', ipa: '/ˈdʒeləs/' },
  { id: 'hing1fan5', trad: '興奮', jyut: 'hing1 fan5', en: 'Excited', ipa: '/ɪkˈsaɪtɪd/' },
  { id: 'gu1daan1', trad: '孤單', jyut: 'gu1 daan1', en: 'Lonely', ipa: '/ˈləʊnli/' },

  // Unit 2 — Personality 性格
  { id: 'jau5sin6', trad: '友善', jyut: 'jau5 sin6', en: 'Friendly', ipa: '/ˈfrendli/' },
  { id: 'laan5', trad: '懶', jyut: 'laan5', en: 'Lazy', ipa: '/ˈleɪzi/' },
  { id: 'jau5lai5maau6', trad: '有禮貌', jyut: 'jau5 lai5 maau6', en: 'Polite', ipa: '/pəˈlaɪt/' },
  { id: 'mou5lai5maau6', trad: '冇禮貌', jyut: 'mou5 lai5 maau6', en: 'Rude', ipa: '/ruːd/' },
  { id: 'lou5sat6', trad: '老實', jyut: 'lou5 sat6', en: 'Honest', ipa: '/ˈɒnɪst/' },
  { id: 'gaau2siu3', trad: '搞笑', jyut: 'gaau2 siu3', en: 'Funny', ipa: '/ˈfʌni/' },
  { id: 'paa3cau2', trad: '怕醜', jyut: 'paa3 cau2', en: 'Shy', ipa: '/ʃaɪ/' },
  { id: 'cung1ming4', trad: '聰明', jyut: 'cung1 ming4', en: 'Clever', ipa: '/ˈklevə/' },
  { id: 'hou2sam1', trad: '好心', jyut: 'hou2 sam1', en: 'Kind', ipa: '/kaɪnd/' },
  { id: 'jau5noi6sing3', trad: '有耐性', jyut: 'jau5 noi6 sing3', en: 'Patient', ipa: '/ˈpeɪʃənt/' },

  // Unit 3 — Opinions 意見
  { id: 'tung4ji3', trad: '同意', jyut: 'tung4 ji3', en: 'Agree', ipa: '/əˈɡriː/' },
  { id: 'm4tung4ji3', trad: '唔同意', jyut: 'm4 tung4 ji3', en: 'Disagree', ipa: '/ˌdɪsəˈɡriː/' },
  { id: 'gok3dak1', trad: '覺得', jyut: 'gok3 dak1', en: 'Think', ipa: '/θɪŋk/' },
  { id: 'soeng1seon3', trad: '相信', jyut: 'soeng1 seon3', en: 'Believe', ipa: '/bɪˈliːv/' },
  { id: 'ho2nang4', trad: '可能', jyut: 'ho2 nang4', en: 'Maybe', ipa: '/ˈmeɪbi/' },
  { id: 'jat1ding6', trad: '一定', jyut: 'jat1 ding6', en: 'Definitely', ipa: '/ˈdefɪnətli/' },
  { id: 'gang2hai6', trad: '梗係', jyut: 'gang2 hai6', en: 'Of course', ipa: '/əv ˈkɔːs/' },
  { id: 'ji3gin3', trad: '意見', jyut: 'ji3 gin3', en: 'Opinion', ipa: '/əˈpɪnjən/' },
  { id: 'ngaam1', trad: '啱', jyut: 'ngaam1', en: 'Correct', ipa: '/kəˈrekt/' },
  { id: 'co3', trad: '錯', jyut: 'co3', en: 'Wrong', ipa: '/rɒŋ/' },

  // Unit 4 — Phrasal verbs I 短語動詞
  { id: 'fan3seng2', trad: '瞓醒', jyut: 'fan3 seng2', en: 'Wake up', ipa: '/ˌweɪk ˈʌp/' },
  { id: 'fong3hei3', trad: '放棄', jyut: 'fong3 hei3', en: 'Give up', ipa: '/ˌɡɪv ˈʌp/' },
  { id: 'faat3jin6', trad: '發現', jyut: 'faat3 jin6', en: 'Find out', ipa: '/ˌfaɪnd ˈaʊt/' },
  { id: 'wan2', trad: '搵', jyut: 'wan2', en: 'Look for', ipa: '/ˈlʊk fɔː/' },
  { id: 'zap1hei2', trad: '執起', jyut: 'zap1 hei2', en: 'Pick up', ipa: '/ˌpɪk ˈʌp/' },
  { id: 'hoi1', trad: '開', jyut: 'hoi1', en: 'Turn on', ipa: '/ˌtɜːn ˈɒn/' },
  { id: 'sik1', trad: '熄', jyut: 'sik1', en: 'Turn off', ipa: '/ˌtɜːn ˈɒf/' },
  { id: 'zoek3saam1', trad: '著衫', jyut: 'zoek3 saam1', en: 'Put on', ipa: '/ˌpʊt ˈɒn/' },
  { id: 'ceoi4saam1', trad: '除衫', jyut: 'ceoi4 saam1', en: 'Take off', ipa: '/ˌteɪk ˈɒf/' },
  { id: 'faan1lai4', trad: '返嚟', jyut: 'faan1 lai4', en: 'Come back', ipa: '/ˌkʌm ˈbæk/' },

  // Unit 5 — Money 錢
  { id: 'jan4gung1', trad: '人工', jyut: 'jan4 gung1', en: 'Salary', ipa: '/ˈsæləri/' },
  { id: 'cou5cin2', trad: '儲錢', jyut: 'cou5 cin2', en: 'Save money', ipa: '/ˌseɪv ˈmʌni/' },
  { id: 'sai2cin2', trad: '使錢', jyut: 'sai2 cin2', en: 'Spend', ipa: '/spend/' },
  { id: 'man6jan4ze3', trad: '問人借', jyut: 'man6 jan4 ze3', en: 'Borrow', ipa: '/ˈbɒrəʊ/' },
  { id: 'ze3bei2', trad: '借俾', jyut: 'ze3 bei2', en: 'Lend', ipa: '/lend/' },
  { id: 'fu6daam1dak1hei2', trad: '負擔得起', jyut: 'fu6 daam1 dak1 hei2', en: 'Afford', ipa: '/əˈfɔːd/' },
  { id: 'daa2zit3', trad: '打折', jyut: 'daa2 zit3', en: 'Discount', ipa: '/ˈdɪskaʊnt/' },
  { id: 'sau1geoi3', trad: '收據', jyut: 'sau1 geoi3', en: 'Receipt', ipa: '/rɪˈsiːt/' },
  { id: 'teoi3cin2', trad: '退錢', jyut: 'teoi3 cin2', en: 'Refund', ipa: '/ˈriːfʌnd/' },
  { id: 'min5fai3', trad: '免費', jyut: 'min5 fai3', en: 'Free', ipa: '/friː/' },

  // Unit 6 — Food & cooking 煮嘢食
  { id: 'laat6', trad: '辣', jyut: 'laat6', en: 'Spicy', ipa: '/ˈspaɪsi/' },
  { id: 'tim4', trad: '甜', jyut: 'tim4', en: 'Sweet', ipa: '/swiːt/' },
  { id: 'haam4', trad: '鹹', jyut: 'haam4', en: 'Salty', ipa: '/ˈsɔːlti/' },
  { id: 'syun1', trad: '酸', jyut: 'syun1', en: 'Sour', ipa: '/ˈsaʊə/' },
  { id: 'san1sin1', trad: '新鮮', jyut: 'san1 sin1', en: 'Fresh', ipa: '/freʃ/' },
  { id: 'zyu2faan6', trad: '煮飯', jyut: 'zyu2 faan6', en: 'Cook', ipa: '/kʊk/' },
  { id: 'mei6dou6', trad: '味道', jyut: 'mei6 dou6', en: 'Taste', ipa: '/teɪst/' },
  { id: 'lok6daan1', trad: '落單', jyut: 'lok6 daan1', en: 'Order', ipa: '/ˈɔːdə/' },
  { id: 'ngoi6maai6', trad: '外賣', jyut: 'ngoi6 maai6', en: 'Takeaway', ipa: '/ˈteɪkəweɪ/' },
  { id: 'baau2', trad: '飽', jyut: 'baau2', en: 'Full', ipa: '/fʊl/' },

  // Unit 7 — Home 屋企
  { id: 'cyu4fong2', trad: '廚房', jyut: 'cyu4 fong2', en: 'Kitchen', ipa: '/ˈkɪtʃɪn/' },
  { id: 'ci3so2', trad: '廁所', jyut: 'ci3 so2', en: 'Toilet', ipa: '/ˈtɔɪlɪt/' },
  { id: 'seoi6fong2', trad: '睡房', jyut: 'seoi6 fong2', en: 'Bedroom', ipa: '/ˈbedruːm/' },
  { id: 'haak3teng1', trad: '客廳', jyut: 'haak3 teng1', en: 'Living room', ipa: '/ˈlɪvɪŋ ruːm/' },
  { id: 'gaa1si1', trad: '傢俬', jyut: 'gaa1 si1', en: 'Furniture', ipa: '/ˈfɜːnɪtʃə/' },
  { id: 'zou1', trad: '租', jyut: 'zou1', en: 'Rent', ipa: '/rent/' },
  { id: 'leon4geoi1', trad: '鄰居', jyut: 'leon4 geoi1', en: 'Neighbour', ipa: '/ˈneɪbə/' },
  { id: 'cou4', trad: '嘈', jyut: 'cou4', en: 'Noisy', ipa: '/ˈnɔɪzi/' },
  { id: 'zing2cai4', trad: '整齊', jyut: 'zing2 cai4', en: 'Tidy', ipa: '/ˈtaɪdi/' },
  { id: 'bun1uk1', trad: '搬屋', jyut: 'bun1 uk1', en: 'Move house', ipa: '/ˌmuːv ˈhaʊs/' },

  // Unit 8 — Clothes 著衫
  { id: 'ngoi6tou3', trad: '外套', jyut: 'ngoi6 tou3', en: 'Jacket', ipa: '/ˈdʒækɪt/' },
  { id: 'fu3', trad: '褲', jyut: 'fu3', en: 'Trousers', ipa: '/ˈtraʊzəz/' },
  { id: 'haai4', trad: '鞋', jyut: 'haai4', en: 'Shoes', ipa: '/ʃuːz/' },
  { id: 'kwan4', trad: '裙', jyut: 'kwan4', en: 'Skirt', ipa: '/skɜːt/' },
  { id: 'mat6', trad: '襪', jyut: 'mat6', en: 'Socks', ipa: '/sɒks/' },
  { id: 'mou2', trad: '帽', jyut: 'mou2', en: 'Hat', ipa: '/hæt/' },
  { id: 'ngaan5geng2', trad: '眼鏡', jyut: 'ngaan5 geng2', en: 'Glasses', ipa: '/ˈɡlɑːsɪz/' },
  { id: 'sau2biu1', trad: '手錶', jyut: 'sau2 biu1', en: 'Watch', ipa: '/wɒtʃ/' },
  { id: 'ngan4baau1', trad: '銀包', jyut: 'ngan4 baau1', en: 'Wallet', ipa: '/ˈwɒlɪt/' },
  { id: 'doi2', trad: '袋', jyut: 'doi2', en: 'Bag', ipa: '/bæɡ/' }
];

export const LEVEL4: Level = {
  id: 'C4',
  index: 4,
  title: 'Real life',
  titleHan: '生活',
  units: [
    {
      id: 'c4u1',
      index: 1,
      title: 'Feelings',
      titleHan: '感受',
      hue: 'pink',
      lessons: [
        { id: 'c4u1l1', title: 'Big feelings', newWords: ['gan2zoeng1', 'hing1fan5', 'daam1sam1', 'fong3sung1', 'mun6'] },
        { id: 'c4u1l2', title: 'Subtle feelings', newWords: ['zi6hou4', 'gaam3gaai3', 'ging1ngaa6', 'dou3gei6', 'gu1daan1'], reviewWords: ['gan2zoeng1', 'daam1sam1'] },
        { id: 'c4u1l3', title: 'Feelings practice', newWords: [], reviewWords: ['zi6hou4', 'gan2zoeng1', 'gaam3gaai3', 'mun6', 'ging1ngaa6', 'daam1sam1', 'fong3sung1', 'dou3gei6', 'hing1fan5', 'gu1daan1'] },
        { id: 'c4u1l4', title: 'Feelings mastery', newWords: [], reviewWords: ['zi6hou4', 'gan2zoeng1', 'gaam3gaai3', 'mun6', 'ging1ngaa6', 'daam1sam1', 'fong3sung1', 'dou3gei6', 'hing1fan5', 'gu1daan1'], xp: 25 }
      ]
    },
    {
      id: 'c4u2',
      index: 2,
      title: 'Personality',
      titleHan: '性格',
      hue: 'violet',
      lessons: [
        { id: 'c4u2l1', title: 'Good company', newWords: ['jau5sin6', 'gaau2siu3', 'hou2sam1', 'lou5sat6', 'cung1ming4'] },
        { id: 'c4u2l2', title: 'Manners matter', newWords: ['jau5lai5maau6', 'mou5lai5maau6', 'laan5', 'paa3cau2', 'jau5noi6sing3'], reviewWords: ['jau5sin6', 'lou5sat6'] },
        { id: 'c4u2l3', title: 'Personality practice', newWords: [], reviewWords: ['jau5sin6', 'laan5', 'jau5lai5maau6', 'mou5lai5maau6', 'lou5sat6', 'gaau2siu3', 'paa3cau2', 'cung1ming4', 'hou2sam1', 'jau5noi6sing3'] },
        { id: 'c4u2l4', title: 'Personality mastery', newWords: [], reviewWords: ['jau5sin6', 'laan5', 'jau5lai5maau6', 'mou5lai5maau6', 'lou5sat6', 'gaau2siu3', 'paa3cau2', 'cung1ming4', 'hou2sam1', 'jau5noi6sing3'], xp: 25 }
      ]
    },
    {
      id: 'c4u3',
      index: 3,
      title: 'Opinions',
      titleHan: '意見',
      hue: 'azure',
      lessons: [
        { id: 'c4u3l1', title: 'I think so', newWords: ['gok3dak1', 'tung4ji3', 'm4tung4ji3', 'soeng1seon3', 'ji3gin3'] },
        { id: 'c4u3l2', title: 'How sure?', newWords: ['ho2nang4', 'jat1ding6', 'gang2hai6', 'ngaam1', 'co3'], reviewWords: ['tung4ji3', 'gok3dak1'] },
        { id: 'c4u3l3', title: 'Opinions practice', newWords: [], reviewWords: ['tung4ji3', 'm4tung4ji3', 'gok3dak1', 'soeng1seon3', 'ho2nang4', 'jat1ding6', 'gang2hai6', 'ji3gin3', 'ngaam1', 'co3'] },
        { id: 'c4u3l4', title: 'Opinions mastery', newWords: [], reviewWords: ['tung4ji3', 'm4tung4ji3', 'gok3dak1', 'soeng1seon3', 'ho2nang4', 'jat1ding6', 'gang2hai6', 'ji3gin3', 'ngaam1', 'co3'], xp: 25 }
      ]
    },
    {
      id: 'c4u4',
      index: 4,
      title: 'Phrasal verbs',
      titleHan: '短語動詞',
      hue: 'amber',
      lessons: [
        { id: 'c4u4l1', title: 'Up and on', newWords: ['fan3seng2', 'hoi1', 'sik1', 'zap1hei2', 'wan2'] },
        { id: 'c4u4l2', title: 'On and off', newWords: ['zoek3saam1', 'ceoi4saam1', 'fong3hei3', 'faat3jin6', 'faan1lai4'], reviewWords: ['hoi1', 'sik1'] },
        { id: 'c4u4l3', title: 'Phrasal practice', newWords: [], reviewWords: ['fan3seng2', 'fong3hei3', 'faat3jin6', 'wan2', 'zap1hei2', 'hoi1', 'sik1', 'zoek3saam1', 'ceoi4saam1', 'faan1lai4'] },
        { id: 'c4u4l4', title: 'Phrasal mastery', newWords: [], reviewWords: ['fan3seng2', 'fong3hei3', 'faat3jin6', 'wan2', 'zap1hei2', 'hoi1', 'sik1', 'zoek3saam1', 'ceoi4saam1', 'faan1lai4'], xp: 25 }
      ]
    },
    {
      id: 'c4u5',
      index: 5,
      title: 'Money',
      titleHan: '錢',
      hue: 'jade',
      lessons: [
        { id: 'c4u5l1', title: 'Earn and save', newWords: ['jan4gung1', 'cou5cin2', 'sai2cin2', 'min5fai3', 'daa2zit3'] },
        { id: 'c4u5l2', title: 'Borrow and back', newWords: ['man6jan4ze3', 'ze3bei2', 'fu6daam1dak1hei2', 'sau1geoi3', 'teoi3cin2'], reviewWords: ['cou5cin2', 'sai2cin2'] },
        { id: 'c4u5l3', title: 'Money practice', newWords: [], reviewWords: ['jan4gung1', 'cou5cin2', 'sai2cin2', 'man6jan4ze3', 'ze3bei2', 'fu6daam1dak1hei2', 'daa2zit3', 'sau1geoi3', 'teoi3cin2', 'min5fai3'] },
        { id: 'c4u5l4', title: 'Money mastery', newWords: [], reviewWords: ['jan4gung1', 'cou5cin2', 'sai2cin2', 'man6jan4ze3', 'ze3bei2', 'fu6daam1dak1hei2', 'daa2zit3', 'sau1geoi3', 'teoi3cin2', 'min5fai3'], xp: 25 }
      ]
    },
    {
      id: 'c4u6',
      index: 6,
      title: 'Food & cooking',
      titleHan: '煮嘢食',
      hue: 'mandarin',
      lessons: [
        { id: 'c4u6l1', title: 'Five flavours', newWords: ['laat6', 'tim4', 'haam4', 'syun1', 'san1sin1'] },
        { id: 'c4u6l2', title: 'In the kitchen', newWords: ['zyu2faan6', 'mei6dou6', 'lok6daan1', 'ngoi6maai6', 'baau2'], reviewWords: ['laat6', 'san1sin1'] },
        { id: 'c4u6l3', title: 'Food practice', newWords: [], reviewWords: ['laat6', 'tim4', 'haam4', 'syun1', 'san1sin1', 'zyu2faan6', 'mei6dou6', 'lok6daan1', 'ngoi6maai6', 'baau2'] },
        { id: 'c4u6l4', title: 'Food mastery', newWords: [], reviewWords: ['laat6', 'tim4', 'haam4', 'syun1', 'san1sin1', 'zyu2faan6', 'mei6dou6', 'lok6daan1', 'ngoi6maai6', 'baau2'], xp: 25 }
      ]
    },
    {
      id: 'c4u7',
      index: 7,
      title: 'Home',
      titleHan: '屋企',
      hue: 'teal',
      lessons: [
        { id: 'c4u7l1', title: 'Room by room', newWords: ['cyu4fong2', 'ci3so2', 'seoi6fong2', 'haak3teng1', 'gaa1si1'] },
        { id: 'c4u7l2', title: 'Living there', newWords: ['zou1', 'leon4geoi1', 'cou4', 'zing2cai4', 'bun1uk1'], reviewWords: ['cyu4fong2', 'seoi6fong2'] },
        { id: 'c4u7l3', title: 'Home practice', newWords: [], reviewWords: ['cyu4fong2', 'ci3so2', 'seoi6fong2', 'haak3teng1', 'gaa1si1', 'zou1', 'leon4geoi1', 'cou4', 'zing2cai4', 'bun1uk1'] },
        { id: 'c4u7l4', title: 'Home mastery', newWords: [], reviewWords: ['cyu4fong2', 'ci3so2', 'seoi6fong2', 'haak3teng1', 'gaa1si1', 'zou1', 'leon4geoi1', 'cou4', 'zing2cai4', 'bun1uk1'], xp: 25 }
      ]
    },
    {
      id: 'c4u8',
      index: 8,
      title: 'Clothes',
      titleHan: '著衫',
      hue: 'coral',
      lessons: [
        { id: 'c4u8l1', title: 'Get dressed', newWords: ['ngoi6tou3', 'fu3', 'haai4', 'kwan4', 'mat6'] },
        { id: 'c4u8l2', title: 'Finishing touches', newWords: ['mou2', 'ngaan5geng2', 'sau2biu1', 'ngan4baau1', 'doi2'], reviewWords: ['haai4', 'ngoi6tou3'] },
        { id: 'c4u8l3', title: 'Clothes practice', newWords: [], reviewWords: ['ngoi6tou3', 'fu3', 'haai4', 'kwan4', 'mat6', 'mou2', 'ngaan5geng2', 'sau2biu1', 'ngan4baau1', 'doi2'] },
        { id: 'c4u8l4', title: 'Clothes mastery', newWords: [], reviewWords: ['ngoi6tou3', 'fu3', 'haai4', 'kwan4', 'mat6', 'mou2', 'ngaan5geng2', 'sau2biu1', 'ngan4baau1', 'doi2'], xp: 25 }
      ]
    },
    {
      id: 'c4u9',
      index: 9,
      title: 'Checkpoint',
      titleHan: '關卡',
      hue: 'violet',
      lessons: [
        { id: 'c4u9l1', title: 'Checkpoint I', newWords: [], reviewWords: [], xp: 25 },
        { id: 'c4u9l2', title: 'Checkpoint II', newWords: [], reviewWords: [], xp: 25 },
        { id: 'c4u9l3', title: 'Checkpoint III', newWords: [], reviewWords: [], xp: 25 }
      ]
    }
  ]
};
