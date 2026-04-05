import { Language } from '@/context/LanguageContext';

export interface GalleryItem {
    id: number;
    imageUrl: string;
    caption?: Record<Language, string>;
}

// Dicionário de Legendas Específicas e Validadas
const customCaptions: Record<number, Record<Language, string>> = {
    1: { PT: 'Com Nicanor de Carvalho (Verdy Kawasaki 1998)', EN: 'With Nicanor de Carvalho (Verdy Kawasaki 1998)', JP: 'ニカノール・デ・カルバーリョと共に（ヴェルディ川崎 1998年）' },
    2: { PT: 'Seleção Universitária de Cuba', EN: 'Cuban National University Team', JP: 'キューバ大学代表チーム' },
    5: { PT: 'Com Sérgio Sapo (Seleção Japonesa de Futsal — 2004)', EN: 'With Sérgio Sapo (Japan National Futsal Team — 2004)', JP: 'セルジオ・サッポと共に（フットサル日本代表 — 2004年）' },
    6: { PT: 'Com Ana Maria Braga (IPC no Ar 2000)', EN: 'With Ana Maria Braga (IPC no Ar 2000)', JP: 'アナ・マリア・ブラガと共に（IPC no Ar 2000年）' },
    7: { PT: 'Revista 25 Ans (Instrutor da Miss Universo Japão de 1994)', EN: '25 Ans Magazine (Instructor for Miss Universe Japan 1994)', JP: '25ans誌（1994年ミス・ユニバース・ジャパン インストラクター）' },
    8: { PT: 'Programa Perfil (2007)', EN: 'Programa Perfil (2007)', JP: 'Programa Perfil（2007年）' },
    10: { PT: 'Stand da Volkswagen (Tokyo Motor Show 2001)', EN: 'Volkswagen Stand (Tokyo Motor Show 2001)', JP: 'フォルクスワーゲン・ブース（東京モーターショー 2001年）' },
    11: { PT: 'Com Nelsinho Baptista e Shigeo Nagashima (1995)', EN: 'With Nelsinho Baptista and Shigeo Nagashima (1995)', JP: 'ネルシーニョ・バプティスタ、長嶋茂雄と共に（1995年）' },
    12: { PT: 'Com Pelé (2001)', EN: 'With Pelé (2001)', JP: 'ペレと共に（2001年）' },
    13: { PT: 'Com Lionel Messi e Neymar (FC Barcelona & Rakuten, 2017)', EN: 'With Lionel Messi and Neymar (FC Barcelona & Rakuten, 2017)', JP: 'リオネル・メッシ、ネイマールと共に（FCバルセロナ＆楽天、2017年）' },
    14: { PT: 'Com Émerson Leão (Verdy Kawasaki 1996)', EN: 'With Émerson Leão (Verdy Kawasaki 1996)', JP: 'エメルソン・レオンと共に（ヴェルディ川崎 1996年）' },
    15: { PT: 'Show com Naomi Grace (2004)', EN: 'Show with Naomi Grace (2004)', JP: 'ナオミ・グレースとのショー（2004年）' },
    16: { PT: 'Gravação de externas (IPC TV)', EN: 'Location shooting (IPC TV)', JP: '野外ロケ（IPC TV）' },
};

// Ordem estrita e arquitetada do acervo visual (Editorial Order)
// Removidas: 3, 9, 17, 20, 23
// Agrupadas: Ronaldinho (18, 22, 27, 29), La Cage (31, 32), Kinky Boots (33-39)
const orderedIds = [
    1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, // Sequência inicial
    18, 22, 27, 29, // Grupo Ronaldinho Gaúcho
    19, 21, 24, 25, 26, 28, 30, // Transição institucional
    31, 32, // Grupo La Cage aux Folles
    33, 34, 35, 36, 37, 38, 39 // Grupo Kinky Boots
];

// Mapeamento final dos dados para exportação
export const galleryData: GalleryItem[] = orderedIds.map((id) => ({
    id,
    imageUrl: `/assets/foto${id}.jpeg`,
    caption: customCaptions[id],
}));