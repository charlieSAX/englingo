import type { Sentence } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// Word-bank sentences. The learner sees the Cantonese sentence (cn) and builds
// the English answer by tapping English word tiles (tokens). The "type what you
// hear" variant plays the English (en) and the learner assembles it.
// A sentence only appears once every vocab id in `needs` has been met.
// ─────────────────────────────────────────────────────────────────────────────

export const SENTENCES: Record<'C1' | 'C2' | 'C3', Sentence[]> = {
  C1: [
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'like', j: '/laɪk/' }, { t: 'tea', j: '/tiː/' }],
      en: 'I like tea',
      cn: '我鍾意茶',
      needs: ['ngo5', 'zung1ji3', 'caa4']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'like', j: '/laɪk/' }, { t: 'coffee', j: '/ˈkɒfi/' }],
      en: 'I like coffee',
      cn: '我鍾意咖啡',
      needs: ['ngo5', 'zung1ji3', 'gaa3fe1']
    },
    {
      tokens: [{ t: 'He', j: '/hiː/' }, { t: 'drinks', j: '/drɪŋks/' }, { t: 'water', j: '/ˈwɔːtə/' }],
      en: 'He drinks water',
      cn: '佢飲水',
      needs: ['keoi5', 'jam2', 'seoi2']
    },
    {
      tokens: [{ t: 'We', j: '/wiː/' }, { t: 'eat', j: '/iːt/' }, { t: 'rice', j: '/raɪs/' }],
      en: 'We eat rice',
      cn: '我哋食飯',
      needs: ['ngo5dei6', 'sik6', 'faan6']
    },
    {
      tokens: [{ t: 'He', j: '/hiː/' }, { t: 'is', j: '/ɪz/' }, { t: 'my', j: '/maɪ/' }, { t: 'dad', j: '/dæd/' }],
      en: 'He is my dad',
      cn: '佢係我爸爸',
      needs: ['keoi5', 'hai6', 'ngo5', 'baa4baa1']
    },
    {
      tokens: [{ t: 'She', j: '/ʃiː/' }, { t: 'is', j: '/ɪz/' }, { t: 'not', j: '/nɒt/' }, { t: 'my', j: '/maɪ/' }, { t: 'mum', j: '/mʌm/' }],
      en: 'She is not my mum',
      cn: '佢唔係我媽媽',
      needs: ['keoi5', 'm4hai6', 'ngo5', 'maa4maa1']
    },
    {
      tokens: [{ t: 'Good morning', j: '/ˌɡʊd ˈmɔːnɪŋ/' }, { t: 'Dad', j: '/dæd/' }],
      en: 'Good morning, Dad',
      cn: '早晨爸爸',
      needs: ['zou2san4', 'baa4baa1']
    },
    {
      tokens: [{ t: 'Thank you', j: '/ˈθæŋk juː/' }, { t: 'Mum', j: '/mʌm/' }],
      en: 'Thank you, Mum',
      cn: '多謝媽媽',
      needs: ['do1ze6', 'maa4maa1']
    },
    {
      tokens: [{ t: 'You', j: '/juː/' }, { t: 'eat', j: '/iːt/' }, { t: 'an', j: '/ən/' }, { t: 'apple', j: '/ˈæpəl/' }],
      en: 'You eat an apple',
      cn: '你食蘋果',
      needs: ['nei5', 'sik6', 'ping4gwo2']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'am', j: '/æm/' }, { t: 'the', j: '/ðə/' }, { t: 'younger brother', j: '/ˈjʌŋɡə ˈbrʌðə/' }],
      en: 'I am the younger brother',
      cn: '我係細佬',
      needs: ['ngo5', 'hai6', 'sai3lou2']
    },
    {
      tokens: [{ t: 'They', j: '/ðeɪ/' }, { t: 'look at', j: '/ˈlʊk ət/' }, { t: 'the', j: '/ðə/' }, { t: 'fish', j: '/fɪʃ/' }],
      en: 'They look at the fish',
      cn: '佢哋睇魚',
      needs: ['keoi5dei', 'tai2', 'jyu4']
    }
  ],

  C2: [
    {
      tokens: [{ t: 'How much', j: '/ˌhaʊ ˈmʌtʃ/' }, { t: 'is', j: '/ɪz/' }, { t: 'the', j: '/ðə/' }, { t: 'tea', j: '/tiː/' }],
      en: 'How much is the tea?',
      cn: '茶幾多錢呀',
      needs: ['caa4', 'gei2do1cin2']
    },
    {
      tokens: [{ t: 'I would like', j: '/aɪ wʊd ˈlaɪk/' }, { t: 'a', j: '/ə/' }, { t: 'cup', j: '/kʌp/' }, { t: 'of', j: '/əv/' }, { t: 'coffee', j: '/ˈkɒfi/' }],
      en: 'I would like a cup of coffee',
      cn: '我想要一杯咖啡',
      needs: ['soeng2jiu3', 'jat1bui1', 'gaa3fe1']
    },
    {
      tokens: [{ t: 'I would like', j: '/aɪ wʊd ˈlaɪk/' }, { t: 'a', j: '/ə/' }, { t: 'bowl', j: '/bəʊl/' }, { t: 'of', j: '/əv/' }, { t: 'noodles', j: '/ˈnuːdəlz/' }],
      en: 'I would like a bowl of noodles',
      cn: '我想要一碗麵',
      needs: ['soeng2jiu3', 'jat1wun2', 'min6']
    },
    {
      tokens: [{ t: 'The bill', j: '/ðə bɪl/' }, { t: 'please', j: '/pliːz/' }],
      en: 'The bill, please',
      cn: '唔該埋單',
      needs: ['mgoi1', 'maai4daan1']
    },
    {
      tokens: [{ t: 'Where', j: '/weə/' }, { t: 'is', j: '/ɪz/' }, { t: 'the', j: '/ðə/' }, { t: 'school', j: '/skuːl/' }],
      en: 'Where is the school?',
      cn: '學校喺邊度呀',
      needs: ['hok6haau6', 'hai2', 'bin1dou6']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'am', j: '/æm/' }, { t: 'at', j: '/æt/' }, { t: 'home', j: '/həʊm/' }],
      en: 'I am at home',
      cn: '我喺屋企',
      needs: ['ngo5', 'hai2', 'uk1kei2']
    },
    {
      tokens: [{ t: 'The MTR', j: '/ðə ˌem tiː ˈɑː/' }, { t: 'is', j: '/ɪz/' }, { t: 'on the', j: '/ɒn ðə/' }, { t: 'left', j: '/left/' }],
      en: 'The MTR is on the left',
      cn: '港鐵喺左邊',
      needs: ['gong2tit3', 'hai2', 'zo2bin1']
    },
    {
      tokens: [{ t: 'It is', j: '/ɪt ɪz/' }, { t: 'raining', j: '/ˈreɪnɪŋ/' }, { t: 'today', j: '/təˈdeɪ/' }],
      en: 'It is raining today',
      cn: '今日落雨',
      needs: ['gam1jat6', 'lok6jyu5']
    },
    {
      tokens: [{ t: 'Tomorrow', j: '/təˈmɒrəʊ/' }, { t: 'will be', j: '/wɪl biː/' }, { t: 'sunny', j: '/ˈsʌni/' }],
      en: 'Tomorrow will be sunny',
      cn: '聽日好天',
      needs: ['ting1jat6', 'hou2tin1']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'buy', j: '/baɪ/' }, { t: 'clothes', j: '/kləʊðz/' }],
      en: 'I buy clothes',
      cn: '我買衫',
      needs: ['ngo5', 'maai5', 'saam1b']
    },
    {
      tokens: [{ t: 'Coffee', j: '/ˈkɒfi/' }, { t: 'is', j: '/ɪz/' }, { t: 'very', j: '/ˈveri/' }, { t: 'expensive', j: '/ɪkˈspensɪv/' }],
      en: 'Coffee is very expensive',
      cn: '咖啡好貴',
      needs: ['gaa3fe1', 'hou2', 'gwai3']
    },
    {
      tokens: [{ t: 'Tea', j: '/tiː/' }, { t: 'is', j: '/ɪz/' }, { t: 'very', j: '/ˈveri/' }, { t: 'cheap', j: '/tʃiːp/' }],
      en: 'Tea is very cheap',
      cn: '茶好平',
      needs: ['caa4', 'hou2', 'peng4']
    },
    {
      tokens: [{ t: 'The house', j: '/ðə haʊs/' }, { t: 'is', j: '/ɪz/' }, { t: 'very', j: '/ˈveri/' }, { t: 'big', j: '/bɪɡ/' }],
      en: 'The house is very big',
      cn: '屋企好大',
      needs: ['uk1kei2', 'hou2', 'daai6']
    },
    {
      tokens: [{ t: 'I am', j: '/aɪ æm/' }, { t: 'so', j: '/səʊ/' }, { t: 'hungry', j: '/ˈhʌŋɡri/' }],
      en: 'I am so hungry!',
      cn: '我好肚餓呀',
      needs: ['ngo5', 'hou2', 'tou5ngo6']
    }
  ],

  C3: [
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'go to work', j: '/ˌɡəʊ tə ˈwɜːk/' }, { t: 'tomorrow', j: '/təˈmɒrəʊ/' }],
      en: 'I go to work tomorrow',
      cn: '我聽日返工',
      needs: ['ngo5', 'ting1jat6', 'faan1gung1']
    },
    {
      tokens: [{ t: 'I am', j: '/aɪ æm/' }, { t: 'eating', j: '/ˈiːtɪŋ/' }, { t: 'now', j: '/naʊ/' }],
      en: 'I am eating now',
      cn: '我而家食緊',
      needs: ['ngo5', 'sik6gan2', 'faan6']
    },
    {
      tokens: [{ t: 'Have you', j: '/hæv juː/' }, { t: 'eaten', j: '/ˈiːtən/' }, { t: 'yet', j: '/jet/' }],
      en: 'Have you eaten yet?',
      cn: '你食咗飯未呀',
      needs: ['nei5', 'sik6zo2', 'faan6', 'mei6']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'have been', j: '/həv ˈbiːn/' }, { t: 'to the', j: '/tə ðə/' }, { t: 'restaurant', j: '/ˈrestrɒnt/' }],
      en: 'I have been to the restaurant',
      cn: '我去過餐廳',
      needs: ['ngo5', 'heoi3gwo3', 'caan1teng1']
    },
    {
      tokens: [{ t: "Let's", j: '/lets/' }, { t: 'eat', j: '/iːt/' }, { t: 'together', j: '/təˈɡeðə/' }, { t: 'tomorrow', j: '/təˈmɒrəʊ/' }],
      en: "Let's eat together tomorrow",
      cn: '我哋聽日一齊食飯',
      needs: ['ngo5dei6', 'ting1jat6', 'jat1cai4', 'sik6', 'faan6']
    },
    {
      tokens: [{ t: 'When', j: '/wen/' }, { t: 'are you', j: '/ə juː/' }, { t: 'going home', j: '/ˌɡəʊɪŋ ˈhəʊm/' }],
      en: 'When are you going home?',
      cn: '你幾時返屋企呀',
      needs: ['nei5', 'gei2si4', 'faan1uk1kei2']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'will', j: '/wɪl/' }, { t: 'take', j: '/teɪk/' }, { t: 'the', j: '/ðə/' }, { t: 'bus', j: '/bʌs/' }],
      en: 'I will take the bus',
      cn: '我會搭巴士',
      needs: ['ngo5', 'wui5', 'daap3', 'baa1si2']
    },
    {
      tokens: [{ t: 'Take', j: '/teɪk/' }, { t: 'a', j: '/ə/' }, { t: 'taxi', j: '/ˈtæksi/' }, { t: 'to', j: '/tə/' }, { t: 'school', j: '/skuːl/' }],
      en: 'Take a taxi to school',
      cn: '搭的士去學校',
      needs: ['daap3', 'dik1si2', 'heoi3', 'hok6haau6']
    },
    {
      tokens: [{ t: 'Long time no see', j: '/ˌlɒŋ taɪm nəʊ ˈsiː/' }, { t: 'how are you', j: '/ˌhaʊ ɑː ˈjuː/' }],
      en: 'Long time no see, how are you?',
      cn: '好耐冇見你點呀',
      needs: ['hou2noi6mou5gin3', 'nei5', 'dim2aa3']
    },
    {
      tokens: [{ t: 'My', j: '/maɪ/' }, { t: 'head', j: '/hed/' }, { t: 'hurts', j: '/hɜːts/' }],
      en: 'My head hurts',
      cn: '我頭痛',
      needs: ['ngo5', 'tau4', 'tung3']
    },
    {
      tokens: [{ t: 'He is', j: '/hiː ɪz/' }, { t: 'sick', j: '/sɪk/' }],
      en: 'He is sick',
      cn: '佢病咗',
      needs: ['keoi5', 'beng6', 'zo2']
    },
    {
      tokens: [{ t: 'I am', j: '/aɪ æm/' }, { t: 'going to', j: '/ˌɡəʊɪŋ tə/' }, { t: 'sleep', j: '/sliːp/' }, { t: 'now', j: '/naʊ/' }],
      en: 'I am going to sleep now',
      cn: '我瞓覺喇',
      needs: ['ngo5', 'fan3gaau3']
    },
    {
      tokens: [{ t: 'Shall we', j: '/ʃæl wiː/' }, { t: 'chat', j: '/tʃæt/' }, { t: 'together', j: '/təˈɡeðə/' }, { t: 'tomorrow', j: '/təˈmɒrəʊ/' }],
      en: 'Shall we chat together tomorrow?',
      cn: '聽日一齊傾偈得唔得呀',
      needs: ['ting1jat6', 'jat1cai4', 'king1gai2', 'dak1m4dak1']
    }
  ]
};
