

  var allPersona = 
    [{
        arcana: "Fool",
        name_jp: "イザナギ",
        name: "Izanagi",
        level: 1,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Rs",
            wind: "Wk",
            light: "-",
            dark: "Nu"
        },
        skills: "Zio, Cleave, Rakukaja, Rakunda(3), Tarukaja(5)",
        notes: "Elec"
    },
    {
        arcana: "Magician",
        name_jp: "ピクシー",
        name: "Pixie",
        level: 2,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Dia, Patra, Zio(3), Me Patra(4), Trafuri(8)",
        notes: "Recovery"
    },
    {
        arcana: "Chariot",
        name_jp: "スライム",
        name: "Slime",
        level: 2,
        modifiers: {
            physical: "Rs",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Bash, Evil Touch, Tarunda(3), Red Wall(4), Fear Boost(5), Resist Physical(7)",
        notes: "Phys"
    },
    {
        arcana: "Devil",
        name_jp: "ウコバク",
        name: "Ukobach",
        level: 3,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Agi, Sukunda, Pulinpa(4), Confuse Boost(5), Resist Fire(6), Fire Break(7)",
        notes: "Fire"
    },
    {
        arcana: "Justice",
        name_jp: "エンジェル",
        name: "Angel",
        level: 4,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "Rs",
            light: "Rs",
            dark: "Wk"
        },
        skills: "Garu, Patra, Hama(5), Sukukaja(6), Regenerate 1(8), Hama Boost(9)",
        notes: "Wind"
    },
    {
        arcana: "Temperance",
        name_jp: "アプサラス",
        name: "Apsaras",
        level: 4,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Patra, Dia, Rakunda(5), Me Patra(6), Bufu(7)",
        notes: "Recovery"
    },
    {
        arcana: "Strength",
        name_jp: "ザントマン",
        name: "Sandman",
        level: 5,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Garu, Pulinpa, Skull Cracker(6), Confuse Boost(7), Dekaja(8), Traesto(11)",
        notes: "Wind"
    },
    {
        arcana: "Chariot",
        name_jp: "ナタタイシ",
        name: "Nata Taishi",
        level: 6,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "-",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Bash, Rakunda, Dekunda, Sonic Punch(7), Dodge Ice(8), Resist Dizzy(9), Soul Break(10)",
        notes: "Phys"
    },
    {
        arcana: "Hermit",
        name_jp: "フォルネウス",
        name: "Forneus",
        level: 6,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rs",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "Nu"
        },
        skills: "Bufu, Skewer, Tarukaja, Rakunda(7), Poisma(8), Dodge Elec(10)",
        notes: "Ice"
    },
    {
        arcana: "Fool",
        name_jp: "ヨモツシコメ",
        name: "Yomotsu-shikome",
        level: 7,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Rs",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Poisma, Skewer, Evil Touch, Sukunda(9), Mudo(10), Ghastly Wail(11)",
        notes: "Bad Stat"
    },
    {
        arcana: "Hierophant",
        name_jp: "オモイカネ",
        name: "Omoikane",
        level: 7,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Wk",
            electric: "Rs",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Zio, Sukunda, Tarunda, Poison Mist(8), Resist Wind(9), Dodge Ice(10), Resist Poison(11), Resist Elec(12)",
        notes: "Elec"
    },
    {
        arcana: "Magician",
        name_jp: "オロバス",
        name: "Orobas",
        level: 8,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Agi, Hysterical Slap, Dekaja, Dodge Ice(10), Resist Dizzy(11), Sharp Student(12)",
        notes: "Fire"
    },
    {
        arcana: "Strength",
        name_jp: "ヴァルキリー",
        name: "Valkyrie",
        level: 8,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rs",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Bufu, Cleave, Rakunda, Media(10), Arm Chopper(11), Mabufu(12)",
        notes: "Ice"
    },
    {
        arcana: "Empress",
        name_jp: "センリ",
        name: "Senri",
        level: 9,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "-",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Dia, Makajam, Agi, Dekunda(10), Media(11), Trafuri(14)",
        notes: "Recovery"
    },
    {
        arcana: "Death",
        name_jp: "グール",
        name: "Ghoul",
        level: 9,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "-"
        },
        skills: "Bash, Poisma, Sukukaja(10), Enervation(11), Poisonous Skewer(12), Rakunda(13), Poison Boost(14)",
        notes: "Bad Stat"
    },
    {
        arcana: "Devil",
        name_jp: "リリム",
        name: "Lilim",
        level: 10,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Rs"
        },
        skills: "Zio, Mudo, Enervation, Enervate Boost(12), Sukukaja(13), Mamudo(15)",
        notes: "Dark"
    },
    {
        arcana: "Sun",
        name_jp: "カーシー",
        name: "Cu Sith",
        level: 10,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Garu, Pulinpa, Rakukaja, Growth 1(11), Magaru(13), White Wall(14), Traesto(15)",
        notes: "Wind"
    },
    {
        arcana: "Priestess",
        name_jp: "サキミタマ",
        name: "Saki Mitama",
        level: 11,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rs",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Dia, Bufu, Sukunda, Alertness(13), Media(14), Null Rage(16)",
        notes: "Recovery"
    },
    {
        arcana: "Justice",
        name_jp: "アークエンジェル",
        name: "Archangel",
        level: 11,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Wk"
        },
        skills: "Hama, Double Fangs, Patra, Media(12), Muzzle Shot(13), Sharp Student(14), Survive Dark(15)",
        notes: "Light"
    },
    {
        arcana: "Temperance",
        name_jp: "シルフ",
        name: "Sylph",
        level: 11,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Garu, Sukukaja, Me Patra, Regenerate 1(12), Media(13), Magaru(14)",
        notes: "Wind"
    },
    {
        arcana: "Emperor",
        name_jp: "オベロン",
        name: "Oberon",
        level: 12,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "-",
            electric: "Nu",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Zio, Arm Chopper, Makajam(13), Media(14), Elec Boost(15), Mazio(16), Dodge Wind(17)",
        notes: "Elec"
    },
    {
        arcana: "Chariot",
        name_jp: "エリゴール",
        name: "Eligor",
        level: 12,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "Rs"
        },
        skills: "Poisonous Skewer, Agi, Maragi(13), Arm Chopper(14), Fire Boost(15), Soul Break(16), Resist Exhaust(17)",
        notes: "Phys"
    },
    {
        arcana: "Fool",
        name_jp: "オバリヨン",
        name: "Obariyon",
        level: 13,
        modifiers: {
            physical: "Rs",
            fire: "Rs",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Sonic Punch, Tarukaja, Dekaja, Muzzle Shot(14), Silence Boost(15), Resist Physical(17), Single Shot(18)",
        notes: "Phys"
    },
    {
        arcana: "Strength",
        name_jp: "ティターン",
        name: "Titan",
        level: 14,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Wk",
            electric: "Rs",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Mazio, Skull Cracker, Dekunda, Dodge Ice(16), Kill Rush(18), Resist Fear(19)",
        notes: "Elec"
    },
    {
        arcana: "Death",
        name_jp: "モコイ",
        name: "Mokoi",
        level: 14,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Sonic Punch, Hysterical Slap, Dekaja, Valiant Dance(15), Rage Boost(16), Soul Break(18), Exhaust Boost(19)",
        notes: "Support"
    },
    {
        arcana: "Hierophant",
        name_jp: "アンズー",
        name: "Anzu",
        level: 15,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "Rs",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Garu, Balzac, Alertness, Magaru(17), Red Wall(18), Mahama(19), Auto-Sukukaja(20)",
        notes: "Wind"
    },
    {
        arcana: "Hanged Man",
        name_jp: "ベリス",
        name: "Berith",
        level: 15,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "-",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Single Shot, Mudo, Maragi(16), Mudo Boost(17), Green Wall(18), Brain Shake(19), Resist Confuse(20)",
        notes: "Phys"
    },
    {
        arcana: "Magician",
        name_jp: "ジャックフロスト",
        name: "Jack Frost",
        level: 16,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Mabufu, Ice Break, Me Patra, Ice Boost(18), Bufula(19), Dodge Fire(20), Mind Charge(25)",
        notes: "Ice"
    },
    {
        arcana: "Temperance",
        name_jp: "カイチ",
        name: "Xiezhai",
        level: 16,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Zio, Mazio, Rakunda, Makajam(17), Silence Boost(18), Rampage(19), Elec Boost(21)",
        notes: "Elec"
    },
    {
        arcana: "Priestess",
        name_jp: "サラスヴァティ",
        name: "Sarasvati",
        level: 17,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Nu",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Media, Mabufu, Patra, Invigorate 2(19), Resist Rage(20), Dekaja(21), Null Wind(23)",
        notes: "Recovery"
    },
    {
        arcana: "Hermit",
        name_jp: "イッポンダタラ",
        name: "Ippon-datara",
        level: 17,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Mudo, Maragi, Mamudo(19), Agilao(20), Rampage(21), Mudo Boost(22)",
        notes: "Dark"
    },
    {
        arcana: "Empress",
        name_jp: "ヤクシニー",
        name: "Yaksini",
        level: 18,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "-",
            wind: "-",
            light: "Rs",
            dark: "-"
        },
        skills: "Mabufu, Rakunda, Swift Strike(20), Ice Boost(21), Bufula(22), Auto-Tarukaja(23)",
        notes: "Ice"
    },
    {
        arcana: "Chariot",
        name_jp: "アラミタマ",
        name: "Ara Mitama",
        level: 18,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Assault Dive, Rakunda, Tarukaja(20), Sharp Student(21), Blue Wall(22), Dodge Elec(23)",
        notes: "Phys"
    },
    {
        arcana: "Justice",
        name_jp: "プリンシパリティ",
        name: "Principality",
        level: 19,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Wk"
        },
        skills: "Hama, Twin Shot, Mahama(21), Media(22), Resist Confuse(23), Survive Dark(24), Tetraja(25)",
        notes: "Light"
    },
    {
        arcana: "Devil",
        name_jp: "ヴェータラ",
        name: "Vetala",
        level: 19,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "Rs",
            light: "-",
            dark: "Rs"
        },
        skills: "Foolish Whisper, Evil Touch, Life Drain(20), Foul Breath(21), Brain Shake(22), Ghastly Wail(23), Fear Boost(24)",
        notes: "Bad Stat"
    },
    {
        arcana: "Moon",
        name_jp: "アンドラス",
        name: "Andras",
        level: 20,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Media, Mazio, Sukukaja, Blue Wall(22), Regenerate 2(23), Zionga(24), Dodge Wind(25)",
        notes: "Recovery"
    },
    {
        arcana: "Sun",
        name_jp: "ホウオウ",
        name: "Phoenix",
        level: 20,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Wk",
            electric: "Nu",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Garula, Maragi, Twin Shot(22), Growth 1(23), Dodge Ice(25), Fire Boost(26), Maragion(27)",
        notes: "Wind"
    },
    {
        arcana: "Fool",
        name_jp: "レギオン",
        name: "Legion",
        level: 21,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "Rs",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Rs"
        },
        skills: "Tentarafoo, Mudo, Evil Smile, Rampage(23), Confuse Boost(24), Foul Breath(25), Survive Light(26)",
        notes: "Bad Stat"
    },
    {
        arcana: "Hierophant",
        name_jp: "シーサー",
        name: "Shiisaa",
        level: 21,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Rs",
            electric: "Nu",
            wind: "-",
            light: "-",
            dark: "Wk"
        },
        skills: "Mazio, Balzac, Rakukaja(22), Zionga(23), Silence Boost(24), Resist Fire(25), Null Rage(26)",
        notes: "Elec"
    },
    {
        arcana: "Priestess",
        name_jp: "ハイピクシー",
        name: "High Pixie",
        level: 22,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Wk",
            electric: "Nu",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Mazio, Sukukaja, Me Patra, Zionga(24), Invigorate 1(25), Dodge Fire(26), Trafuri(27)",
        notes: "Elec"
    },
    {
        arcana: "Emperor",
        name_jp: "キングフロスト",
        name: "King Frost",
        level: 22,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Bufula, Mabufu, Ice Break, Rakukaja(23), Dodge Fire(24), Ice Boost(26), Null Fire(27), Anima Freeze(28)",
        notes: "Ice"
    },
    {
        arcana: "Hanged Man",
        name_jp: "ヨモツイクサ",
        name: "Yomotsu-ikusa",
        level: 22,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Rs",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Nu"
        },
        skills: "Cell Breaker, Mabufu, Enervate Boost(24), Foul Breath(25), Poison Mist(26), Poison Boost(27)",
        notes: "Bad Stat"
    },
    {
        arcana: "Strength",
        name_jp: "ラクシャーサ",
        name: "Rakshasa",
        level: 23,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Kill Rush, Brain Shake, Counter, Gale Slash(25), Auto-Tarukaja(26), Dodge Physical(27), Power Charge(28)",
        notes: "Phys"
    },
    {
        arcana: "Temperance",
        name_jp: "ニギミタマ",
        name: "Nigi Mitama",
        level: 23,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Diarama, Me Patra, Re Patra, Recarm(25), Invigorate 2(26), Garula(28), Resist Enervate(29)",
        notes: "Recovery"
    },
    {
        arcana: "Death",
        name_jp: "マタドール",
        name: "Matador",
        level: 24,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Rf"
        },
        skills: "Mamudo, Swift Strike, Dekunda, Mudo Boost(26), Rampage(27), Auto-Sukukaja(29), Survive Light(30)",
        notes: "Phys"
    },
    {
        arcana: "Star",
        name_jp: "キウン",
        name: "Kaiwan",
        level: 24,
        modifiers: {
            physical: "Wk",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Nu"
        },
        skills: "Tetrakarn, Cell Breaker, Mamudo, Stagnant Air(26), Resist Light(27), Life Drain(28), Spirit Drain(29)",
        notes: "Support"
    },
    {
        arcana: "Magician",
        name_jp: "カハク",
        name: "Hua Po",
        level: 25,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Agilao, Rakukaja, Re Patra, Fire Break(26), Makajam(27), Dodge Ice(29), Fire Boost(30)",
        notes: "Fire"
    },
    {
        arcana: "Lovers",
        name_jp: "クイーンメイブ",
        name: "Queen Mab",
        level: 25,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Zionga, Tentarafoo, Dekunda, Recarm(26), Dodge Wind(27), Mazionga(29), Resist Confuse(30)",
        notes: "Elec"
    },
    {
        arcana: "Chariot",
        name_jp: "アレス",
        name: "Ares",
        level: 25,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "Wk",
            light: "Nu",
            dark: "-"
        },
        skills: "Gale Slash, Counter, Dodge Wind(27), Rampage(28), Dekaja(29), Power Charge(30)",
        notes: "Phys"
    },
    {
        arcana: "Empress",
        name_jp: "ティターニア",
        name: "Titania",
        level: 26,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Diarama, Magaru, Red Wall(27), Garula(29), Regenerate 2(31), Mind Charge(32)",
        notes: "Ice"
    },
    {
        arcana: "Hermit",
        name_jp: "ラミア",
        name: "Lamia",
        level: 26,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "-",
            electric: "Rs",
            wind: "-",
            light: "-",
            dark: "Nu"
        },
        skills: "Poison Mist, Agilao, Nervundi, Poison Boost(28), Null Poison(29), Soul Break(30), Maragion(32)",
        notes: "Bad Stat"
    },
    {
        arcana: "Justice",
        name_jp: "パワー",
        name: "Power",
        level: 27,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "-",
            electric: "Wk",
            wind: "Nu",
            light: "-",
            dark: "Wk"
        },
        skills: "Hama, Tentarafoo, Mahama, Zionga(29), Power Slash(30), Hama Boost(31), Survive Dark(32), Null Confuse(33)",
        notes: "Light"
    },
    {
        arcana: "Hanged Man",
        name_jp: "マカミ",
        name: "Makami",
        level: 27,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "Wk",
            electric: "-",
            wind: "Rs",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Agilao, Sukunda, Auto-Sukukaja(29), Diarama(30), Resist Silence(31), Dodge Physical(32), Resist Ice(33)",
        notes: "Fire"
    },
    {
        arcana: "Moon",
        name_jp: "ノズチ",
        name: "Nozuchi",
        level: 27,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Wk",
            electric: "Rf",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Poison Mist, Enervation, Ailment Boost, Zionga(29), Rakukaja(30), Null Poison(31), Null Enervate(32)",
        notes: "Bad Stat"
    },
    {
        arcana: "Strength",
        name_jp: "クシミタマ",
        name: "Kusi Mitama",
        level: 28,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Garula, Zionga, Soul Break, Survive Light(31), Survive Dark(32), Traesto(33), Exhaust Boost(34)",
        notes: "Wind"
    },
    {
        arcana: "Devil",
        name_jp: "インキュバス",
        name: "Incubus",
        level: 28,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Agilao, Evil Smile, Mind Slice, Stagnant Air(30), Spirit Drain(32), Ghastly Wail(33)",
        notes: "Bad Stat"
    },
    {
        arcana: "Priestess",
        name_jp: "ガンガー",
        name: "Ganga",
        level: 29,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Wk"
        },
        skills: "Bufula, Diarama, Dekaja, Mind Slice(31), Confuse Boost(32), Mediarama(33), Evade Fire(35)",
        notes: "Ice"
    },
    {
        arcana: "Hierophant",
        name_jp: "ユニコーン",
        name: "Unicorn",
        level: 29,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Nu",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "Wk"
        },
        skills: "Zionga, Mahama, Nervundi, Dekunda(31), Trafuri(32), Recarm(33), Mazionga(34)",
        notes: "Elec"
    },
    {
        arcana: "Strength",
        name_jp: "オニ",
        name: "Oni",
        level: 30,
        modifiers: {
            physical: "Rs",
            fire: "Nu",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Fatal End, Counter, Cruel Attack, Atom Smasher(32), Resist Physical(33), Endure(34), Power Charge(35)",
        notes: "Phys"
    },
    {
        arcana: "Fool",
        name_jp: "オセ",
        name: "Ose",
        level: 31,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "Nu",
            light: "Wk",
            dark: "-"
        },
        skills: "Power Slash, Atom Smasher, Power Charge, Poison Mist(33), Poison Boost(34), Auto-Sukukaja(35), Survive Light(36)",
        notes: "Phys"
    },
    {
        arcana: "Temperance",
        name_jp: "ミトラ",
        name: "Mithra",
        level: 31,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Nu",
            electric: "Wk",
            wind: "-",
            light: "Nu",
            dark: "-"
        },
        skills: "Mahama, Seal Bomb, Tetra Break(33), Hamaon(34), Dodge Elec(35), Hama Boost(36), Null Silence(37)",
        notes: "Light"
    },
    {
        arcana: "Sun",
        name_jp: "ドゥン",
        name: "Gdon",
        level: 31,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Agilao, Maragi, Fire Break, Growth 2(33), Maragion(34), Fire Boost(35), Evade Ice(36)",
        notes: "Fire"
    },
    {
        arcana: "Magician",
        name_jp: "ジャックランタン",
        name: "Pyro Jack",
        level: 32,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Agilao, Tarunda, Marakukaja(34), Maragion(36), Auto-Rakukaja(37), Resist Ice(38)",
        notes: "Fire"
    },
    {
        arcana: "Star",
        name_jp: "ネコショウグン",
        name: "Neko Shogun",
        level: 32,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "-",
            electric: "Rf",
            wind: "Wk",
            light: "Nu",
            dark: "Nu"
        },
        skills: "Zionga, Elec Boost, Black Spot, Mediarama(34), Matarukaja(35), Evade Wind(36), Divine Grace(37)",
        notes: "Support"
    },
    {
        arcana: "Lovers",
        name_jp: "ウンディーネ",
        name: "Undine",
        level: 33,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Diarama, Bufula, Posumudi, Mabufula(34), Mediarama(36), Ice Boost(37)",
        notes: "Recovery"
    },
    {
        arcana: "Justice",
        name_jp: "ヴァーチャー",
        name: "Virtue",
        level: 33,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Wk",
            electric: "Nu",
            wind: "-",
            light: "Nu",
            dark: "Wk"
        },
        skills: "Mahama, Garula, Posumudi, Fatal End(35), Blue Wall(37), Hama Boost(38), Resist Dark(39)",
        notes: "Light"
    },
    {
        arcana: "Hermit",
        name_jp: "モスマン",
        name: "Mothman",
        level: 33,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "Wk",
            electric: "Rf",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Zionga, Valiant Dance, Foul Breath(35), Elec Break(36), Mazionga(37), Rage Boost(38)",
        notes: "Elec"
    },
    {
        arcana: "Empress",
        name_jp: "ゴルゴン",
        name: "Gorgon",
        level: 34,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Nu",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "-"
        },
        skills: "Bufula, Me Patra, Crazy Chain(35), Null Confuse(36), Mabufula(38), Ice Boost(39)",
        notes: "Ice"
    },
    {
        arcana: "Emperor",
        name_jp: "セタンタ",
        name: "Setanta",
        level: 34,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "Nu",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Fatal End, Zionga, Sharp Student, Counterstrike(36), Power Charge(38), Auto-Maraku(39), Null Fire(40)",
        notes: "Elec"
    },
    {
        arcana: "Moon",
        name_jp: "ヤマタノオロチ",
        name: "Yamata-no-Orochi",
        level: 34,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "Nu",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Mabufula, Garula, Red Wall, Green Wall(36), Resist Enervate(38), Ice Boost(39)",
        notes: "Ice"
    },
    {
        arcana: "Fortune",
        name_jp: "フォルトゥナ",
        name: "Fortuna",
        level: 35,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "-",
            electric: "Wk",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Garula, Rakukaja, Dodge Elec(37), Magarula(38), Auto-Sukukaja(39), Wind Boost(40)",
        notes: "Wind"
    },
    {
        arcana: "Tower",
        name_jp: "トウテツ",
        name: "Tao Tie",
        level: 35,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Rf"
        },
        skills: "Megido, Mind Slice, Dekunda, Confuse Boost(37), Mind Charge(38), Null Enervate(40), Torrent Shot(41)",
        notes: "Almighty"
    },
    {
        arcana: "Hierophant",
        name_jp: "フラロウス",
        name: "Flauros",
        level: 36,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "Wk",
            electric: "-",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Fatal End, Tarukaja, Agilao, Herculean Strike(38), Apt Pupil(39), Dodge Ice(40), Crazy Chain(41)",
        notes: "Phys"
    },
    {
        arcana: "Death",
        name_jp: "サマエル",
        name: "Samael",
        level: 36,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rs",
            electric: "Nu",
            wind: "Wk",
            light: "-",
            dark: "Nu"
        },
        skills: "Mudoon, Matarunda, Poison Mist, Dekunda(38), Megido(39), Mudo Boost(40), Survive Light(41)",
        notes: "Dark"
    },
    {
        arcana: "Priestess",
        name_jp: "パールヴァティ",
        name: "Parvati",
        level: 37,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Diarama, Nervundi, Mediarama(39), Marakukaja(40), Dodge Elec(41), Divine Grace(43)",
        notes: "Recovery"
    },
    {
        arcana: "Devil",
        name_jp: "パズス",
        name: "Pazuzu",
        level: 37,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rf",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "-"
        },
        skills: "Mudoon, Rakukaja, Bufula, Stagnant Air(39), Ailment Boost(40), Navas Nebula(41), Cool Breeze(42)",
        notes: "Dark"
    },
    {
        arcana: "Fool",
        name_jp: "ジャアクフロスト",
        name: "Black Frost",
        level: 38,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "Ab",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Rf"
        },
        skills: "Maragion, Bufula, Ice Boost, Mind Charge(40), Masukunda(41), Fire Amp(42), Agidyne(43), Mudoon(44)",
        notes: "Dark"
    },
    {
        arcana: "Justice",
        name_jp: "ドミニオン",
        name: "Dominion",
        level: 38,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Wk",
            light: "Rf",
            dark: "Wk"
        },
        skills: "Hamaon, Zionga, Hama Boost(40), Resist Exhaust(41), Mazionga(42), Survive Dark(43), Null Dark(44)",
        notes: "Light"
    },
    {
        arcana: "Magician",
        name_jp: "ディース",
        name: "Dis",
        level: 39,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Maragion, Diarama, Dekunda, Dodge Ice(41), Masukunda(42), Agidyne(43), Mind Charge(44)",
        notes: "Fire"
    },
    {
        arcana: "Hanged Man",
        name_jp: "オルトロス",
        name: "Orthrus",
        level: 39,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Agilao, Black Spot, Marakukaja(41), Fire Boost(42), Maragion(44), Null Ice(45)",
        notes: "Fire"
    },
    {
        arcana: "Temperance",
        name_jp: "ゲンブ",
        name: "Genbu",
        level: 40,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Nu",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Mabufula, Marakukaja, Regenerate 2(42), Makara Break(43), Blue Wall(44), Resist Physical(45), Evade Elec(46)",
        notes: "Ice"
    },
    {
        arcana: "Sun",
        name_jp: "ヤタガラス",
        name: "Yatagarasu",
        level: 40,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Wk",
            electric: "-",
            wind: "Rs",
            light: "Nu",
            dark: "-"
        },
        skills: "Masukukaja, Nervundi, Agilao, Null Fear(43), Growth 2(44), Diarahan(45), Cool Breeze(46)",
        notes: "Support"
    },
    {
        arcana: "Emperor",
        name_jp: "オオクニヌシ",
        name: "Oukuninushi",
        level: 41,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Rf",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Zionga, Blade of Fury, Counterstrike(43), Mazionga(44), Apt Pupil(45), Elec Boost(46), Null Wind(47)",
        notes: "Elec"
    },
    {
        arcana: "Hermit",
        name_jp: "ヒトコトヌシ",
        name: "Hitokoto-Nushi",
        level: 41,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "-",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Foolish Whisper, Auto-Sukukaja, Poison Arrow, Zionga(43), Resist Fire(45), Elec Boost(46), Auto-Masuku(47)",
        notes: "Bad Stat"
    },
    {
        arcana: "Moon",
        name_jp: "アルラウネ",
        name: "Alraune",
        level: 41,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "Rs",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "Nu"
        },
        skills: "Mediarama, Energy Shower, Old One, Makarakarn(43), Green Wall(44), Null Enervate(45), Enervate Boost(46)",
        notes: "Recovery"
    },
    {
        arcana: "Lovers",
        name_jp: "リャナンシー",
        name: "Leanan Sidhe",
        level: 42,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "-",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Mediarama, Me Patra, Tentarafoo(43), Confuse Boost(44), Energy Shower(45), Samarecarm(46), Divine Grace(47)",
        notes: "Recovery"
    },
    {
        arcana: "Strength",
        name_jp: "ハヌマーン",
        name: "Hanuman",
        level: 42,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "Nu",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Mighty Swing, Rakunda, Recarm, Blade of Fury(44), Dodge Wind(46), Endure(47), Power Charge(48)",
        notes: "Phys"
    },
    {
        arcana: "Chariot",
        name_jp: "トリグラフ",
        name: "Triglav",
        level: 43,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Heat Wave, Counterstrike, Marakukaja(45), Mustard Bomb(46), Null Dizzy(47), Blue Wall(48), Power Charge(49)",
        notes: "Phys"
    },
    {
        arcana: "Star",
        name_jp: "フウキ",
        name: "Fuu-ki",
        level: 43,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Garula, Torrent Shot, Counterstrike, Evade Fire(45), Apt Pupil(46), Wind Boost(47), Null Exhaust(49)",
        notes: "Wind"
    },
    {
        arcana: "Empress",
        name_jp: "ガブリエル",
        name: "Gabriel",
        level: 44,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Wk"
        },
        skills: "Mabufula, Mediarama, Energy Shower(45), Survive Dark(47), Heat Wave(48), Divine Grace(50)",
        notes: "Ice"
    },
    {
        arcana: "Fortune",
        name_jp: "クロト",
        name: "Clotho",
        level: 44,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "Rf",
            light: "-",
            dark: "-"
        },
        skills: "Magarula, Mutudi, Navas Nebula(45), Makarakarn(47), Wind Boost(48), Garudyne(49), Null Enervate(50)",
        notes: "Wind"
    },
    {
        arcana: "Devil",
        name_jp: "サキュバス",
        name: "Succubus",
        level: 44,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Agilao, Mudoon, Maragion(46), Mudo Boost(47), Spirit Drain(48), Resist Light(49), Invigorate 3(50)",
        notes: "Bad Stat"
    },
    {
        arcana: "Emperor",
        name_jp: "トート",
        name: "Thoth",
        level: 45,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Wk",
            light: "Rf",
            dark: "Wk"
        },
        skills: "Mazionga, Mahama, Megido, Mediarama(47), Growth 2(48), Null Silence(49), Ziodyne(51)",
        notes: "Elec"
    },
    {
        arcana: "Hierophant",
        name_jp: "ホクトセイクン",
        name: "Hokuto Seikun",
        level: 45,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "Rf",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Zionga, Elec Boost, Navas Nebula, Blade of Fury(47), Resist Exhaust(48), Counterstrike(50), Ziodyne(51)",
        notes: "Elec"
    },
    {
        arcana: "Fool",
        name_jp: "デカラビア",
        name: "Decarabia",
        level: 46,
        modifiers: {
            physical: "Wk",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Rs",
            light: "Nu",
            dark: "-"
        },
        skills: "Agidyne, Matarunda, Tetrakarn, Evade Physical(48), Megidola(50), Fire Amp(51), Resist Physical(52)",
        notes: "Fire"
    },
    {
        arcana: "Death",
        name_jp: "モト",
        name: "Mot",
        level: 46,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Wk",
            light: "-",
            dark: "Rf"
        },
        skills: "Mudoon, Evil Smile, Tentarafoo, Survive Light(48), Ghastly Wail(49), Mudo Boost(50)",
        notes: "Dark"
    },
    {
        arcana: "Tower",
        name_jp: "クー・フーリン",
        name: "Cu Chulainn",
        level: 46,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "Wk",
            electric: "-",
            wind: "Rf",
            light: "-",
            dark: "-"
        },
        skills: "Magarula, Deathbound, Matarukaja(47), Mind Charge(48), White Wall(49), Endure Dark(50), Garudyne(51), Wind Amp(53)",
        notes: "Wind"
    },
    {
        arcana: "Magician",
        name_jp: "ランダ",
        name: "Rangda",
        level: 47,
        modifiers: {
            physical: "Rf",
            fire: "-",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Maragion, Tentarafoo, Agidyne(49), Dodge Ice(50), Mustard Bomb(51), Repel Physical(55)",
        notes: "Fire"
    },
    {
        arcana: "Temperance",
        name_jp: "セイリュウ",
        name: "Seiryu",
        level: 47,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Mazionga, Matarunda, Ziodyne(49), Poison Mist(50), Elec Break(51), Elec Boost(52), Resist Exhaust(53)",
        notes: "Ice"
    },
    {
        arcana: "Sun",
        name_jp: "ナラシンハ",
        name: "Narasimha",
        level: 47,
        modifiers: {
            physical: "Rs",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "-"
        },
        skills: "Hamaon, Tempest Slash, Counterstrike(48), Evade Wind(49), Mahamaon(51), Auto-Mataru(53)",
        notes: "Light"
    },
    {
        arcana: "Priestess",
        name_jp: "キクリヒメ",
        name: "Kikuri-hime",
        level: 48,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "-",
            electric: "Rs",
            wind: "-",
            light: "-",
            dark: "Wk"
        },
        skills: "Mediarama, Posumudi, Agilao, Samarecarm(50), Diarahan(52), Resist Dark(53), Divine Grace(54)",
        notes: "Recovery"
    },
    {
        arcana: "Hermit",
        name_jp: "クラマテング",
        name: "Kurama Tengu",
        level: 48,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "-",
            electric: "Wk",
            wind: "Ab",
            light: "-",
            dark: "-"
        },
        skills: "Garula, Masukunda, Vicious Strike, Growth 2(50), Wind Boost(51), Red Wall(52), Resist Elec(53)",
        notes: "Wind"
    },
    {
        arcana: "Moon",
        name_jp: "ギリメカラ",
        name: "Girimehkala",
        level: 48,
        modifiers: {
            physical: "Rf",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Wk"
        },
        skills: "Power Charge, Mighty Swing, Poison Mist, Mamudoon(50), Blight(51), Tetraja(52), Endure Light(53), Repel Physical(56)",
        notes: "Support"
    },
    {
        arcana: "Justice",
        name_jp: "ソロネ",
        name: "Throne",
        level: 49,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Wk"
        },
        skills: "Hamaon, Agidyne, Hama Boost, Mind Charge(51), Regenerate 2(53), Resist Dark(54), Endure Dark(55)",
        notes: "Light"
    },
    {
        arcana: "Hanged Man",
        name_jp: "ヤツフサ",
        name: "Yatsufusa",
        level: 49,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "-",
            electric: "-",
            wind: "Rf",
            light: "Nu",
            dark: "-"
        },
        skills: "Agidyne, Masukukaja, Fire Boost, Heat Wave(51), Power Charge(52), Dodge Physical(53), Maragidyne(54), Mind Charge(55)",
        notes: "Fire"
    },
    {
        arcana: "Strength",
        name_jp: "カーリー",
        name: "Kali",
        level: 50,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Nu",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "Nu"
        },
        skills: "Bufudyne, Mudoon, Deathbound(52), Revolution(53), High Counter(54), Power Charge(55)",
        notes: "Ice"
    },
    {
        arcana: "Star",
        name_jp: "ガネーシャ",
        name: "Ganesha",
        level: 50,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Garudyne, Mustard Bomb, Makarakarn, Power Charge(52), High Counter(54), Endure(55), Magarudyne(56)",
        notes: "Wind"
    },
    {
        arcana: "Emperor",
        name_jp: "パピルサグ",
        name: "Pabilsag",
        level: 51,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Rf"
        },
        skills: "Blight, Foolish Whisper, Stagnant Air(53), Silence Boost(54), Mudoon(55), Arrow Rain(56)",
        notes: "Phys"
    },
    {
        arcana: "Fortune",
        name_jp: "ラケシス",
        name: "Lachesis",
        level: 51,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rs",
            electric: "Wk",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Garudyne, Masukukaja, Recarm(53), Makara Break(54), Absorb Wind(55), Red Wall(56), Resist Exhaust(57)",
        notes: "Wind"
    },
    {
        arcana: "Empress",
        name_jp: "スカディ",
        name: "Skadi",
        level: 52,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "-",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Mabufula, Aeon Rain, Bufudyne(54), Ice Amp(56), Repel Ice(57), Repel Fire(59), Spell Master(60)",
        notes: "Ice"
    },
    {
        arcana: "Hierophant",
        name_jp: "ケルベロス",
        name: "Cerberus",
        level: 52,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Agidyne, Gigantic Fist, Vicious Strike(53), Maragidyne(54), Regenerate 2(55), Fire Amp(57), Auto-Sukukaja(58)",
        notes: "Fire"
    },
    {
        arcana: "Lovers",
        name_jp: "ラファエル",
        name: "Raphael",
        level: 53,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rf",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Wk"
        },
        skills: "Diarahan, Megidola, Masukukaja(55), Amrita(56), Null Dizzy(57), Mediarahan(59)",
        notes: "Recovery"
    },
    {
        arcana: "Devil",
        name_jp: "リリス",
        name: "Lilith",
        level: 53,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Rf",
            wind: "-",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Ziodyne, Makarakarn, Old One(54), Maziodyne(55), Elec Break(56), Ailment Boost(57)",
        notes: "Elec"
    },
    {
        arcana: "Sun",
        name_jp: "タムリン",
        name: "Tam Lin",
        level: 53,
        modifiers: {
            physical: "Rs",
            fire: "Rs",
            ice: "-",
            electric: "Nu",
            wind: "-",
            light: "Nu",
            dark: "-"
        },
        skills: "Ziodyne, Deathbound, High Counter, Auto-Maraku(54), Power Charge(55), Elec Amp(56), Evade Physical(58), Enduring Soul(59)",
        notes: "Phys"
    },
    {
        arcana: "Chariot",
        name_jp: "キンキ",
        name: "Kin-ki",
        level: 54,
        modifiers: {
            physical: "Nu",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Vile Assault, High Counter, Gigantic Fist(56), Seal Bomb(57), Revolution(59), Power Charge(60)",
        notes: "Phys"
    },
    {
        arcana: "Temperance",
        name_jp: "スザク",
        name: "Suzaku",
        level: 54,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Maragion, Energy Shower, Masukukaja(55), Agidyne(56), Resist Ice(58), Fire Amp(59), Auto-Masuku(60)",
        notes: "Fire"
    },
    {
        arcana: "Hermit",
        name_jp: "ニーズホッグ",
        name: "Nidhoggr",
        level: 55,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Mamudoon, Evil Smile, Ghastly Wail(57), Bufudyne(58), Stagnant Air(59), Resist Physical(60), Ice Boost(61)",
        notes: "Dark"
    },
    {
        arcana: "Tower",
        name_jp: "アバドン",
        name: "Abaddon",
        level: 55,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "Rs",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Rf"
        },
        skills: "Old One, Mudoon, Arrow Rain, Agidyne(56), Endure Light(57), Tetra Break(60), Null Physical(62)",
        notes: "Bad Stat"
    },
    {
        arcana: "Fool",
        name_jp: "シキオウジ",
        name: "Shiki-Ouji",
        level: 56,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "Nu",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Navas Nebula, Matarunda, Revolution, Apt Pupil(58), Growth 2(59), Null Physical(62)",
        notes: "Fire"
    },
    {
        arcana: "Hanged Man",
        name_jp: "トウコツ",
        name: "Taowu",
        level: 56,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "Nu",
            wind: "-",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Aeon Rain, Dekaja, Matarukaja, Null Enervate(58), Power Charge(60), Evade Physical(61), Absorb Fire(62)",
        notes: "Recovery"
    },
    {
        arcana: "Star",
        name_jp: "ガルーダ",
        name: "Garuda",
        level: 57,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "Rf",
            light: "Rf",
            dark: "-"
        },
        skills: "Diarama, Garudyne, Arrow Rain, Amrita(60), High Counter(61), Repel Wind(62), Auto-Sukukaja(63)",
        notes: "Recovery"
    },
    {
        arcana: "Moon",
        name_jp: "スイキ",
        name: "Sui-ki",
        level: 57,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "Rf",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Bufudyne, Power Charge, Vicious Strike, Regenerate 2(59), Tetra Break(60), Enduring Soul(62)",
        notes: "Ice"
    },
    {
        arcana: "Justice",
        name_jp: "ウリエル",
        name: "Uriel",
        level: 58,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Wk"
        },
        skills: "Maragion, Hamaon, High Counter(60), Agidyne(61), Endure Dark(62), Fire Amp(63), Null Dark(64)",
        notes: "Fire"
    },
    {
        arcana: "Fortune",
        name_jp: "アナンタ",
        name: "Ananta",
        level: 58,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "Ab",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Mabufula, White Wall, Marakukaja(59), Bufudyne(61), Green Wall(62), Invigorate 3(63), Null Exhaust(64)",
        notes: "Phys"
    },
    {
        arcana: "Death",
        name_jp: "ホワイトライダー",
        name: "White Rider",
        level: 58,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Rf"
        },
        skills: "Mudoon, Hamaon, Agidyne(60), Evade Ice(62), Mahamaon(63), Mamudoon(65), Hama Boost(66), Mudo Boost(67)",
        notes: "Dark"
    },
    {
        arcana: "Priestess",
        name_jp: "ハリティー",
        name: "Hariti",
        level: 59,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Nu",
            electric: "Wk",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Diarahan, Bufudyne, Marakukaja, Mediarahan(61), Arrow Rain(62), Samarecarm(64)",
        notes: "Recovery"
    },
    {
        arcana: "Judgement",
        name_jp: "アヌビス",
        name: "Anubis",
        level: 59,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "-"
        },
        skills: "Hamaon, Makarakarn, Mudoon, Poison Arrow(60), Mustard Bomb(61), Megidola(62), Mahamaon(64), Hama Boost(65)",
        notes: "Light"
    },
    {
        arcana: "Empress",
        name_jp: "マザーハーロット",
        name: "Mother Harlot",
        level: 60,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rs",
            electric: "Rf",
            wind: "Wk",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Maziodyne, Mamudoon, Mudo Boost(62), Foolish Whisper(63), Resist Fire(64), Ailment Boost(65)",
        notes: "Elec"
    },
    {
        arcana: "Hierophant",
        name_jp: "だいそうじょう",
        name: "Daisoujou",
        level: 60,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Wk"
        },
        skills: "Hamaon, Diarahan, Makarakarn, Agidyne(62), Endure Dark(63), Mahamaon(64), Hama Boost(65), Samsara(67)",
        notes: "Light"
    },
    {
        arcana: "Devil",
        name_jp: "ベルフェゴール",
        name: "Belphegor",
        level: 61,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Ab",
            wind: "-",
            light: "Wk",
            dark: "Rf"
        },
        skills: "Maziodyne, Evil Smile, Marakunda(63), Fear Boost(64), Old One(65), Enervate Boost(66), Elec Amp(67)",
        notes: "Elec"
    },
    {
        arcana: "Sun",
        name_jp: "ジャターユ",
        name: "Jatayu",
        level: 61,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "Ab",
            light: "-",
            dark: "-"
        },
        skills: "Garudyne, Null Confuse, Amrita(62), Growth 3(64), Repel Elec(65), Magarudyne(66)",
        notes: "Wind"
    },
    {
        arcana: "Magician",
        name_jp: "ジン",
        name: "Jinn",
        level: 62,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "-",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Agidyne, Foolish Whisper, Resist Physical(65), Fire Boost(66), Null Physical(67), Valiant Dance(68)",
        notes: "Fire"
    },
    {
        arcana: "Temperance",
        name_jp: "ビャッコ",
        name: "Byakko",
        level: 62,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "Nu",
            wind: "-",
            light: "Nu",
            dark: "-"
        },
        skills: "Bufudyne, Deathbound, High Counter, Auto-Sukukaja(64), Amrita(66), Ice Amp(67), Mabufudyne(68)",
        notes: "Ice"
    },
    {
        arcana: "Tower",
        name_jp: "マーラ",
        name: "Mara",
        level: 62,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "-",
            electric: "-",
            wind: "Rs",
            light: "Wk",
            dark: "Rf"
        },
        skills: "Agidyne, Blight, Power Charge(63), Makarakarn(64), Absorb Physical(66), Fire Amp(67)",
        notes: "Fire"
    },
    {
        arcana: "Hermit",
        name_jp: "ネビロス",
        name: "Nebiros",
        level: 63,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "-",
            electric: "Wk",
            wind: "Rs",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Mamudoon, Agidyne, Dekaja, Mind Charge(65), Mudo Boost(67), Null Light(69), Spell Master(70)",
        notes: "Bad Stat"
    },
    {
        arcana: "Strength",
        name_jp: "ジークフリード",
        name: "Siegfried",
        level: 63,
        modifiers: {
            physical: "Nu",
            fire: "-",
            ice: "Rs",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Akasha Arts, Power Charge, Masukukaja, High Counter(65), Regenerate 3(66), Rainy Death(68), God's Hand(70)",
        notes: "Phys"
    },
    {
        arcana: "Fool",
        name_jp: "ロキ",
        name: "Loki",
        level: 64,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Nu"
        },
        skills: "Bufudyne, Rakukaja, Sharp Student, Ice Amp(66), High Counter(67), Mabufudyne(68), Null Fire(69), Niflheim(70)",
        notes: "Ice"
    },
    {
        arcana: "Lovers",
        name_jp: "キュベレ",
        name: "Cybele",
        level: 64,
        modifiers: {
            physical: "-",
            fire: "Rs",
            ice: "Nu",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Mediarama, Vicious Strike, Recarm, Myriad Arrows(67), Samarecarm(68), Mediarahan(70)",
        notes: "Recovery"
    },
    {
        arcana: "Emperor",
        name_jp: "バロン",
        name: "Barong",
        level: 65,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Ziodyne, Poison Mist, Me Patra, Marakukaja(67), Invigorate 2(69), High Counter(71), Maziodyne(72)",
        notes: "Phys"
    },
    {
        arcana: "Chariot",
        name_jp: "トール",
        name: "Thor",
        level: 65,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "-",
            electric: "Ab",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Ziodyne, Deathbound, High Counter, Arms Master(67), Maziodyne(68), Null Physical(69), Thunder Reign(70)",
        notes: "Elec"
    },
    {
        arcana: "Fortune",
        name_jp: "アトロポス",
        name: "Atropos",
        level: 65,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "-",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Garudyne, Wind Boost, Mind Charge(67), Magarudyne(68), Evade Fire(69), Wind Amp(70)",
        notes: "Wind"
    },
    {
        arcana: "Justice",
        name_jp: "メルキセデク",
        name: "Melchizedek",
        level: 66,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Wk"
        },
        skills: "Mediarahan, Hamaon, Akasha Arts, Matarukaja(68), Mahamaon(69), God's Hand(72)",
        notes: "Recovery"
    },
    {
        arcana: "Hanged Man",
        name_jp: "ヘルズエンジェル",
        name: "Hell Biker",
        level: 66,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "-"
        },
        skills: "Agidyne, Aeon Rain, Endure(68), Mudoon(69), Maragidyne(70), Absorb Fire(71), Fire Amp(73)",
        notes: "Fire"
    },
    {
        arcana: "Star",
        name_jp: "カルティケーヤ",
        name: "Kartikeya",
        level: 67,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Rf",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Maziodyne, Auto-Mataru, High Counter(68), Myriad Arrows(69), Growth 2(70), Primal Force(75)",
        notes: "Elec"
    },
    {
        arcana: "Judgement",
        name_jp: "トランペッター",
        name: "Trumpeter",
        level: 67,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Ab",
            electric: "Rf",
            wind: "-",
            light: "Rf",
            dark: "Nu"
        },
        skills: "Megidola, Ziodyne, Elec Amp, Masukukaja(68), Cool Breeze(69), Megidolaon(70), Debilitate(73), Heat Riser(74)",
        notes: "Almighty"
    },
    {
        arcana: "Devil",
        name_jp: "ベリアル",
        name: "Belial",
        level: 68,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Rf"
        },
        skills: "Mudoon, Myriad Arrows, Agidyne(69), Endure Light(71), Fire Amp(72), Maragidyne(73)",
        notes: "Dark"
    },
    {
        arcana: "Moon",
        name_jp: "セト",
        name: "Seth",
        level: 68,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rf",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Magarudyne, Garudyne, Wind Break(71), Null Light(72), Wind Amp(73), Evade Elec(74)",
        notes: "Wind"
    },
    {
        arcana: "Sun",
        name_jp: "ホルス",
        name: "Horus",
        level: 68,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "Nu",
            wind: "-",
            light: "Rf",
            dark: "-"
        },
        skills: "Diarahan, Mahamaon, Magarudyne, Wind Amp(70), Matarukaja(71), Absorb Wind(73)",
        notes: "Recovery"
    },
    {
        arcana: "Magician",
        name_jp: "スルト",
        name: "Surt",
        level: 69,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "Wk",
            electric: "-",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Agidyne, Deathbound, High Counter, Maragidyne(71), Ragnarok(74), Fire Amp(75), Null Ice(76)",
        notes: "Fire"
    },
    {
        arcana: "Temperance",
        name_jp: "ユルング",
        name: "Yurlungur",
        level: 69,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "-",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Virus Wave, Bufudyne, Growth 3(71), Mediarahan(72), Samarecarm(74), Repel Light(75)",
        notes: "Bad Stat"
    },
    {
        arcana: "Tower",
        name_jp: "マサカド",
        name: "Masakado",
        level: 69,
        modifiers: {
            physical: "Nu",
            fire: "Nu",
            ice: "-",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "Wk"
        },
        skills: "Mahamaon, Tempest Slash, Myriad Arrows(71), Hama Boost(73), Arms Master(74), Enduring Soul(76)",
        notes: "Light"
    },
    {
        arcana: "Priestess",
        name_jp: "ツィツィミトル",
        name: "Tzitzimitl",
        level: 70,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Rf",
            wind: "Wk",
            light: "-",
            dark: "Nu"
        },
        skills: "Ziodyne, Virus Wave, Mustard Bomb, Silence Boost(71), Dekaja(72), Regenerate 3(73), Maziodyne(76), Repel Elec(77)",
        notes: "Elec"
    },
    {
        arcana: "Empress",
        name_jp: "アリラト",
        name: "Alilat",
        level: 70,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Nu",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Makarakarn, Mabufudyne, Regenerate 3(72), Evade Physical(73), Growth 2(74), Auto-Maraku(75)",
        notes: "Support"
    },
    {
        arcana: "Hierophant",
        name_jp: "ハチマン",
        name: "Hachiman",
        level: 70,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Nu",
            electric: "Nu",
            wind: "-",
            light: "-",
            dark: "Wk"
        },
        skills: "Maziodyne, Makarakarn, Matarukaja, Elec Break(72), Dekunda(74), Revolution(75)",
        notes: "Elec"
    },
    {
        arcana: "Lovers",
        name_jp: "イシュタル",
        name: "Ishtar",
        level: 71,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Wk",
            light: "-",
            dark: "-"
        },
        skills: "Mediarahan, Samarecarm, Mutudi, Maziodyne(72), Amrita(75), Spell Master(76), Absorb Wind(77), Salvation(78)",
        notes: "Recovery"
    },
    {
        arcana: "Hanged Man",
        name_jp: "ヴァスキ",
        name: "Vasuki",
        level: 71,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rs",
            electric: "Nu",
            wind: "-",
            light: "-",
            dark: "Wk"
        },
        skills: "Hamaon, Virus Wave, Null Poison(73), High Counter(74), Evade Wind(75), Mahamaon(76), Ziodyne(77)",
        notes: "Light"
    },
    {
        arcana: "Chariot",
        name_jp: "アタバク",
        name: "Atavaka",
        level: 72,
        modifiers: {
            physical: "Nu",
            fire: "-",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "-"
        },
        skills: "Mahamaon, Diarahan, Amrita, Brave Blade(76), Megidolaon(77), Mind Charge(78), Arms Master(81)",
        notes: "Light"
    },
    {
        arcana: "Fortune",
        name_jp: "ノルン",
        name: "Norn",
        level: 72,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rs",
            electric: "Wk",
            wind: "Ab",
            light: "-",
            dark: "-"
        },
        skills: "Magarudyne, Garudyne, Diarahan, Auto-Masuku(74), Invigorate 3(75), Wind Amp(76), Insta-Heal(77), Debilitate(79)",
        notes: "Wind"
    },
    {
        arcana: "Death",
        name_jp: "アリス",
        name: "Alice",
        level: 72,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Rf"
        },
        skills: "Mamudoon, Mudo Boost, Dekunda, Endure Light(75), Megidola(76), Mind Charge(77), Die for Me!(79)",
        notes: "Dark"
    },
    {
        arcana: "Judgement",
        name_jp: "ミカエル",
        name: "Michael",
        level: 72,
        modifiers: {
            physical: "Rs",
            fire: "Nu",
            ice: "-",
            electric: "-",
            wind: "Wk",
            light: "Nu",
            dark: "-"
        },
        skills: "Vorpal Blade, Megidola, Hamaon, Megidolaon(74), Mahamaon(75), Repel Dark(76), Heaven's Blade(79)",
        notes: "Phys"
    },
    {
        arcana: "Hermit",
        name_jp: "アラハバキ",
        name: "Arahabaki",
        level: 73,
        modifiers: {
            physical: "Rf",
            fire: "Wk",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "Nu"
        },
        skills: "Vicious Strike, Auto-Maraku, Null Fear, Alertness(74), Tetrakarn(76), Repel Physical(80)",
        notes: "Phys"
    },
    {
        arcana: "Temperance",
        name_jp: "ヴィシュヌ",
        name: "Vishnu",
        level: 73,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Nu",
            electric: "-",
            wind: "-",
            light: "Nu",
            dark: "-"
        },
        skills: "Megidolaon, Akasha Arts, Mabufudyne, Regenerate 3(75), God's Hand(76), Power Charge(78), Angelic Grace(79)",
        notes: "Almighty"
    },
    {
        arcana: "Emperor",
        name_jp: "オーディン",
        name: "Odin",
        level: 74,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "-",
            electric: "Nu",
            wind: "Ab",
            light: "-",
            dark: "-"
        },
        skills: "Ziodyne, Magarudyne, Wind Amp(76), Regenerate 3(77), Maziodyne(78), Mind Charge(80), Panta Rhei(81)",
        notes: "Elec"
    },
    {
        arcana: "Justice",
        name_jp: "スラオシャ",
        name: "Sraosha",
        level: 74,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Ab",
            wind: "-",
            light: "Rf",
            dark: "Wk"
        },
        skills: "Mahamaon, Brave Blade, Power Charge, Ziodyne(76), Hama Boost(78), Megidolaon(80), Angelic Grace(81)",
        notes: "Light"
    },
    {
        arcana: "Tower",
        name_jp: "ヨシツネ",
        name: "Yoshitsune",
        level: 75,
        modifiers: {
            physical: "Nu",
            fire: "Rs",
            ice: "-",
            electric: "Rf",
            wind: "-",
            light: "Rf",
            dark: "-"
        },
        skills: "Brave Blade, Power Charge, Ziodyne, Heat Riser(77), Repel Elec(78), Elec Amp(79), Hassou Tobi(83)",
        notes: "Phys"
    },
    {
        arcana: "Star",
        name_jp: "サトゥルヌス",
        name: "Saturnus",
        level: 75,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "Wk",
            electric: "-",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Agidyne, Maragidyne, Fire Amp, Evade Ice(77), Growth 3(79), Spell Master(81)",
        notes: "Fire"
    },
    {
        arcana: "Hierophant",
        name_jp: "コウリュウ",
        name: "Kohryu",
        level: 76,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Rf",
            wind: "-",
            light: "Nu",
            dark: "-"
        },
        skills: "Ziodyne, Mediarahan, Samarecarm, Maziodyne(78), Mind Charge(79), Elec Amp(80), Spell Master(82), Salvation(83)",
        notes: "Elec"
    },
    {
        arcana: "Judgement",
        name_jp: "サタン",
        name: "Satan",
        level: 76,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "-",
            electric: "-",
            wind: "Wk",
            light: "-",
            dark: "Rf"
        },
        skills: "Megidolaon, Maragion, Regenerate 3(77), Invigorate 3(78), Endure Light(80), Black Viper(81), Null Wind(82)",
        notes: "Almighty"
    },
    {
        arcana: "Moon",
        name_jp: "バアル・ゼブル",
        name: "Baal Zebul",
        level: 77,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Nu"
        },
        skills: "Mabufudyne, Mamudoon, Old One, Tentarafoo(78), Maziodyne(79), Mudo Boost(80), Stagnant Air(82)",
        notes: "Ice"
    },
    {
        arcana: "Sun",
        name_jp: "スパルナ",
        name: "Suparna",
        level: 77,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Wk",
            wind: "Ab",
            light: "-",
            dark: "-"
        },
        skills: "Garudyne, Makajam, Evade Ice(79), Wind Amp(80), Magarudyne(81), Evade Fire(82), Elec Amp(83)",
        notes: "Wind"
    },
    {
        arcana: "Magician",
        name_jp: "マダ",
        name: "Mada",
        level: 78,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "Wk",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Agidyne, Fire Boost, Foolish Whisper, Maragidyne(81), Evade Ice(82), Ailment Boost(83), Fire Amp(84)",
        notes: "Fire"
    },
    {
        arcana: "Death",
        name_jp: "マハカーラ",
        name: "Mahakala",
        level: 78,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "-",
            electric: "Rf",
            wind: "-",
            light: "-",
            dark: "Nu"
        },
        skills: "Agidyne, Myriad Arrows, Power Charge, Mind Charge(80), Maragidyne(82), Mamudoon(83), Fire Amp(84), Mudo Boost(85)",
        notes: "Phys"
    },
    {
        arcana: "Priestess",
        name_jp: "スカアハ",
        name: "Scathach",
        level: 79,
        modifiers: {
            physical: "-",
            fire: "Wk",
            ice: "Ab",
            electric: "-",
            wind: "Nu",
            light: "-",
            dark: "-"
        },
        skills: "Mabufudyne, Garudyne, Amrita(81), Magarudyne(82), Ice Amp(83), Wind Amp(84), Mind Charge(85)",
        notes: "Ice"
    },
    {
        arcana: "Empress",
        name_jp: "イシス",
        name: "Isis",
        level: 79,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Rf",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Mediarahan, Bufudyne, Tetrakarn, Cool Breeze(80), Absorb Ice(82), Mabufudyne(83), Salvation(85), Null Elec(86)",
        notes: "Recovery"
    },
    {
        arcana: "Chariot",
        name_jp: "フツヌシ",
        name: "Futsunushi",
        level: 80,
        modifiers: {
            physical: "Nu",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "-",
            dark: "Wk"
        },
        skills: "Primal Force, Power Charge, Matarukaja, Apt Pupil(82), Null Dizzy(83), Ali Dance(84), Arms Master(85), Firm Stance(86)",
        notes: "Phys"
    },
    {
        arcana: "Tower",
        name_jp: "シヴァ",
        name: "Shiva",
        level: 80,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "Ab",
            electric: "Rf",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Ziodyne, Magarudyne, Enduring Soul, Maziodyne(82), Spell Master(83), Megidolaon(84), Pralaya(87)",
        notes: "Elec"
    },
    {
        arcana: "Devil",
        name_jp: "ベルゼブブ",
        name: "Beelzebub",
        level: 81,
        modifiers: {
            physical: "-",
            fire: "Ab",
            ice: "Nu",
            electric: "Rf",
            wind: "-",
            light: "Wk",
            dark: "Rf"
        },
        skills: "Agidyne, Mabufudyne, Mind Charge, Primal Force(83), Mamudoon(84), Endure Light(85), Mudo Boost(86), Megidolaon(87)",
        notes: "Fire"
    },
    {
        arcana: "Hermit",
        name_jp: "オンギョウキ",
        name: "Ongyo-ki",
        level: 82,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "Nu",
            wind: "Ab",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Foolish Whisper, Ziodyne, Masukukaja, Ailment Boost(84), Elec Amp(85), Revolution(86), Firm Stance(87)",
        notes: "Phys"
    },
    {
        arcana: "Hanged Man",
        name_jp: "アティス",
        name: "Attis",
        level: 82,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "-",
            electric: "-",
            wind: "Rf",
            light: "-",
            dark: "Wk"
        },
        skills: "Agidyne, Amrita, Marakukaja, Enduring Soul(84), Samarecarm(86), Maragidyne(87), Mamudoon(88)",
        notes: "Fire"
    },
    {
        arcana: "Judgement",
        name_jp: "メタトロン",
        name: "Metatron",
        level: 83,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Rf",
            dark: "Wk"
        },
        skills: "Mahamaon, Heaven's Blade, Megidolaon(86), Repel Ice(87), Repel Elec(88), Repel Fire(89)",
        notes: "Light"
    },
    {
        arcana: "Moon",
        name_jp: "サンダルフォン",
        name: "Sandalphon",
        level: 84,
        modifiers: {
            physical: "-",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "Nu",
            light: "Rf",
            dark: "Wk"
        },
        skills: "Mahamaon, Samarecarm, Amrita, Angelic Grace(87), Agneyastra(88), Endure Dark(89), Repel Dark(90)",
        notes: "Light"
    },
    {
        arcana: "Sun",
        name_jp: "アスラおう",
        name: "Asura",
        level: 86,
        modifiers: {
            physical: "-",
            fire: "Nu",
            ice: "Rs",
            electric: "-",
            wind: "Wk",
            light: "Nu",
            dark: "-"
        },
        skills: "Maragidyne, Primal Force, Marakukaja, Mahamaon(88), High Counter(89), Spell Master(90), Unshaken Will(92)",
        notes: "Fire"
    },
    {
        arcana: "Star",
        name_jp: "ルシフェル",
        name: "Helel",
        level: 87,
        modifiers: {
            physical: "Rs",
            fire: "Nu",
            ice: "-",
            electric: "-",
            wind: "Wk",
            light: "Nu",
            dark: "Nu"
        },
        skills: "Megidolaon, Maragidyne, God's Hand, Salvation(88), Insta-Heal(90), Repel Wind(91), Arms Master(92), Morning Star(94)",
        notes: "Almighty"
    },
    {
        arcana: "Strength",
        name_jp: "ザオウゴンゲン",
        name: "Zaou Gongen",
        level: 90,
        modifiers: {
            physical: "-",
            fire: "Rf",
            ice: "-",
            electric: "Wk",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Maragidyne, Power Charge, God's Hand, Anima Freeze(92), Evade Physical(93), Enduring Soul(94), Fire Amp(95), Vorpal Blade(96)",
        notes: "Fire"
    },
    {
        arcana: "Judgement",
        name_jp: "アルダー",
        name: "Ardha",
        level: 90,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "Nu",
            electric: "Nu",
            wind: "-",
            light: "-",
            dark: "-"
        },
        skills: "Primal Force, God's Hand, Megidolaon(91), Null Dizzy(92), Auto-Rakukaja(93), Mediarahan(94), Angelic Grace(95), Null Physical(96)",
        notes: "Almighty"
    },
    {
        arcana: "World",
        name_jp: "伊邪那岐大神",
        name: "Izanagi-no-Okami",
        level: 91,
        modifiers: {
            physical: "Rs",
            fire: "Rs",
            ice: "Rs",
            electric: "Rs",
            wind: "Rs",
            light: "-",
            dark: "-"
        },
        skills: "Megidolaon, Victory Cry, Angelic Grace, Mind Charge, Agidyne(92), Bufudyne(93), Ziodyne(94), Garudyne(95), Fire Amp(96), Ice Amp(97), Elec Amp(98), Wind Amp(99)",
        notes: "Null"
    },
    {
        arcana: "Judgement",
        name_jp: "ルシファー",
        name: "Lucifer",
        level: 93,
        modifiers: {
            physical: "Rs",
            fire: "-",
            ice: "-",
            electric: "-",
            wind: "-",
            light: "Wk",
            dark: "Nu"
        },
        skills: "Bufudyne, Brave Blade, Mind Charge, Ice Amp(94), Spell Master(95), Repel Light(96), Absorb Elec(98), Victory Cry(99)",
        notes: "Ice"
    }];