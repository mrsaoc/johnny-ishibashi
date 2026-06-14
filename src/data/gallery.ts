export interface GalleryItem {
  id: number;
  displayNumber: number;
  imageUrl: string;
  caption?: string; // Apenas inglês, conforme aprovado pelo cliente
}

// 1. Array de IDs Ativos (Mapeamento exato)
// Adicionados os novos IDs (209 ao 223) no final da lista para as novas fotos e certificados.
const ACTIVE_IDS = [
  1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 15, 16, 18, 27, 29, 19, 21, 24, 25, 26, 
  31, 32, 34, 35, 37, 38, 41, 42, 44, 45, 46, 48, 49, 55, 56, 57, 58, 59, 
  62, 63, 65, 66, 67, 68, 70, 72, 73, 74, 75, 77, 79, 81, 82, 83, 84, 86, 
  87, 88, 89, 92, 93, 96, 98, 99, 100, 101, 102, 104, 106, 107, 108, 109,
  209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223
];

// 2. Dicionário Definitivo de Legendas (Exclusivo em Inglês)
const customCaptions: Record<number, string> = {
  1: 'Tokyo Motor Show — Volkswagen - 4 Motion',
  2: 'With Nelsinho Baptista (Verdy Kawasaki) & Shigeo Nagashima (Tokyo Giants)',
  3: 'With Pele @ 2002 FIFA World Cup Sponsorship Program',
  4: 'Neymar & Lionel Messi (FC Barcelona presents Rakuten in Japan)',
  5: 'With Émerson Leão (Verdy Kawasaki)',
  6: 'With Naomi Grace (3rd Joint Concert)',
  7: 'IPC TV (Field Report)',
  10: 'With Valdir Espinosa (Verdy Kawasaki)',
  11: 'With Ana Maria Braga (IPC no AR)',
  12: 'With Satoru Nakajima (IPC no AR)',
  13: 'With Ronaldinho (2002 FIFA World Cup)',
  15: 'With Émerson Leão (Verdy Kawasaki)',
  16: 'With Sammy Sosa & Masato Yoshii',
  18: 'With Ronaldinho (2002 FIFA World Cup)',
  27: 'Kinky Boots Japanese Cast',
  29: 'Kinky Boots',
  19: 'With Argel (Verdy Kawasaki)',
  21: 'With Nicanor de Carvalho (Verdy Kawasaki)',
  24: 'Kinky Boots Credits',
  25: 'With Hal Luftig (Kinky Boots)',
  26: 'Kinky Boots Opening Night Cake',
  31: 'With Nicanor de Carvalho (Verdy Kawasaki)',
  32: 'Team Cuba (World Baseball Classic)',
  34: 'With Valdir Espinosa (Verdy Kawasaki)',
  35: 'With Sergio Sapo (Japan National Team - Futsal)',
  37: 'Miss Universe Japan (25ans Magazine)',
  38: 'IPC TV (Perfil Talk Show Host)',
  41: 'NHK World Radio Japan',
  42: 'Team Iran (FIVB Volleyball Men\'s World Grand Champions Cup)',
  44: 'With Xabi Alonso (Yahoo News)',
  45: 'With Brazilian National Volleyball Team',
  46: 'With Yūki Ishikawa',
  48: 'FutbolNet Seminar by FC Barcelona',
  49: 'With Marcel Desailly',
  55: 'With Japan Men’s National Futsal Team (2004 AFC Futsal Championship)',
  56: 'Spirit of Zico by Carlos Kubo',
  57: 'Spirit of Zico by Carlos Kubo',
  58: 'Spirit of Zico by Carlos Kubo',
  59: 'With Zico (Spirit of Zico by Carlos Kubo)',
  62: 'With Manchester City (EuroJapan Cup 2019)',
  63: 'With Aledmys Diaz & Frank Morejón (5th World University Baseball Championship)',
  65: 'Rugby World Cup 2019',
  66: 'EAFF E-1 Football Championship in Japan 2017 Final',
  67: 'Foodex Japan - Brazil Pavilion',
  68: 'FC Gifu 2016',
  70: 'With Zico & Sérgio Sapo',
  72: 'EAFF E-1 Football Championship in Japan 2017 Final',
  73: 'After-Match Interview',
  74: 'Xabi Alonso Japan Visit 2018 by Adidas',
  75: 'Interpreter’s Seat',
  77: 'With David Villa (Penalty Soccer Clinic)',
  79: 'IPC no AR (IPC TV)',
  81: 'With Faf de Klerk (Rugby World Cup 2019)',
  82: 'Japan National Futsal Team’s Bench',
  83: 'With Émerson Leão (Emperor’s Cup 1996)',
  84: 'J. League All-Star Soccer 1996',
  86: 'BLAST!!! The Music of Disney',
  87: 'With Kazu Miura',
  88: 'Rakuten - FC Barcelona Partnership Press Conference',
  89: 'TV Show (Sekai Fushigi Hakken) – TBS Japan',
  92: 'With Nelsinho Baptista & Yasutaro Matsuki',
  93: 'With Valdir Espinosa & Rivelino Serpa',
  96: 'Rugby World Cup 2019',
  98: 'Japan National Futsal Team’s Bench',
  99: 'With Zico and Mrs. Sandra',
  100: 'TV Show (Kokogahen Dayo Nihonjin) – TBS Japan',
  101: 'With Hulk, Diego Souza & Gilmar',
  102: 'With Neil Schon, Steve Augeri, and Jonathan Cain (Journey in Japan)',
  104: 'With Shinkichi Kikuchi in Kolkata, India',
  106: 'Perfil (IPC TV)',
  107: 'IPC no AR (IPC TV)',
  108: 'IPC no AR (IPC TV)',
  109: 'Preparations for Expo Japan 2025 – São Paulo, Brazil',
  
  // Novas imagens
  209: 'Shonen Magazine',
  210: 'N1 Certificate of Japanese-Language Proficiency Test',
  211: 'Certificate of the EIKEN Test in Practical English Proficiency',
  212: 'Mindfulness and Stress Management Certificate',
  213: 'Certificate of Intelligence',
  214: 'TESOL Certificate',
  215: 'TEYL Certificate, Brazil-Japan Law and Judicial System: New Trends',
  216: 'Event Safety and Operational Management',
  217: 'Medical Language Interpreter Certification',
  218: 'Vamos Magazine by H.I.S BRASIL TURISMO',
  219: 'Japanese-Portuguese Translation Mentorship',
  220: 'ChatGPT',
  221: 'DALL-E',
  222: 'Jasper AI',
  223: 'MidJourney'
};

// 3. URLs Customizadas
// Mapeamento exato das extensões .jpg, .jpeg e .png fornecidas.
const customUrls: Record<number, string> = {
  109: '/assets/depoimento1.jpeg',
  209: '/assets/foto109.jpg',
  210: '/assets/foto110.jpeg',
  211: '/assets/foto111.jpg',
  212: '/assets/foto112.jpg',
  213: '/assets/foto113.jpg',
  214: '/assets/foto114.jpg',
  215: '/assets/foto115.jpg',
  216: '/assets/foto116.jpg',
  217: '/assets/foto117.jpg',
  218: '/assets/foto118.jpg',
  219: '/assets/foto119.png',
  220: '/assets/foto120.jpg',
  221: '/assets/foto121.jpg',
  222: '/assets/foto122.jpg',
  223: '/assets/foto123.jpg'
};

// 4. Exportação Final
export const galleryData: GalleryItem[] = ACTIVE_IDS.map((id, index) => ({
  id,
  displayNumber: index + 1,
  imageUrl: customUrls[id] || `/assets/foto${id}.jpeg`,
  caption: customCaptions[id] || 'Caption pending.',
}));