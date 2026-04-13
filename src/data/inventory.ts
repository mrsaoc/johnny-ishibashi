type Language = 'PT' | 'EN' | 'JP';

export interface InventoryItem {
  year: string;
  title: Record<Language, string>;
  url?: string;
}

export interface InventoryCategory {
  id: string;
  title: Record<Language, string>;
  items: InventoryItem[];
}

export const inventoryData: InventoryCategory[] = [
  {
    id: "esportiva",
    title: { PT: "Interpretação Esportiva", EN: "Sports Interpretation", JP: "プロ・スポーツ通訳" },
    items: [
      { year: "1992, 1993", title: { PT: "Tokyo Yomiuri Giants - Intérprete profissional", EN: "Tokyo Yomiuri Giants - Pro Interpreter", JP: "読売ジャイアンツ - プロ通訳" } },
      { 
        year: "1995-2016", 
        title: { 
          PT: "J-League - Intérprete de clubes profissionais:\n• Verdy Kawasaki\n• Urawa Red Diamonds\n• Nagoya Grampus Eight\n• Tokyo Verdy\n• FC Gifu", 
          EN: "J-League - Pro Club Interpreter:\n• Verdy Kawasaki\n• Urawa Red Diamonds\n• Nagoya Grampus Eight\n• Tokyo Verdy\n• FC Gifu", 
          JP: "Jリーグ プロクラブ通訳:\n• ヴェルディ川崎\n• 浦和レッズ\n• 名古屋グランパスエイト\n• 東京ヴェルディ\n• FC岐阜" 
        } 
      },
      { year: "2000", title: { PT: "Major League Baseball (MLB) - Primeiro jogo de abertura realizado no Japão (Intérprete oficial)", EN: "Major League Baseball (MLB) - First opening game held in Japan (Official Interpreter)", JP: "メジャーリーグベースボール（MLB）- 日本で開催された初の開幕戦（公式通訳）" } },
      { year: "2000-2010", title: { PT: "K-1, PRIDE, UFC e Glory - Intérprete", EN: "K-1, PRIDE, UFC & Glory - Interpreter", JP: "K-1、PRIDE、UFC、Glory - 通訳" } },
      { year: "2000-2018", title: { PT: "Copa Kirin (múltiplas edições)", EN: "Kirin Cup (multiple editions)", JP: "キリンカップ（複数回）" } },
      { year: "2001-2016", title: { PT: "Kirin Challenge Cup (Intérprete oficial em todas as edições do evento)", EN: "Kirin Challenge Cup (Official Interpreter for all editions of the event)", JP: "キリンチャレンジカップ（全大会公式通訳）" } },
      { year: "2004, 2017", title: { PT: "Eventos de Voleibol - Mundial Masculino, Copa dos Campeões, V.League All Stars", EN: "Volleyball Events - Men's World Championship, World Grand Champions Cup, V.League All Stars", JP: "バレーボール - 世界バレー男子、ワールドグランドチャンピオンズカップ、Vリーグオールスターズ" } },
      { year: "2005-2016", title: { PT: "Copa do Mundo de Clubes da FIFA (Intérprete oficial em todas as edições sediadas no Japão)", EN: "FIFA Club World Cup (Official interpreter for all editions hosted in Japan)", JP: "FIFAクラブワールドカップ（日本開催の全大会で公式通訳）" } },
      { year: "2006-2017", title: { PT: "WBC (Clássico Mundial de Beisebol)", EN: "WBC (World Baseball Classic)", JP: "WBC（ワールド・ベースボール・クラシック）" } },
      { year: "2008-2019", title: { PT: "Copa Suruga (Todas as edições)", EN: "Suruga Bank Championship (All editions)", JP: "スルガ銀行チャンピオンシップ（全大会通訳）" } },
      { year: "2010", title: { PT: "Campeonato Mundial de Beisebol Universitário - Intérprete oficial da seleção de Cuba", EN: "World University Baseball Championship - Official interpreter for the Cuban national team", JP: "世界大学野球選手権大会 - キューバ代表公式通訳" } },
      { year: "2013, 2014", title: { PT: "Seleção Japonesa de Futsal - Intérprete oficial", EN: "Japan National Futsal Team - Official Interpreter", JP: "フットサル日本代表 - 公式通訳" } },
      { year: "2017", title: { PT: "EAFF East Asian Football Championship", EN: "EAFF East Asian Football Championship", JP: "EAFF E-1 サッカー選手権" } },
      { year: "2019", title: { PT: "Rugby World Cup - Intérprete oficial nas sedes de Beppu, Kakegawa e Shin-Yokohama", EN: "Rugby World Cup - Official Interpreter for Beppu, Kakegawa and Shin-Yokohama venues.", JP: "ラグビーワールドカップ - 別府、掛川、新横浜会場公式通訳" } },
      { year: "2021", title: { PT: "Jogos Olímpicos e Paralímpicos de Tóquio - Intérprete oficial da sede de Basquetebol", EN: "Tokyo Olympic and Paralympic Games - Official interpreter for the Basketball venue", JP: "東京オリンピック・パラリンピック競技大会 - バスケットボール会場公式通訳" } }
    ]
  },
  {
    id: "artistica",
    title: { PT: "Artística e Broadway", EN: "Arts & Broadway", JP: "芸術・ブロードウェイ通訳" },
    items: [
      { year: "2000-2018", title: { PT: "Produções da Broadway em turnê no Japão", EN: "Broadway touring productions in Japan", JP: "ブロードウェイ・ツアー日本公演" } },
      { year: "2002", title: { PT: "The Platters - Intérprete", EN: "The Platters - Interpreter", JP: "ザ・プラターズ - 通訳" } },
      { year: "2003", title: { PT: "Sony Music Dream Factory Audition", EN: "Sony Music Dream Factory Audition", JP: "ソニーミュージック・ドリームファクトリー・オーディション" } },
      { year: "2017", title: { PT: "BLAST! The Music of Disney", EN: "BLAST! The Music of Disney", JP: "BLAST! The Music of Disney" } },
      { year: "2017", title: { PT: "FUERZA BRUTA (WA) - Intérprete trilíngue", EN: "FUERZA BRUTA (WA) - Trilingual Interpreter", JP: "FUERZA BRUTA (WA) - 3か国語通訳" } },
      { year: "2017", title: { PT: "Kerry Ellis e Ben Foster (Broadway)", EN: "Kerry Ellis & Ben Foster (Broadway)", JP: "ケリー・エリス＆ベン・フォスター（ブロードウェイ）" } },
      { year: "2018", title: { PT: "Michael Hampton Workshop", EN: "Michael Hampton Workshop", JP: "マイケル・ハンプトン・ワークショップ" } },
      { year: "2018", title: { PT: "La Cage aux Folles (Japanese Cast)", EN: "La Cage aux Folles (Japanese Cast)", JP: "La Cage aux Folles （Japanese Cast）" } },
      { year: "2019", title: { PT: "Kinky Boots (Japanese Cast)", EN: "Kinky Boots (Japanese Cast)", JP: "Kinky Boots （Japanese Cast）" } }
    ]
  },
  {
    id: "governamental",
    title: { PT: "Governamental", EN: "Governmental", JP: "政府機関・国際機関通訳" },
    items: [
      { year: "2007-2019", title: { PT: "Ordem dos Advogados de Tóquio - Intérprete", EN: "Tokyo Bar Association - Interpreter", JP: "東京弁護士会 - 通訳" } },
      { year: "2007-2023", title: { PT: "Departamento de Imigração de Tóquio - Intérprete", EN: "Tokyo Regional Immigration Bureau - Interpreter", JP: "東京出入国在留管理局 - 通訳" } },
      { year: "2008-2018", title: { PT: "Ministério dos Negócios Estrangeiros do Japão (ODA 案件多数)", EN: "Ministry of Foreign Affairs of Japan (Multiple ODA Projects)", JP: "日本国外務省（ODA 案件多数）" } },
      { year: "2008-2019", title: { PT: "JICA - Agência de Cooperação Internacional do Japão", EN: "JICA - Japan International Cooperation Agency", JP: "JICA - 国際協力機構" } },
      { year: "2019", title: { PT: "Agência da Casa Imperial do Japão, Gabinete do Japão e Governo Metropolitano de Tóquio - Organização de logística e segurança da família real da Arábia Saudita na cerimônia de entronização do Imperador Naruhito", EN: "Imperial Household Agency, Cabinet of Japan, and Tokyo Metropolitan Government - Logistics and security organization for the Saudi Royal Family during Emperor Naruhito's enthronement ceremony", JP: "宮内庁、内閣、東京都 - 徳仁天皇即位の礼におけるサウジアラビア王室のロジスティクスおよび警備編成" } }
    ]
  },
  {
    id: "midia",
    title: { PT: "Mídia e Mestre de Cerimônias", EN: "Media & MC", JP: "メディア・司会・ナレーション" },
    items: [
      { year: "1999-2002", title: { PT: "IPC TV: IPC no Ar - Primeiro apresentador brasileiro de programa de variedades no Japão", EN: "IPC TV: IPC no Ar - First Brazilian host of a variety show in Japan", JP: "IPC TV: IPC no Ar - 日本初のブラジル人バラエティ番組司会者" }, url: "https://www.youtube.com/watch?v=R_I_C7O9fK8" },
      { year: "2000", title: { PT: "Major League Baseball (MLB) - Apresentador bilíngue no evento de lançamento e coletiva oficial de imprensa", EN: "Major League Baseball (MLB) - Bilingual host for launch event and official press conference", JP: "メジャーリーグベースボール（MLB）- 開催記念イベントおよび公式記者会見 日英バイリンガル司会" } },
      { year: "2001-2018", title: { PT: "NHK World Rádio Japão - Tradutor-intérprete", EN: "NHK World Radio Japan - Translator-interpreter", JP: "NHKワールド・ラジオ日本 - 翻訳通訳者" } },
      { year: "2002", title: { PT: "Copa do Mundo de Futebol da FIFA 2002 - Intérprete simultâneo do Zico em todos os canais de televisão do Japão", EN: "2002 FIFA World Cup - Simultaneous interpreter for Zico across all Japanese television networks", JP: "2002 FIFAワールドカップ - ジーコ氏の同時通訳（日本の全テレビ局にて）" } },
      { year: "2002", title: { PT: "Maratona de Honolulu - Apresentador bilíngue inglês-japonês", EN: "Honolulu Marathon - English-Japanese bilingual host", JP: "ホノルルマラソン - 日英バイリンガル司会" } },
      { year: "2007-2008", title: { PT: "IPC TV: Programa Perfil - Programa de entrevistas com a comunidade brasileira no Japão", EN: "IPC TV: Programa Perfil - Interview program featuring the Brazilian community in Japan", JP: "IPC TV: Programa Perfil - 在日ブラジル人コミュニティ向けインタビュー番組" } },
      { year: "Anos diversos", title: { PT: "Travellers TV/SKY PerfecTV - Apresentador bilíngue", EN: "Travellers TV/SKY PerfecTV - Bilingual Host", JP: "Travellers TV/SKY PerfecTV - バイリンガル司会" } },
      { year: "2017", title: { PT: "FC Barcelona presents Rakuten in Japan - Intérprete da coletiva oficial de imprensa", EN: "FC Barcelona presents Rakuten in Japan - Official press conference interpreter", JP: "FCバルセロナ 楽天プレゼンツ・イン・ジャパン - 公式記者会見通訳" }, url: "https://youtu.be/jmJKbeadac0?si=hidOtEtLKAR0olAM" },
      { year: "2018", title: { PT: "Adidas - Encontros com Xabi Alonso e David Villa", EN: "Adidas - Meetings with Xabi Alonso & David Villa", JP: "アディダス - シャビ・アロンソ、ダビド・ビジャとのイベント" } },
      { year: "2019", title: { PT: "J.League Super Challenge (Chelsea vs Kawasaki Frontale) - Acompanhamento da visita de Marcel Desailly", EN: "J.League Super Challenge (Chelsea vs Kawasaki Frontale) - Accompanying Marcel Desailly's visit", JP: "Jリーグスーパーチャレンジ（チェルシー対川崎フロンターレ） - マルセル・デサイー氏来日随行" }, url: "https://www.chelseafc.com/en/video/highlights--kawasaki-frontale--a--19-20-h1m3g2ate61dnjlf0vfqgavgc7zspecr" }
    ]
  },
  {
    id: "eventos",
    title: { PT: "Eventos Internacionais", EN: "International Events", JP: "国際イベント・国際展示会" },
    items: [
      { year: "1998-2024", title: { PT: "Feiras comerciais e exposições internacionais", EN: "International trade fairs & exhibitions", JP: "国際貿易見本市・国際展示会" } },
      { year: "1999", title: { PT: "Tokyo Motor Show (Volkswagen)", EN: "Tokyo Motor Show (Volkswagen)", JP: "東京モーターショー（フォルクスワーゲン）" } },
      { year: "2000", title: { PT: "Tokyo Game Show", EN: "Tokyo Game Show", JP: "東京ゲームショウ" } },
      { year: "2001", title: { PT: "JATACOM", EN: "JATACOM", JP: "JATACOM" } },
      { year: "2008", title: { PT: "Foodex Pavilhão Brasil", EN: "Foodex Brazil Pavilion", JP: "Foodexブラジルパビリオン" } },
      { year: "2025", title: { PT: "JICA - Expo Japan 2025", EN: "JICA - Expo Japan 2025", JP: "JICA - Expo Japan 2025" } }
    ]
  }
];