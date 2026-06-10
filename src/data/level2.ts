import type { Level, Vocab } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// Level 2 — "Everyday"
// English heroes + RP IPA; Cantonese gloss kept from the verified seed.
// ─────────────────────────────────────────────────────────────────────────────

export const VOCAB_L2: Vocab[] = [
  // Unit 1 — Numbers 11-100 & money 錢
  { id: 'sap6jat1', trad: '十一', jyut: 'sap6 jat1', en: 'Eleven', ipa: '/ɪˈlevən/' },
  { id: 'sap6ng5', trad: '十五', jyut: 'sap6 ng5', en: 'Fifteen', ipa: '/ˌfɪfˈtiːn/' },
  { id: 'ji6sap6', trad: '二十', jyut: 'ji6 sap6', en: 'Twenty', ipa: '/ˈtwenti/' },
  { id: 'saam1sap6', trad: '三十', jyut: 'saam1 sap6', en: 'Thirty', ipa: '/ˈθɜːti/' },
  { id: 'jat1baak3', trad: '一百', jyut: 'jat1 baak3', en: 'One hundred', ipa: '/wʌn ˈhʌndrəd/' },
  { id: 'cin2', trad: '錢', jyut: 'cin2', en: 'Money', ipa: '/ˈmʌni/' },
  { id: 'man1', trad: '蚊', jyut: 'man1', en: 'Dollar', ipa: '/ˈdɒlə/' },
  { id: 'gei2do1cin2', trad: '幾多錢', jyut: 'gei2 do1 cin2', en: 'How much?', ipa: '/ˌhaʊ ˈmʌtʃ/' },

  // Unit 2 — Time & days 時間
  { id: 'gam1jat6', trad: '今日', jyut: 'gam1 jat6', en: 'Today', ipa: '/təˈdeɪ/' },
  { id: 'ting1jat6', trad: '聽日', jyut: 'ting1 jat6', en: 'Tomorrow', ipa: '/təˈmɒrəʊ/' },
  { id: 'kam4jat6', trad: '琴日', jyut: 'kam4 jat6', en: 'Yesterday', ipa: '/ˈjestədeɪ/' },
  { id: 'ji4gaa1', trad: '而家', jyut: 'ji4 gaa1', en: 'Now', ipa: '/naʊ/' },
  { id: 'dim2', trad: '點', jyut: 'dim2', en: "O'clock", ipa: '/əˈklɒk/' },
  { id: 'sing1kei4', trad: '星期', jyut: 'sing1 kei4', en: 'Week', ipa: '/wiːk/' },
  { id: 'ziu1zou2', trad: '朝早', jyut: 'ziu1 zou2', en: 'Morning', ipa: '/ˈmɔːnɪŋ/' },
  { id: 'je6maan5', trad: '夜晚', jyut: 'je6 maan5', en: 'Night', ipa: '/naɪt/' },

  // Unit 3 — Colours & size 顏色
  { id: 'hung4sik1', trad: '紅色', jyut: 'hung4 sik1', en: 'Red', ipa: '/red/' },
  { id: 'wong4sik1', trad: '黃色', jyut: 'wong4 sik1', en: 'Yellow', ipa: '/ˈjeləʊ/' },
  { id: 'laam4sik1', trad: '藍色', jyut: 'laam4 sik1', en: 'Blue', ipa: '/bluː/' },
  { id: 'luk6sik1', trad: '綠色', jyut: 'luk6 sik1', en: 'Green', ipa: '/ɡriːn/' },
  { id: 'daai6', trad: '大', jyut: 'daai6', en: 'Big', ipa: '/bɪɡ/' },
  { id: 'sai3', trad: '細', jyut: 'sai3', en: 'Small', ipa: '/smɔːl/' },
  { id: 'leng3', trad: '靚', jyut: 'leng3', en: 'Pretty', ipa: '/ˈprɪti/' },
  { id: 'hou2', trad: '好', jyut: 'hou2', en: 'Good', ipa: '/ɡʊd/' },

  // Unit 4 — Places & directions 地方
  { id: 'uk1kei2', trad: '屋企', jyut: 'uk1 kei2', en: 'Home', ipa: '/həʊm/' },
  { id: 'hok6haau6', trad: '學校', jyut: 'hok6 haau6', en: 'School', ipa: '/skuːl/' },
  { id: 'caan1teng1', trad: '餐廳', jyut: 'caan1 teng1', en: 'Restaurant', ipa: '/ˈrestrɒnt/' },
  { id: 'gong2tit3', trad: '港鐵', jyut: 'gong2 tit3', en: 'MTR', ipa: '/ˌem tiː ˈɑː/' },
  { id: 'hai2', trad: '喺', jyut: 'hai2', en: 'At', ipa: '/æt/', pos: 'prep.' },
  { id: 'zo2bin1', trad: '左邊', jyut: 'zo2 bin1', en: 'Left', ipa: '/left/' },
  { id: 'jau6bin1', trad: '右邊', jyut: 'jau6 bin1', en: 'Right', ipa: '/raɪt/' },
  { id: 'bin1dou6', trad: '邊度', jyut: 'bin1 dou6', en: 'Where', ipa: '/weə/' },

  // Unit 5 — Ordering food 落單
  { id: 'soeng2jiu3', trad: '我想要', jyut: 'ngo5 soeng2 jiu3', en: 'I would like', ipa: '/aɪ wʊd ˈlaɪk/' },
  { id: 'jat1bui1', trad: '一杯', jyut: 'jat1 bui1', en: 'One cup', ipa: '/wʌn kʌp/' },
  { id: 'jat1wun2', trad: '一碗', jyut: 'jat1 wun2', en: 'One bowl', ipa: '/wʌn bəʊl/' },
  { id: 'dung3', trad: '凍', jyut: 'dung3', en: 'Cold', ipa: '/kəʊld/' },
  { id: 'jit6', trad: '熱', jyut: 'jit6', en: 'Hot', ipa: '/hɒt/' },
  { id: 'maai4daan1', trad: '埋單', jyut: 'maai4 daan1', en: 'The bill', ipa: '/ðə bɪl/' },
  { id: 'caan1paai2', trad: '餐牌', jyut: 'caan1 paai2', en: 'Menu', ipa: '/ˈmenjuː/' },
  { id: 'hou2sik6', trad: '好食', jyut: 'hou2 sik6', en: 'Tasty', ipa: '/ˈteɪsti/' },

  // Unit 6 — Shopping 買嘢
  { id: 'maai5', trad: '買', jyut: 'maai5', en: 'Buy', ipa: '/baɪ/' },
  { id: 'maai6', trad: '賣', jyut: 'maai6', en: 'Sell', ipa: '/sel/' },
  { id: 'peng4', trad: '平', jyut: 'peng4', en: 'Cheap', ipa: '/tʃiːp/' },
  { id: 'gwai3', trad: '貴', jyut: 'gwai3', en: 'Expensive', ipa: '/ɪkˈspensɪv/' },
  { id: 'si3', trad: '試', jyut: 'si3', en: 'Try', ipa: '/traɪ/' },
  { id: 'jiu3', trad: '要', jyut: 'jiu3', en: 'Want', ipa: '/wɒnt/' },
  { id: 'je5', trad: '嘢', jyut: 'je5', en: 'Thing', ipa: '/θɪŋ/' },
  { id: 'saam1b', trad: '衫', jyut: 'saam1', en: 'Clothes', ipa: '/kləʊðz/' },

  // Unit 7 — Weather & feelings 天氣同感受
  { id: 'lok6jyu5', trad: '落雨', jyut: 'lok6 jyu5', en: 'Raining', ipa: '/ˈreɪnɪŋ/' },
  { id: 'hou2tin1', trad: '好天', jyut: 'hou2 tin1', en: 'Sunny', ipa: '/ˈsʌni/' },
  { id: 'hoi1sam1', trad: '開心', jyut: 'hoi1 sam1', en: 'Happy', ipa: '/ˈhæpi/' },
  { id: 'mhoi1sam1', trad: '唔開心', jyut: 'm4 hoi1 sam1', en: 'Sad', ipa: '/sæd/' },
  { id: 'gui6', trad: '攰', jyut: 'gui6', en: 'Tired', ipa: '/ˈtaɪəd/' },
  { id: 'tou5ngo6', trad: '肚餓', jyut: 'tou5 ngo6', en: 'Hungry', ipa: '/ˈhʌŋɡri/' },
  { id: 'geng2hot3', trad: '頸渴', jyut: 'geng2 hot3', en: 'Thirsty', ipa: '/ˈθɜːsti/' },
  { id: 'tin1hei3', trad: '天氣', jyut: 'tin1 hei3', en: 'Weather', ipa: '/ˈweðə/' }
];

