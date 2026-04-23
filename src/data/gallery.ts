import { Language } from '@/context/LanguageContext';

export interface GalleryItem {
  id: number;
  displayNumber: number;
  imageUrl: string;
  caption?: Record<Language, string>;
}

// 1. Dicionário de Legendas Específicas
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
  57: { PT: 'Eurojapan Cup 2019 - Manchester City', EN: 'Eurojapan Cup 2019 - Manchester City', JP: 'EUROJAPAN CUP 2019 - マンチェスター・シティ' },
};

// 2. Regras de Negócio (Motor Curatorial)
const TOTAL_PHOTOS = 108; 

// Lista de arquivos originais mapeados a partir dos números visuais solicitados
const EXCLUDED_PHOTOS = [
  3, 9, 14, 17, 20, 22, 23, 28, 33, 36, 40, 51, 52, 53, 54, 61, 69, 76, 78, 80, 91
];

// O grupo do Ronaldinho e Broadway foi preservado, removendo internamente apenas os IDs que caíram na exclusão acima
const GROUPED_PHOTOS = [
  [18, 27, 29], // O 22 foi excluído pelo cliente, então saiu do grupo
  [31, 32],         
  [34, 35, 37, 38, 39] // 33 e 36 excluídos
];

// 3. Algoritmo de Processamento Automático
const buildGalleryOrder = (): number[] => {
  const finalOrder: number[] = [];
  const flatGroups = GROUPED_PHOTOS.flat();

  for (let i = 1; i <= TOTAL_PHOTOS; i++) {
    // Regra A: Ignora sumariamente as fotos excluídas
    if (EXCLUDED_PHOTOS.includes(i)) continue;

    // Regra B: Lida com fotos que pertencem a grupos
    if (flatGroups.includes(i)) {
      const targetGroup = GROUPED_PHOTOS.find(group => group.includes(i));
      const firstValidInGroup = targetGroup?.find(id => !EXCLUDED_PHOTOS.includes(id));

      if (firstValidInGroup === i && targetGroup) {
        targetGroup.forEach(id => {
          if (!EXCLUDED_PHOTOS.includes(id)) {
            finalOrder.push(id);
          }
        });
      }
      continue;
    }

    // Regra C: Adiciona cronologicamente o restante
    finalOrder.push(i);
  }

  return finalOrder;
};

// 4. Execução e Exportação
const processedIds = buildGalleryOrder();

export const galleryData: GalleryItem[] = processedIds.map((id, index) => ({
  id,
  displayNumber: index + 1,
  imageUrl: `/assets/foto${id}.jpeg`,
  caption: customCaptions[id],
}));