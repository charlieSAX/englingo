import type { Sentence } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// Word-bank sentences. The learner sees the Cantonese sentence (cn) and builds
// the English answer by tapping English word tiles (tokens). The "type what you
// hear" variant plays the English (en) and the learner assembles it.
// A sentence only appears once every vocab id in `needs` has been met.
// ─────────────────────────────────────────────────────────────────────────────

export type LevelId = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6';

export const SENTENCES: Record<LevelId, Sentence[]> = {
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
  ],

  C4: [
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'am', j: '/æm/' }, { t: 'so', j: '/səʊ/' }, { t: 'nervous', j: '/ˈnɜːvəs/' }],
      en: 'I am so nervous',
      cn: '我好緊張',
      needs: ['gan2zoeng1']
    },
    {
      tokens: [{ t: 'He', j: '/hiː/' }, { t: 'is', j: '/ɪz/' }, { t: 'very', j: '/ˈveri/' }, { t: 'friendly', j: '/ˈfrendli/' }],
      en: 'He is very friendly',
      cn: '佢好友善',
      needs: ['keoi5', 'jau5sin6']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'agree', j: '/əˈɡriː/' }, { t: 'with', j: '/wɪð/' }, { t: 'you', j: '/juː/' }],
      en: 'I agree with you',
      cn: '我同意你',
      needs: ['ngo5', 'tung4ji3', 'nei5']
    },
    {
      tokens: [{ t: "Don't", j: '/dəʊnt/' }, { t: 'give up', j: '/ˌɡɪv ˈʌp/' }],
      en: "Don't give up",
      cn: '唔好放棄',
      needs: ['fong3hei3']
    },
    {
      tokens: [{ t: 'The', j: '/ðə/' }, { t: 'soup', j: '/suːp/' }, { t: 'is', j: '/ɪz/' }, { t: 'too', j: '/tuː/' }, { t: 'salty', j: '/ˈsɔːlti/' }],
      en: 'The soup is too salty',
      cn: '啲湯太鹹',
      needs: ['haam4']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: "can't", j: '/kɑːnt/' }, { t: 'afford', j: '/əˈfɔːd/' }, { t: 'it', j: '/ɪt/' }],
      en: "I can't afford it",
      cn: '我負擔唔起',
      needs: ['fu6daam1dak1hei2']
    },
    {
      tokens: [{ t: 'Can I', j: '/kən aɪ/' }, { t: 'have', j: '/hæv/' }, { t: 'a', j: '/ə/' }, { t: 'refund', j: '/ˈriːfʌnd/' }],
      en: 'Can I have a refund?',
      cn: '可唔可以退錢呀？',
      needs: ['teoi3cin2']
    },
    {
      tokens: [{ t: 'My', j: '/maɪ/' }, { t: 'neighbour', j: '/ˈneɪbə/' }, { t: 'is', j: '/ɪz/' }, { t: 'noisy', j: '/ˈnɔɪzi/' }],
      en: 'My neighbour is noisy',
      cn: '我嘅鄰居好嘈',
      needs: ['leon4geoi1', 'cou4']
    },
    {
      tokens: [{ t: 'Turn off', j: '/ˌtɜːn ˈɒf/' }, { t: 'the', j: '/ðə/' }, { t: 'light', j: '/laɪt/' }],
      en: 'Turn off the light',
      cn: '熄燈',
      needs: ['sik1']
    },
    {
      tokens: [{ t: 'She', j: '/ʃiː/' }, { t: 'is', j: '/ɪz/' }, { t: 'honest', j: '/ˈɒnɪst/' }, { t: 'and', j: '/ænd/' }, { t: 'kind', j: '/kaɪnd/' }],
      en: 'She is honest and kind',
      cn: '佢又老實又好心',
      needs: ['keoi5', 'lou5sat6', 'hou2sam1']
    },
    {
      tokens: [{ t: 'The', j: '/ðə/' }, { t: 'fish', j: '/fɪʃ/' }, { t: 'is', j: '/ɪz/' }, { t: 'fresh', j: '/freʃ/' }],
      en: 'The fish is fresh',
      cn: '條魚好新鮮',
      needs: ['san1sin1', 'jyu4']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'am', j: '/æm/' }, { t: 'bored', j: '/bɔːd/' }, { t: 'at', j: '/æt/' }, { t: 'home', j: '/həʊm/' }],
      en: 'I am bored at home',
      cn: '我喺屋企好悶',
      needs: ['mun6']
    },
    {
      tokens: [{ t: 'We', j: '/wiː/' }, { t: 'order', j: '/ˈɔːdə/' }, { t: 'takeaway', j: '/ˈteɪkəweɪ/' }],
      en: 'We order takeaway',
      cn: '我哋叫外賣',
      needs: ['ngo5dei6', 'lok6daan1', 'ngoi6maai6']
    }
  ],

  C5: [
    {
      tokens: [{ t: 'Where', j: '/weə/' }, { t: 'is', j: '/ɪz/' }, { t: 'my', j: '/maɪ/' }, { t: 'passport', j: '/ˈpɑːspɔːt/' }],
      en: 'Where is my passport?',
      cn: '我本護照喺邊呀？',
      needs: ['wu6ziu3']
    },
    {
      tokens: [{ t: 'The', j: '/ðə/' }, { t: 'train', j: '/treɪn/' }, { t: 'is', j: '/ɪz/' }, { t: 'delayed', j: '/dɪˈleɪd/' }],
      en: 'The train is delayed',
      cn: '班火車延誤咗',
      needs: ['jin4ng6', 'fo2ce1']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'booked', j: '/bʊkt/' }, { t: 'a', j: '/ə/' }, { t: 'hotel', j: '/həʊˈtel/' }],
      en: 'I booked a hotel',
      cn: '我預訂咗酒店',
      needs: ['jyu6deng6', 'zau2dim3']
    },
    {
      tokens: [{ t: 'We', j: '/wiː/' }, { t: 'set off', j: '/ˌset ˈɒf/' }, { t: 'at', j: '/æt/' }, { t: 'seven', j: '/ˈsevən/' }],
      en: 'We set off at seven',
      cn: '我哋七點出發',
      needs: ['ceot1faat3']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'look forward to', j: '/ˌlʊk ˈfɔːwəd tuː/' }, { t: 'the', j: '/ðə/' }, { t: 'party', j: '/ˈpɑːti/' }],
      en: 'I look forward to the party',
      cn: '我好期待個派對',
      needs: ['kei4doi6', 'paai3deoi3']
    },
    {
      tokens: [{ t: 'My', j: '/maɪ/' }, { t: 'boss', j: '/bɒs/' }, { t: 'is', j: '/ɪz/' }, { t: 'busy', j: '/ˈbɪzi/' }],
      en: 'My boss is busy',
      cn: '我老闆好忙',
      needs: ['lou5baan2', 'mong4']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'work overtime', j: '/ˌwɜːk ˈəʊvətaɪm/' }, { t: 'every', j: '/ˈevri/' }, { t: 'day', j: '/deɪ/' }],
      en: 'I work overtime every day',
      cn: '我日日加班',
      needs: ['gaa1baan1']
    },
    {
      tokens: [{ t: 'The', j: '/ðə/' }, { t: 'battery', j: '/ˈbætəri/' }, { t: 'has', j: '/hæz/' }, { t: 'run out', j: '/ˌrʌn ˈaʊt/' }],
      en: 'The battery has run out',
      cn: '冇晒電',
      needs: ['din6ci4', 'jung6saai3']
    },
    {
      tokens: [{ t: 'What', j: '/wɒt/' }, { t: 'is', j: '/ɪz/' }, { t: 'the', j: '/ðə/' }, { t: 'password', j: '/ˈpɑːswɜːd/' }],
      en: 'What is the password?',
      cn: '個密碼係咩呀？',
      needs: ['mat6maa5']
    },
    {
      tokens: [{ t: "Don't", j: '/dəʊnt/' }, { t: 'get lost', j: '/ˌɡet ˈlɒst/' }],
      en: "Don't get lost",
      cn: '唔好蕩失路',
      needs: ['dong6sat1lou6']
    },
    {
      tokens: [{ t: 'She', j: '/ʃiː/' }, { t: 'looks after', j: '/ˌlʊks ˈɑːftə/' }, { t: 'the', j: '/ðə/' }, { t: 'cat', j: '/kæt/' }],
      en: 'She looks after the cat',
      cn: '佢照顧隻貓',
      needs: ['ziu3gu3', 'maau1']
    },
    {
      tokens: [{ t: 'We', j: '/wiː/' }, { t: 'celebrate', j: '/ˈseləbreɪt/' }, { t: 'her', j: '/hɜː/' }, { t: 'birthday', j: '/ˈbɜːθdeɪ/' }],
      en: 'We celebrate her birthday',
      cn: '我哋慶祝佢生日',
      needs: ['hing3zuk1', 'saang1jat6']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'swim', j: '/swɪm/' }, { t: 'at', j: '/æt/' }, { t: 'the', j: '/ðə/' }, { t: 'beach', j: '/biːtʃ/' }],
      en: 'I swim at the beach',
      cn: '我喺海灘游水',
      needs: ['jau4seoi2', 'hoi2taan1']
    }
  ],

  C6: [
    {
      tokens: [{ t: 'Please', j: '/pliːz/' }, { t: 'take your time', j: '/ˌteɪk jɔː ˈtaɪm/' }],
      en: 'Please take your time',
      cn: '唔該慢慢嚟',
      needs: ['maan6maan2lai4']
    },
    {
      tokens: [{ t: 'Good luck', j: '/ˌɡʊd ˈlʌk/' }, { t: 'tomorrow', j: '/təˈmɒrəʊ/' }],
      en: 'Good luck tomorrow',
      cn: '聽日祝你好運',
      needs: ['zuk1nei5hou2wan6']
    },
    {
      tokens: [{ t: 'This', j: '/ðɪs/' }, { t: 'is', j: '/ɪz/' }, { t: 'a', j: '/ə/' }, { t: 'good', j: '/ɡʊd/' }, { t: 'opportunity', j: '/ˌɒpəˈtjuːnəti/' }],
      en: 'This is a good opportunity',
      cn: '呢個係好機會',
      needs: ['gei1wui6']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'made', j: '/meɪd/' }, { t: 'a', j: '/ə/' }, { t: 'mistake', j: '/mɪˈsteɪk/' }],
      en: 'I made a mistake',
      cn: '我犯咗個錯誤',
      needs: ['co3ng6']
    },
    {
      tokens: [{ t: 'Although', j: '/ɔːlˈðəʊ/' }, { t: 'it is', j: '/ɪt ɪz/' }, { t: 'expensive', j: '/ɪkˈspensɪv/' }, { t: 'it is', j: '/ɪt ɪz/' }, { t: 'useful', j: '/ˈjuːsfəl/' }],
      en: 'Although it is expensive, it is useful',
      cn: '雖然貴，但係有用',
      needs: ['seoi1jin4', 'jau5jung6']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'promise', j: '/ˈprɒmɪs/' }, { t: 'I', j: '/aɪ/' }, { t: 'will', j: '/wɪl/' }, { t: 'come back', j: '/ˌkʌm ˈbæk/' }],
      en: 'I promise I will come back',
      cn: '我應承會返嚟',
      needs: ['jing1sing4', 'faan1lai4']
    },
    {
      tokens: [{ t: 'You', j: '/juː/' }, { t: 'should', j: '/ʃʊd/' }, { t: 'apologise', j: '/əˈpɒlədʒaɪz/' }],
      en: 'You should apologise',
      cn: '你應該道歉',
      needs: ['dou6hip3']
    },
    {
      tokens: [{ t: 'Suddenly', j: '/ˈsʌdənli/' }, { t: 'it', j: '/ɪt/' }, { t: 'rained', j: '/reɪnd/' }],
      en: 'Suddenly it rained',
      cn: '突然落雨',
      needs: ['dat6jin4']
    },
    {
      tokens: [{ t: 'He', j: '/hiː/' }, { t: 'explained', j: '/ɪkˈspleɪnd/' }, { t: 'the', j: '/ðə/' }, { t: 'reason', j: '/ˈriːzən/' }],
      en: 'He explained the reason',
      cn: '佢解釋咗個原因',
      needs: ['gaai2sik1', 'jyun4jan1']
    },
    {
      tokens: [{ t: 'My', j: '/maɪ/' }, { t: 'dream', j: '/driːm/' }, { t: 'is', j: '/ɪz/' }, { t: 'to', j: '/tuː/' }, { t: 'travel', j: '/ˈtrævəl/' }],
      en: 'My dream is to travel',
      cn: '我嘅夢想係去旅行',
      needs: ['mung6soeng2']
    },
    {
      tokens: [{ t: 'Calm down', j: '/ˌkɑːm ˈdaʊn/' }, { t: 'and', j: '/ænd/' }, { t: 'rest', j: '/rest/' }],
      en: 'Calm down and rest',
      cn: '冷靜啲，休息吓',
      needs: ['laang5zing6', 'jau1sik1']
    },
    {
      tokens: [{ t: 'I', j: '/aɪ/' }, { t: 'miss', j: '/mɪs/' }, { t: 'you', j: '/juː/' }, { t: 'so', j: '/səʊ/' }, { t: 'much', j: '/mʌtʃ/' }],
      en: 'I miss you so much',
      cn: '我好掛住你',
      needs: ['gwaa3zyu6', 'nei5']
    },
    {
      tokens: [{ t: 'Well done', j: '/ˌwel ˈdʌn/' }, { t: 'keep going', j: '/ˌkiːp ˈɡəʊɪŋ/' }],
      en: 'Well done, keep going!',
      cn: '做得好，加油！',
      needs: ['zou6dak1hou2', 'gaa1jau2']
    }
  ]
};