export const LEVEL2: Level = {
  id: 'C2',
  index: 2,
  title: 'Everyday',
  titleHan: '日常',
  units: [
    {
      id: 'c2u1',
      index: 1,
      title: 'Big numbers & money',
      titleHan: '錢',
      hue: 'jade',
      lessons: [
        { id: 'c2u1l1', title: 'Eleven and up', newWords: ['sap6jat1', 'sap6ng5', 'ji6sap6', 'saam1sap6'], reviewWords: ['sap6', 'jat1', 'ng5'] },
        { id: 'c2u1l2', title: 'Money money', newWords: ['jat1baak3', 'cin2', 'man1', 'gei2do1cin2'], reviewWords: ['ji6sap6', 'sap6jat1'] },
        { id: 'c2u1l3', title: 'Money practice', newWords: [], reviewWords: ['sap6jat1', 'sap6ng5', 'ji6sap6', 'saam1sap6', 'jat1baak3', 'cin2', 'man1', 'gei2do1cin2'] },
        { id: 'c2u1l4', title: 'Money mastery', newWords: [], reviewWords: ['sap6jat1', 'sap6ng5', 'ji6sap6', 'saam1sap6', 'jat1baak3', 'cin2', 'man1', 'gei2do1cin2'], xp: 25 }
      ]
    },
    {
      id: 'c2u2',
      index: 2,
      title: 'Time & days',
      titleHan: '時間',
      hue: 'mandarin',
      lessons: [
        { id: 'c2u2l1', title: 'Today & tomorrow', newWords: ['gam1jat6', 'ting1jat6', 'kam4jat6', 'ji4gaa1'] },
        { id: 'c2u2l2', title: 'Clock & calendar', newWords: ['dim2', 'sing1kei4', 'ziu1zou2', 'je6maan5'], reviewWords: ['gam1jat6', 'ting1jat6'] },
        { id: 'c2u2l3', title: 'Time practice', newWords: [], reviewWords: ['gam1jat6', 'ting1jat6', 'kam4jat6', 'ji4gaa1', 'dim2', 'sing1kei4', 'ziu1zou2', 'je6maan5'] },
        { id: 'c2u2l4', title: 'Time mastery', newWords: [], reviewWords: ['gam1jat6', 'ting1jat6', 'kam4jat6', 'ji4gaa1', 'dim2', 'sing1kei4', 'ziu1zou2', 'je6maan5'], xp: 25 }
      ]
    },
    {
      id: 'c2u3',
      index: 3,
      title: 'Colours & size',
      titleHan: '顏色',
      hue: 'pink',
      lessons: [
        { id: 'c2u3l1', title: 'Colours', newWords: ['hung4sik1', 'wong4sik1', 'laam4sik1', 'luk6sik1'] },
        { id: 'c2u3l2', title: 'Big & small', newWords: ['daai6', 'sai3', 'leng3', 'hou2'], reviewWords: ['hung4sik1', 'laam4sik1'] },
        { id: 'c2u3l3', title: 'Colours practice', newWords: [], reviewWords: ['hung4sik1', 'wong4sik1', 'laam4sik1', 'luk6sik1', 'daai6', 'sai3', 'leng3', 'hou2'] },
        { id: 'c2u3l4', title: 'Colours mastery', newWords: [], reviewWords: ['hung4sik1', 'wong4sik1', 'laam4sik1', 'luk6sik1', 'daai6', 'sai3', 'leng3', 'hou2'], xp: 25 }
      ]
    },
    {
      id: 'c2u4',
      index: 4,
      title: 'Places & directions',
      titleHan: '地方',
      hue: 'violet',
      lessons: [
        { id: 'c2u4l1', title: 'Around town', newWords: ['uk1kei2', 'hok6haau6', 'caan1teng1', 'gong2tit3'] },
        { id: 'c2u4l2', title: 'Which way?', newWords: ['hai2', 'zo2bin1', 'jau6bin1', 'bin1dou6'], reviewWords: ['uk1kei2', 'hok6haau6'] },
        { id: 'c2u4l3', title: 'Places practice', newWords: [], reviewWords: ['uk1kei2', 'hok6haau6', 'caan1teng1', 'gong2tit3', 'hai2', 'zo2bin1', 'jau6bin1', 'bin1dou6'] },
        { id: 'c2u4l4', title: 'Places mastery', newWords: [], reviewWords: ['uk1kei2', 'hok6haau6', 'caan1teng1', 'gong2tit3', 'hai2', 'zo2bin1', 'jau6bin1', 'bin1dou6'], xp: 25 }
      ]
    },
    {
      id: 'c2u5',
      index: 5,
      title: 'Ordering food',
      titleHan: '落單',
      hue: 'azure',
      lessons: [
        { id: 'c2u5l1', title: 'May I have…', newWords: ['soeng2jiu3', 'jat1bui1', 'jat1wun2', 'caan1paai2'], reviewWords: ['caa4', 'min6'] },
        { id: 'c2u5l2', title: 'Hot or iced', newWords: ['dung3', 'jit6', 'maai4daan1', 'hou2sik6'], reviewWords: ['soeng2jiu3', 'jat1bui1'] },
        { id: 'c2u5l3', title: 'Ordering practice', newWords: [], reviewWords: ['soeng2jiu3', 'jat1bui1', 'jat1wun2', 'caan1paai2', 'dung3', 'jit6', 'maai4daan1', 'hou2sik6'] },
        { id: 'c2u5l4', title: 'Ordering mastery', newWords: [], reviewWords: ['soeng2jiu3', 'jat1bui1', 'jat1wun2', 'caan1paai2', 'dung3', 'jit6', 'maai4daan1', 'hou2sik6'], xp: 25 }
      ]
    },
    {
      id: 'c2u6',
      index: 6,
      title: 'Shopping',
      titleHan: '買嘢',
      hue: 'amber',
      lessons: [
        { id: 'c2u6l1', title: 'Buy & sell', newWords: ['maai5', 'maai6', 'peng4', 'gwai3'] },
        { id: 'c2u6l2', title: 'I want that', newWords: ['si3', 'jiu3', 'je5', 'saam1b'], reviewWords: ['maai5', 'gwai3'] },
        { id: 'c2u6l3', title: 'Shopping practice', newWords: [], reviewWords: ['maai5', 'maai6', 'peng4', 'gwai3', 'si3', 'jiu3', 'je5', 'saam1b'] },
        { id: 'c2u6l4', title: 'Shopping mastery', newWords: [], reviewWords: ['maai5', 'maai6', 'peng4', 'gwai3', 'si3', 'jiu3', 'je5', 'saam1b'], xp: 25 }
      ]
    },
    {
      id: 'c2u7',
      index: 7,
      title: 'Weather & feelings',
      titleHan: '天氣',
      hue: 'teal',
      lessons: [
        { id: 'c2u7l1', title: 'Rain or shine', newWords: ['lok6jyu5', 'hou2tin1', 'tin1hei3', 'hoi1sam1'], reviewWords: ['jit6', 'dung3'] },
        { id: 'c2u7l2', title: 'How do you feel?', newWords: ['mhoi1sam1', 'gui6', 'tou5ngo6', 'geng2hot3'], reviewWords: ['hoi1sam1'] },
        { id: 'c2u7l3', title: 'Feelings practice', newWords: [], reviewWords: ['lok6jyu5', 'hou2tin1', 'tin1hei3', 'hoi1sam1', 'mhoi1sam1', 'gui6', 'tou5ngo6', 'geng2hot3'] },
        { id: 'c2u7l4', title: 'Feelings mastery', newWords: [], reviewWords: ['lok6jyu5', 'hou2tin1', 'tin1hei3', 'hoi1sam1', 'mhoi1sam1', 'gui6', 'tou5ngo6', 'geng2hot3'], xp: 25 }
      ]
    },
    {
      id: 'c2u8',
      index: 8,
      title: 'Checkpoint',
      titleHan: '關卡',
      hue: 'coral',
      lessons: [
        { id: 'c2u8l1', title: 'Checkpoint I', newWords: [], reviewWords: [], xp: 25 },
        { id: 'c2u8l2', title: 'Checkpoint II', newWords: [], reviewWords: [], xp: 25 },
        { id: 'c2u8l3', title: 'Checkpoint III', newWords: [], reviewWords: [], xp: 25 }
      ]
    }
  ]
};
