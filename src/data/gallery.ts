export interface GalleryItem {
  id: number;
  displayNumber: number;
  imageUrl: string;
  caption?: string;
}

// 1. Dicionário Definitivo de Legendas (Exclusivo em Inglês)
const customCaptions: Record<number, string> = {
  1: 'Tokyo Motor Show — Volkswagen - 4 Motion',
  2: 'With Nelsinho Batista (Verdy Kawasaki) & Shigeo Nagashima (Tokyo Giants)',
  3: 'Neymar & Lionel Messi (FC Barcelona presents Rakuten in Japan)',
  4: 'With Émerson Leão (Verdy Kawasaki)',
  5: 'With Naomi Grace (3rd Joint Concert)',
  6: 'IPC TV (Field Report)',
  8: 'With Valdir Espinosa (Verdy Kawasaki)',
  9: 'With Ana Maria Braga (IPC no AR)',
  10: 'With Satoru Nakajima (IPC no AR)',
  11: 'With Ronaldinho (2002 FIFA World Cup)',
  12: 'With Émerson Leão (Verdy Kawasaki)',
  13: 'With Sammy Sosa & Masato Yoshii',
  14: 'With Ronaldinho (2002 FIFA World Cup)',
  15: 'Kinky Boots Japanese Cast',
  16: 'Kinky Boots',
  17: 'With Argel (Verdy Kawasaki)',
  18: 'With Nicanor de Carvalho (Verdy Kawasaki)',
  19: 'Kinky Boots Credits',
  20: 'With Hal Luftig (Kinky Boots)',
  21: 'Kinky Boots Opening Night Cake',
  23: 'With Nicanor de Carvalho (Verdy Kawasaki)',
  24: 'Team Cuba (World Baseball Classic)',
  25: 'With Valdir Espinosa (Verdy Kawasaki)',
  26: 'With Sergio Sapo (Japan National Team - Futsal)',
  27: 'Miss Universe Japan (25ans Magazine)',
  28: 'IPC TV (Perfil Talk Show Host)',
  30: 'NHK World Radio Japan',
  31: 'Team Iran (FIVB Volleyball Men\'s World Grand Champions Cup)',
  33: 'With Xabi Alonso (Yahoo News)',
  34: 'With Brazilian National Volleyball Team',
  35: 'With Yūki Ishikawa',
  37: 'FutbolNet Seminar by FC Barcelona',
  38: 'With Marcel Desailly',
  40: 'With Japan Men’s National Futsal Team (2004 AFC Futsal Championship)',
  41: 'Spirit of Zico by Carlos Kubo',
  42: 'Spirit of Zico by Carlos Kubo',
  43: 'Spirit of Zico by Carlos Kubo',
  44: 'With Zico (Spirit of Zico by Carlos Kubo)',
  46: 'With Manchester City (EuroJapan Cup 2019)',
  47: 'With Aledmys Diaz & Frank Morejón (5th World University Baseball Championship)',
  49: 'Rugby World Cup 2019',
  50: 'EAFF E-1 Football Championship in Japan 2017 Final',
  51: 'Foodex Japan - Brazil Pavilion',
  52: 'FC Gifu 2016',
  53: 'With Zico & Sérgio Sapo',
  55: 'EAFF E-1 Football Championship in Japan 2017 Final',
  56: 'After-Match Interview',
  57: 'Xabi Alonso Japan Visit 2018 by Adidas',
  58: 'Interpreter’s Seat',
  59: 'With David Villa (Penalty Soccer Clinic)',
  60: 'IPC no AR (IPC TV)',
  61: 'With Faf de Klerk (Rugby World Cup 2019)',
  62: 'Japan National Futsal Team’s Bench',
  63: 'With Émerson Leão (Emperor’s Cup 1996)',
  64: 'J. League All-Star Soccer 1996',
  66: 'BLAST!!! The Music of Disney',
  67: 'With Kazu Miura',
  68: 'Rakuten - FC Barcelona Partnership Press Conference',
  69: 'TV Show (Sekai Fushigi Hakken) – TBS Japan',
  71: 'With Nelsinho & Yasutaro Matsuki',
  72: 'With Valdir Espinosa & Rivelino Serpa',
  75: 'Rugby World Cup 2019',
  77: 'Japan National Futsal Team’s Bench',
  78: 'With Zico and Mrs. Sandra',
  79: 'TV Show (Kokogahen Dayo Nihonjin) – TBS Japan',
  80: 'With Hulk, Diego Souza & Gilmar',
  81: 'With Neil Schon, Steve Augeri, and Jonathan Cain (Journey in Japan)',
  83: 'With Shinkichi Kikuchi in Kolkata, India',
  85: 'Perfil (IPC TV)',
  86: 'IPC no AR (IPC TV)',
  87: 'IPC no AR (IPC TV)',
  88: 'Preparations for Expo Japan 2025 – São Paulo, Brazil',
  109: 'Udon preparation - MIE Kenjinkai'
};

// 2. Lista de IDs Ativos (Whitelist)
// O sistema renderizará APENAS as fotos declaradas nesta matriz, na ordem exata.
const ACTIVE_IDS = [
  1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 
  27, 28, 30, 31, 33, 34, 35, 37, 38, 40, 41, 42, 43, 44, 46, 47, 49, 50, 51, 52, 53, 55, 
  56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 71, 72, 75, 77, 78, 79, 80, 81, 83, 
  85, 86, 87, 88, 109
];

// 3. URLs Customizadas (Para imagens com nomes que fogem do padrão "fotoX.jpeg")
const customUrls: Record<number, string> = {
  109: '/assets/depoimento1.jpeg'
};

// 4. Execução e Exportação
export const galleryData: GalleryItem[] = ACTIVE_IDS.map((id, index) => ({
  id,
  displayNumber: index + 1,
  imageUrl: customUrls[id] || `/assets/foto${id}.jpeg`,
  caption: customCaptions[id] || 'Caption pending.',
}));