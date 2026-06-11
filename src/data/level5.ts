import type { Level, Vocab } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// Level 5 — "Out & about" 出街
// Travel, city life, health, work life, technology, more phrasal verbs,
// social life, nature. Same conventions as Level 4.
// ─────────────────────────────────────────────────────────────────────────────

export const VOCAB_L5: Vocab[] = [
  // Unit 1 — Travel 旅行
  { id: 'wu6ziu3', trad: '護照', jyut: 'wu6 ziu3', en: 'Passport', ipa: '/ˈpɑːspɔːt/' },
  { id: 'hang4lei5', trad: '行李', jyut: 'hang4 lei5', en: 'Luggage', ipa: '/ˈlʌɡɪdʒ/' },
  { id: 'gei1piu3', trad: '機票', jyut: 'gei1 piu3', en: 'Plane ticket', ipa: '/ˈpleɪn ˌtɪkɪt/' },
  { id: 'jyu6deng6', trad: '預訂', jyut: 'jyu6 deng6', en: 'Book', ipa: '/bʊk/', pos: 'v.' },
  { id: 'jin4ng6', trad: '延誤', jyut: 'jin4 ng6', en: 'Delayed', ipa: '/dɪˈleɪd/' },
  { id: 'leoi5cing4', trad: '旅程', jyut: 'leoi5 cing4', en: 'Journey', ipa: '/ˈdʒɜːni/' },
  { id: 'ceot1gwok3', trad: '出國', jyut: 'ceot1 gwok3', en: 'Go abroad', ipa: '/ˌɡəʊ əˈbrɔːd/' },
  { id: 'zau2dim3', trad: '酒店', jyut: 'zau2 dim3', en: 'Hotel', ipa: '/həʊˈtel/' },
  { id: 'gun1gwong1', trad: '觀光', jyut: 'gun1 gwong1', en: 'Sightseeing', ipa: '/ˈsaɪtsiːɪŋ/' },
  { id: 'sau2seon3', trad: '手信', jyut: 'sau2 seon3', en: 'Souvenir', ipa: '/ˌsuːvəˈnɪə/' },

  // Unit 2 — City life 城市
  { id: 'bik1', trad: '迫', jyut: 'bik1', en: 'Crowded', ipa: '/ˈkraʊdɪd/' },
  { id: 'paai4deoi2', trad: '排隊', jyut: 'paai4 deoi2', en: 'Queue', ipa: '/kjuː/' },
  { id: 'sak1ce1', trad: '塞車', jyut: 'sak1 ce1', en: 'Traffic jam', ipa: '/ˈtræfɪk dʒæm/' },
  { id: 'faan4mong4si4gaan3', trad: '繁忙時間', jyut: 'faan4 mong4 si4 gaan3', en: 'Rush hour', ipa: '/ˈrʌʃ aʊə/' },
  { id: 'si5zung1sam1', trad: '市中心', jyut: 'si5 zung1 sam1', en: 'City centre', ipa: '/ˌsɪti ˈsentə/' },
  { id: 'dong6sat1lou6', trad: '蕩失路', jyut: 'dong6 sat1 lou6', en: 'Get lost', ipa: '/ˌɡet ˈlɒst/' },
  { id: 'daai6haa6', trad: '大廈', jyut: 'daai6 haa6', en: 'Building', ipa: '/ˈbɪldɪŋ/' },
  { id: 'gaai1', trad: '街', jyut: 'gaai1', en: 'Street', ipa: '/striːt/' },
  { id: 'zyun3gok3', trad: '轉角', jyut: 'zyun3 gok3', en: 'Corner', ipa: '/ˈkɔːnə/' },
  { id: 'dei6tou4', trad: '地圖', jyut: 'dei6 tou4', en: 'Map', ipa: '/mæp/' },

  // Unit 3 — Health & fitness 健康
  { id: 'zou6wan6dung6', trad: '做運動', jyut: 'zou6 wan6 dung6', en: 'Exercise', ipa: '/ˈeksəsaɪz/' },
  { id: 'gin6san1sat1', trad: '健身室', jyut: 'gin6 san1 sat1', en: 'Gym', ipa: '/dʒɪm/' },
  { id: 'gin6hong1', trad: '健康', jyut: 'gin6 hong1', en: 'Healthy', ipa: '/ˈhelθi/' },
  { id: 'zit3sik6', trad: '節食', jyut: 'zit3 sik6', en: 'Diet', ipa: '/ˈdaɪət/' },
  { id: 'sau6soeng1', trad: '受傷', jyut: 'sau6 soeng1', en: 'Injured', ipa: '/ˈɪndʒəd/' },
  { id: 'tau4tung3', trad: '頭痛', jyut: 'tau4 tung3', en: 'Headache', ipa: '/ˈhedeɪk/' },
  { id: 'faat3siu1', trad: '發燒', jyut: 'faat3 siu1', en: 'Fever', ipa: '/ˈfiːvə/' },
  { id: 'joek6fong4', trad: '藥房', jyut: 'joek6 fong4', en: 'Pharmacy', ipa: '/ˈfɑːməsi/' },
  { id: 'jyu6joek3', trad: '預約', jyut: 'jyu6 joek3', en: 'Appointment', ipa: '/əˈpɔɪntmənt/' },
  { id: 'jau1sik1', trad: '休息', jyut: 'jau1 sik1', en: 'Rest', ipa: '/rest/' },

  // Unit 4 — Work life 職場
  { id: 'lou5baan2', trad: '老闆', jyut: 'lou5 baan2', en: 'Boss', ipa: '/bɒs/' },
  { id: 'gin3gung1', trad: '見工', jyut: 'gin3 gung1', en: 'Job interview', ipa: '/ˈdʒɒb ˌɪntəvjuː/' },
  { id: 'ceng2jan4', trad: '請人', jyut: 'ceng2 jan4', en: 'Hire', ipa: '/ˈhaɪə/' },
  { id: 'ci4zik1', trad: '辭職', jyut: 'ci4 zik1', en: 'Quit', ipa: '/kwɪt/' },
  { id: 'sei2sin3', trad: '死線', jyut: 'sei2 sin3', en: 'Deadline', ipa: '/ˈdedlaɪn/' },
  { id: 'gaa1baan1', trad: '加班', jyut: 'gaa1 baan1', en: 'Work overtime', ipa: '/ˌwɜːk ˈəʊvətaɪm/' },
  { id: 'fong3gaa3', trad: '放假', jyut: 'fong3 gaa3', en: 'Day off', ipa: '/ˌdeɪ ˈɒf/' },
  { id: 'sing1zik1', trad: '升職', jyut: 'sing1 zik1', en: 'Promotion', ipa: '/prəˈməʊʃən/' },
  { id: 'ging1jim6', trad: '經驗', jyut: 'ging1 jim6', en: 'Experience', ipa: '/ɪkˈspɪəriəns/' },
  { id: 'din6jau4', trad: '電郵', jyut: 'din6 jau4', en: 'Email', ipa: '/ˈiːmeɪl/' },

  // Unit 5 — Technology 科技
  { id: 'sau2gei1', trad: '手機', jyut: 'sau2 gei1', en: 'Mobile phone', ipa: '/ˌməʊbaɪl ˈfəʊn/' },
  { id: 'cung1din6hei3', trad: '充電器', jyut: 'cung1 din6 hei3', en: 'Charger', ipa: '/ˈtʃɑːdʒə/' },
  { id: 'soeng5mong5', trad: '上網', jyut: 'soeng5 mong5', en: 'Go online', ipa: '/ˌɡəʊ ɒnˈlaɪn/' },
  { id: 'haa6zoi3', trad: '下載', jyut: 'haa6 zoi3', en: 'Download', ipa: '/ˌdaʊnˈləʊd/' },
  { id: 'mat6maa5', trad: '密碼', jyut: 'mat6 maa5', en: 'Password', ipa: '/ˈpɑːswɜːd/' },
  { id: 'jing4mok6', trad: '螢幕', jyut: 'jing4 mok6', en: 'Screen', ipa: '/skriːn/' },
  { id: 'seon3sik1', trad: '訊息', jyut: 'seon3 sik1', en: 'Message', ipa: '/ˈmesɪdʒ/' },
  { id: 'din6ci4', trad: '電池', jyut: 'din6 ci4', en: 'Battery', ipa: '/ˈbætəri/' },
  { id: 'jing3jung6cing4sik1', trad: '應用程式', jyut: 'jing3 jung6 cing4 sik1', en: 'App', ipa: '/æp/' },
  { id: 'jing2soeng2', trad: '影相', jyut: 'jing2 soeng2', en: 'Take a photo', ipa: '/ˌteɪk ə ˈfəʊtəʊ/' },

  // Unit 6 — Phrasal verbs II 短語動詞二
  { id: 'jung6saai3', trad: '用晒', jyut: 'jung6 saai3', en: 'Run out', ipa: '/ˌrʌn ˈaʊt/' },
  { id: 'ziu3gu3', trad: '照顧', jyut: 'ziu3 gu3', en: 'Look after', ipa: '/ˌlʊk ˈɑːftə/' },
  { id: 'ceot1faat3', trad: '出發', jyut: 'ceot1 faat3', en: 'Set off', ipa: '/ˌset ˈɒf/' },
  { id: 'faan1dou3', trad: '返到', jyut: 'faan1 dou3', en: 'Get back', ipa: '/ˌɡet ˈbæk/' },
  { id: 'kei4doi6', trad: '期待', jyut: 'kei4 doi6', en: 'Look forward to', ipa: '/ˌlʊk ˈfɔːwəd tuː/' },
  { id: 'waan4faan1', trad: '還返', jyut: 'waan4 faan1', en: 'Give back', ipa: '/ˌɡɪv ˈbæk/' },
  { id: 'deu6zo2', trad: '掉咗', jyut: 'deu6 zo2', en: 'Throw away', ipa: '/ˌθrəʊ əˈweɪ/' },
  { id: 'si3zoek3', trad: '試著', jyut: 'si3 zoek3', en: 'Try on', ipa: '/ˌtraɪ ˈɒn/' },
  { id: 'tin4biu2', trad: '填表', jyut: 'tin4 biu2', en: 'Fill in', ipa: '/ˌfɪl ˈɪn/' },
  { id: 'ceot1jin6', trad: '出現', jyut: 'ceot1 jin6', en: 'Turn up', ipa: '/ˌtɜːn ˈʌp/' },

  // Unit 7 — Social life 社交
  { id: 'jiu1ceng2', trad: '邀請', jyut: 'jiu1 ceng2', en: 'Invite', ipa: '/ɪnˈvaɪt/' },
  { id: 'ceoi2siu1', trad: '取消', jyut: 'ceoi2 siu1', en: 'Cancel', ipa: '/ˈkænsəl/' },
  { id: 'goi2kei4', trad: '改期', jyut: 'goi2 kei4', en: 'Postpone', ipa: '/pəʊstˈpəʊn/' },
  { id: 'dak1haan4', trad: '得閒', jyut: 'dak1 haan4', en: 'Available', ipa: '/əˈveɪləbəl/' },
  { id: 'paai3deoi3', trad: '派對', jyut: 'paai3 deoi3', en: 'Party', ipa: '/ˈpɑːti/' },
  { id: 'lai5mat6', trad: '禮物', jyut: 'lai5 mat6', en: 'Gift', ipa: '/ɡɪft/' },
  { id: 'hing3zuk1', trad: '慶祝', jyut: 'hing3 zuk1', en: 'Celebrate', ipa: '/ˈseləbreɪt/' },
  { id: 'saang1jat6', trad: '生日', jyut: 'saang1 jat6', en: 'Birthday', ipa: '/ˈbɜːθdeɪ/' },
  { id: 'fan1lai5', trad: '婚禮', jyut: 'fan1 lai5', en: 'Wedding', ipa: '/ˈwedɪŋ/' },
  { id: 'haak3jan4', trad: '客人', jyut: 'haak3 jan4', en: 'Guest', ipa: '/ɡest/' },

  // Unit 8 — Nature & weekends 大自然
  { id: 'hoi2taan1', trad: '海灘', jyut: 'hoi2 taan1', en: 'Beach', ipa: '/biːtʃ/' },
  { id: 'saan1', trad: '山', jyut: 'saan1', en: 'Mountain', ipa: '/ˈmaʊntɪn/' },
  { id: 'syu6', trad: '樹', jyut: 'syu6', en: 'Tree', ipa: '/triː/' },
  { id: 'faa1', trad: '花', jyut: 'faa1', en: 'Flower', ipa: '/ˈflaʊə/' },
  { id: 'gau2zai2', trad: '狗仔', jyut: 'gau2 zai2', en: 'Dog', ipa: '/dɒɡ/' },
  { id: 'maau1', trad: '貓', jyut: 'maau1', en: 'Cat', ipa: '/kæt/' },
  { id: 'jau4seoi2', trad: '游水', jyut: 'jau4 seoi2', en: 'Swim', ipa: '/swɪm/' },
  { id: 'haang4saan1', trad: '行山', jyut: 'haang4 saan1', en: 'Hike', ipa: '/haɪk/' },
  { id: 'siu1haau1', trad: '燒烤', jyut: 'siu1 haau1', en: 'Barbecue', ipa: '/ˈbɑːbɪkjuː/' },
  { id: 'diu3jyu2', trad: '釣魚', jyut: 'diu3 jyu2', en: 'Go fishing', ipa: '/ˌɡəʊ ˈfɪʃɪŋ/' }
];

