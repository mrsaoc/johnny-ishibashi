type Language = 'PT' | 'EN' | 'JP';

export interface InventoryItem {
    year: string;
    title: Record<Language, string>; // Título translatável
}

export interface InventoryCategory {
    id: string;
    title: Record<Language, string>; // Título da categoria translatável
    items: InventoryItem[];
}

export const inventoryData: InventoryCategory[] = [
    {
        id: "esportiva",
        title: { PT: "Interpretação Esportiva", EN: "Sports Interpretation", JP: "プロ・スポーツ通訳" },
        items: [
            { year: "1992, 1993", title: { PT: "Tokyo Yomiuri Giants - Intérprete profissional", EN: "Tokyo Yomiuri Giants - Pro Interpreter", JP: "読売ジャイアンツ - プロ通訳" } },
            { year: "1995-2016", title: { PT: "J-League clubs - Intérprete profissional", EN: "J-League clubs - Pro Interpreter", JP: "Jリーグクラブ - プロ通訳" } },
            { year: "2000-2010", title: { PT: "Boxing, K-1, PRIDE - Intérprete", EN: "Boxing, K-1, PRIDE - Interpreter", JP: "ボクシング、K-1、PRIDE - 通訳" } },
            { year: "2000-2018", title: { PT: "Copa Kirin (múltiplas edições)", EN: "Kirin Cup (multiple editions)", JP: "キリンカップ（複数回）" } },
            { year: "2001-2022", title: { PT: "Kirin Challenge Cup", EN: "Kirin Challenge Cup", JP: "キリンチャレンジカップ" } },
            { year: "2002", title: { PT: "Maratona de Honolulu", EN: "Honolulu Marathon", JP: "ホノルルマラソン" } },
            { year: "2004, 2017", title: { PT: "Voleibol - Copa dos Campeões, V.League All Stars", EN: "Volleyball - World Grand Champions Cup, V.League All Stars", JP: "バレーボール - ワールドグランドチャンピオンズカップ、Vリーグオールスターズ" } },
            { year: "2005-2016", title: { PT: "Copa do Mundo de Clubes da FIFA", EN: "FIFA Club World Cup", JP: "FIFAクラブワールドカップ" } },
            { year: "2006-2017", title: { PT: "Clássico Mundial de Beisebol (WBC)", EN: "World Baseball Classic (WBC)", JP: "ワールド・ベースボール・クラシック（WBC）" } },
            { year: "2008-2019", title: { PT: "Copa Suruga", EN: "Suruga Bank Championship", JP: "スルガ銀行チャンピオンシップ" } },
            { year: "2013, 2014", title: { PT: "Seleção Japonesa de Futsal - Intérprete", EN: "Japan National Futsal Team - Interpreter", JP: "フットサル日本代表 - 通訳" } },
            { year: "2017", title: { PT: "EAFF East Asian Football Championship", EN: "EAFF East Asian Football Championship", JP: "EAFF E-1 サッカー選手権" } },
            { year: "2019", title: { PT: "Rugby World Cup", EN: "Rugby World Cup", JP: "ラグビーワールドカップ" } },
            { year: "2021", title: { PT: "Jogos Olímpicos e Paralímpicos de Tóquio", EN: "Tokyo Olympic and Paralympic Games", JP: "東京オリンピック・パラリンピック競技大会" } }
        ]
    },
    {
        id: "artistica",
        title: { PT: "Artística e Broadway", EN: "Arts & Broadway", JP: "芸術・ブロードウェイ通訳" },
        items: [
            { year: "2000-2018", title: { PT: "Produções da Broadway em turnê no Japão", EN: "Broadway touring productions in Japan", JP: "ブロードウェイ・ツアー日本公演" } },
            { year: "2003", title: { PT: "Sony Music Dream Factory", EN: "Sony Music Dream Factory", JP: "ソニーミュージック・ドリームファクトリー" } },
            { year: "2017", title: { PT: "BLAST! - The Music of Disney", EN: "BLAST! - The Music of Disney", JP: "BLAST! - ディズニー・ミュージック" } },
            { year: "2017", title: { PT: "Fuerza Bruta - Intérprete trilíngue", EN: "Fuerza Bruta - Trilingual Interpreter", JP: "フエルサ・ブルータ - 3か国語通訳" } },
            { year: "2017", title: { PT: "Kerry Ellis e Ben Foster (Broadway)", EN: "Kerry Ellis & Ben Foster (Broadway)", JP: "ケリー・エリス＆ベン・フォスター（ブロードウェイ）" } },
            { year: "2018", title: { PT: "Michael Hampton Workshop", EN: "Michael Hampton Workshop", JP: "マイケル・ハンプトン・ワークショップ" } }
        ]
    },
    {
        id: "governamental",
        title: { PT: "Governamental", EN: "Governmental", JP: "政府機関・国際機関通訳" },
        items: [
            { year: "2007-2019", title: { PT: "Ordem dos Advogados de Tóquio - Intérprete", EN: "Tokyo Bar Association - Interpreter", JP: "東京弁護士会 - 通訳" } },
            { year: "2008-2018", title: { PT: "Ministério dos Negócios Estrangeiros do Japão (missões ODA)", EN: "Ministry of Foreign Affairs of Japan (ODA missions)", JP: "日本国外務省（ODAミッション）" } },
            { year: "2008-2019", title: { PT: "JICA - Agência de Cooperação Internacional do Japão", EN: "JICA - Japan International Cooperation Agency", JP: "JICA - 国際協力機構" } }
        ]
    },
    {
        id: "midia",
        title: { PT: "Mídia e Mestre de Cerimônias", EN: "Media & MC", JP: "メディア・司会・ナレーション" },
        items: [
            { year: "Anos diversos", title: { PT: "IPC TV - Apresentador de programas", EN: "IPC TV - Program Host", JP: "IPC TV - 番組司会" } },
            { year: "Anos diversos", title: { PT: "Travellers TV/SKY PerfecTV - Apresentador bilíngue", EN: "Travellers TV/SKY PerfecTV - Bilingual Host", JP: "Travellers TV/SKY PerfecTV - バイリンガル司会" } },
            { year: "2001-2018", title: { PT: "NHK World Rádio Japão - Tradutor-intérprete", EN: "NHK World Radio Japan - Translator-interpreter", JP: "NHKワールド・ラジオ日本 - 翻訳通訳者" } },
            { year: "2018", title: { PT: "Adidas - Encontros com Xabi Alonso e David Villa", EN: "Adidas - Meetings with Xabi Alonso & David Villa", JP: "アディダス - シャビ・アロンソ、ダビド・ビジャとのイベント" } }
        ]
    },
    {
        id: "eventos",
        title: { PT: "Eventos Internacionais", EN: "International Events", JP: "国際イベント・国際展示会" },
        items: [
            { year: "1998-2024", title: { PT: "Feiras comerciais e exposições internacionais", EN: "International trade fairs & exhibitions", JP: "国際貿易見本市・国際展示会" } },
            { year: "1999", title: { PT: "Tokyo Motor Show (Volkswagen)", EN: "Tokyo Motor Show (Volkswagen)", JP: "東京モーターショー（フォルクスワーゲン）" } },
            { year: "2008", title: { PT: "Foodex Pavilhão Brasil", EN: "Foodex Brazil Pavilion", JP: "Foodexブラジルパビリオン" } },
            { year: "2025", title: { PT: "Expo Japan 2025 - JICA", EN: "Expo Japan 2025 - JICA", JP: "大阪・関西万博2025 - JICA" } }
        ]
    }
];