export const LEVEL5: Level = {
  id: 'C5',
  index: 5,
  title: 'Out & about',
  titleHan: '出街',
  units: [
    {
      id: 'c5u1',
      index: 1,
      title: 'Travel',
      titleHan: '旅行',
      hue: 'azure',
      lessons: [
        { id: 'c5u1l1', title: 'Packing up', newWords: ['wu6ziu3', 'hang4lei5', 'gei1piu3', 'jyu6deng6', 'zau2dim3'] },
        { id: 'c5u1l2', title: 'On the road', newWords: ['jin4ng6', 'leoi5cing4', 'ceot1gwok3', 'gun1gwong1', 'sau2seon3'], reviewWords: ['wu6ziu3', 'gei1piu3'] },
        { id: 'c5u1l3', title: 'Travel practice', newWords: [], reviewWords: ['wu6ziu3', 'hang4lei5', 'gei1piu3', 'jyu6deng6', 'jin4ng6', 'leoi5cing4', 'ceot1gwok3', 'zau2dim3', 'gun1gwong1', 'sau2seon3'] },
        { id: 'c5u1l4', title: 'Travel mastery', newWords: [], reviewWords: ['wu6ziu3', 'hang4lei5', 'gei1piu3', 'jyu6deng6', 'jin4ng6', 'leoi5cing4', 'ceot1gwok3', 'zau2dim3', 'gun1gwong1', 'sau2seon3'], xp: 25 }
      ]
    },
    {
      id: 'c5u2',
      index: 2,
      title: 'City life',
      titleHan: '城市',
      hue: 'jade',
      lessons: [
        { id: 'c5u2l1', title: 'Busy streets', newWords: ['bik1', 'paai4deoi2', 'sak1ce1', 'faan4mong4si4gaan3', 'gaai1'] },
        { id: 'c5u2l2', title: 'Finding your way', newWords: ['si5zung1sam1', 'dong6sat1lou6', 'daai6haa6', 'zyun3gok3', 'dei6tou4'], reviewWords: ['gaai1', 'sak1ce1'] },
        { id: 'c5u2l3', title: 'City practice', newWords: [], reviewWords: ['bik1', 'paai4deoi2', 'sak1ce1', 'faan4mong4si4gaan3', 'si5zung1sam1', 'dong6sat1lou6', 'daai6haa6', 'gaai1', 'zyun3gok3', 'dei6tou4'] },
        { id: 'c5u2l4', title: 'City mastery', newWords: [], reviewWords: ['bik1', 'paai4deoi2', 'sak1ce1', 'faan4mong4si4gaan3', 'si5zung1sam1', 'dong6sat1lou6', 'daai6haa6', 'gaai1', 'zyun3gok3', 'dei6tou4'], xp: 25 }
      ]
    },
    {
      id: 'c5u3',
      index: 3,
      title: 'Health & fitness',
      titleHan: '健康',
      hue: 'pink',
      lessons: [
        { id: 'c5u3l1', title: 'Stay strong', newWords: ['zou6wan6dung6', 'gin6san1sat1', 'gin6hong1', 'zit3sik6', 'jau1sik1'] },
        { id: 'c5u3l2', title: 'Under the weather', newWords: ['sau6soeng1', 'tau4tung3', 'faat3siu1', 'joek6fong4', 'jyu6joek3'], reviewWords: ['gin6hong1', 'jau1sik1'] },
        { id: 'c5u3l3', title: 'Health practice', newWords: [], reviewWords: ['zou6wan6dung6', 'gin6san1sat1', 'gin6hong1', 'zit3sik6', 'sau6soeng1', 'tau4tung3', 'faat3siu1', 'joek6fong4', 'jyu6joek3', 'jau1sik1'] },
        { id: 'c5u3l4', title: 'Health mastery', newWords: [], reviewWords: ['zou6wan6dung6', 'gin6san1sat1', 'gin6hong1', 'zit3sik6', 'sau6soeng1', 'tau4tung3', 'faat3siu1', 'joek6fong4', 'jyu6joek3', 'jau1sik1'], xp: 25 }
      ]
    },
    {
      id: 'c5u4',
      index: 4,
      title: 'Work life',
      titleHan: '職場',
      hue: 'violet',
      lessons: [
        { id: 'c5u4l1', title: 'Getting the job', newWords: ['lou5baan2', 'gin3gung1', 'ceng2jan4', 'ging1jim6', 'din6jau4'] },
        { id: 'c5u4l2', title: 'Office life', newWords: ['ci4zik1', 'sei2sin3', 'gaa1baan1', 'fong3gaa3', 'sing1zik1'], reviewWords: ['lou5baan2', 'din6jau4'] },
        { id: 'c5u4l3', title: 'Work practice', newWords: [], reviewWords: ['lou5baan2', 'gin3gung1', 'ceng2jan4', 'ci4zik1', 'sei2sin3', 'gaa1baan1', 'fong3gaa3', 'sing1zik1', 'ging1jim6', 'din6jau4'] },
        { id: 'c5u4l4', title: 'Work mastery', newWords: [], reviewWords: ['lou5baan2', 'gin3gung1', 'ceng2jan4', 'ci4zik1', 'sei2sin3', 'gaa1baan1', 'fong3gaa3', 'sing1zik1', 'ging1jim6', 'din6jau4'], xp: 25 }
      ]
    },
    {
      id: 'c5u5',
      index: 5,
      title: 'Technology',
      titleHan: '科技',
      hue: 'amber',
      lessons: [
        { id: 'c5u5l1', title: 'On your phone', newWords: ['sau2gei1', 'cung1din6hei3', 'din6ci4', 'jing4mok6', 'jing2soeng2'] },
        { id: 'c5u5l2', title: 'Online life', newWords: ['soeng5mong5', 'haa6zoi3', 'mat6maa5', 'seon3sik1', 'jing3jung6cing4sik1'], reviewWords: ['sau2gei1', 'din6ci4'] },
        { id: 'c5u5l3', title: 'Tech practice', newWords: [], reviewWords: ['sau2gei1', 'cung1din6hei3', 'soeng5mong5', 'haa6zoi3', 'mat6maa5', 'jing4mok6', 'seon3sik1', 'din6ci4', 'jing3jung6cing4sik1', 'jing2soeng2'] },
        { id: 'c5u5l4', title: 'Tech mastery', newWords: [], reviewWords: ['sau2gei1', 'cung1din6hei3', 'soeng5mong5', 'haa6zoi3', 'mat6maa5', 'jing4mok6', 'seon3sik1', 'din6ci4', 'jing3jung6cing4sik1', 'jing2soeng2'], xp: 25 }
      ]
    },
    {
      id: 'c5u6',
      index: 6,
      title: 'Phrasal verbs II',
      titleHan: '短語動詞二',
      hue: 'mandarin',
      lessons: [
        { id: 'c5u6l1', title: 'Out and back', newWords: ['jung6saai3', 'ceot1faat3', 'faan1dou3', 'waan4faan1', 'deu6zo2'] },
        { id: 'c5u6l2', title: 'Looking and trying', newWords: ['ziu3gu3', 'kei4doi6', 'si3zoek3', 'tin4biu2', 'ceot1jin6'], reviewWords: ['ceot1faat3', 'jung6saai3'] },
        { id: 'c5u6l3', title: 'Phrasal practice II', newWords: [], reviewWords: ['jung6saai3', 'ziu3gu3', 'ceot1faat3', 'faan1dou3', 'kei4doi6', 'waan4faan1', 'deu6zo2', 'si3zoek3', 'tin4biu2', 'ceot1jin6'] },
        { id: 'c5u6l4', title: 'Phrasal mastery II', newWords: [], reviewWords: ['jung6saai3', 'ziu3gu3', 'ceot1faat3', 'faan1dou3', 'kei4doi6', 'waan4faan1', 'deu6zo2', 'si3zoek3', 'tin4biu2', 'ceot1jin6'], xp: 25 }
      ]
    },
    {
      id: 'c5u7',
      index: 7,
      title: 'Social life',
      titleHan: '社交',
      hue: 'teal',
      lessons: [
        { id: 'c5u7l1', title: 'You are invited', newWords: ['jiu1ceng2', 'paai3deoi3', 'lai5mat6', 'saang1jat6', 'haak3jan4'] },
        { id: 'c5u7l2', title: 'Plans change', newWords: ['ceoi2siu1', 'goi2kei4', 'dak1haan4', 'hing3zuk1', 'fan1lai5'], reviewWords: ['jiu1ceng2', 'paai3deoi3'] },
        { id: 'c5u7l3', title: 'Social practice', newWords: [], reviewWords: ['jiu1ceng2', 'ceoi2siu1', 'goi2kei4', 'dak1haan4', 'paai3deoi3', 'lai5mat6', 'hing3zuk1', 'saang1jat6', 'fan1lai5', 'haak3jan4'] },
        { id: 'c5u7l4', title: 'Social mastery', newWords: [], reviewWords: ['jiu1ceng2', 'ceoi2siu1', 'goi2kei4', 'dak1haan4', 'paai3deoi3', 'lai5mat6', 'hing3zuk1', 'saang1jat6', 'fan1lai5', 'haak3jan4'], xp: 25 }
      ]
    },
    {
      id: 'c5u8',
      index: 8,
      title: 'Nature & weekends',
      titleHan: '大自然',
      hue: 'coral',
      lessons: [
        { id: 'c5u8l1', title: 'Out in nature', newWords: ['hoi2taan1', 'saan1', 'syu6', 'faa1', 'diu3jyu2'] },
        { id: 'c5u8l2', title: 'Weekend fun', newWords: ['gau2zai2', 'maau1', 'jau4seoi2', 'haang4saan1', 'siu1haau1'], reviewWords: ['hoi2taan1', 'saan1'] },
        { id: 'c5u8l3', title: 'Nature practice', newWords: [], reviewWords: ['hoi2taan1', 'saan1', 'syu6', 'faa1', 'gau2zai2', 'maau1', 'jau4seoi2', 'haang4saan1', 'siu1haau1', 'diu3jyu2'] },
        { id: 'c5u8l4', title: 'Nature mastery', newWords: [], reviewWords: ['hoi2taan1', 'saan1', 'syu6', 'faa1', 'gau2zai2', 'maau1', 'jau4seoi2', 'haang4saan1', 'siu1haau1', 'diu3jyu2'], xp: 25 }
      ]
    },
    {
      id: 'c5u9',
      index: 9,
      title: 'Checkpoint',
      titleHan: '關卡',
      hue: 'violet',
      lessons: [
        { id: 'c5u9l1', title: 'Checkpoint I', newWords: [], reviewWords: [], xp: 25 },
        { id: 'c5u9l2', title: 'Checkpoint II', newWords: [], reviewWords: [], xp: 25 },
        { id: 'c5u9l3', title: 'Checkpoint III', newWords: [], reviewWords: [], xp: 25 }
      ]
    }
  ]
};
