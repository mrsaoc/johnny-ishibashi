export interface GalleryItem {
  id: number;
  displayNumber: number;
  imageUrl: string;
  caption?: string; // Agora aceita apenas texto direto (inglês)
}

// 1. Dicionário de Legendas Específicas (Apenas em Inglês, exigência do cliente)
const customCaptions: Record<number, string> = {
  1: 'With Nicanor de Carvalho (Verdy Kawasaki 1998)',
  2: 'Cuban National University Team',
  5: 'With Sérgio Sapo (Japan National Futsal Team — 2004)',
  6: 'With Ana Maria Braga (IPC no Ar 2000)',
  7: '25 Ans Magazine (Instructor for Miss Universe Japan 1994)',
  8: 'Programa Perfil (2007)',
  10: 'Volkswagen Stand (Tokyo Motor Show 2001)',
  11: 'With Nelsinho Baptista and Shigeo Nagashima (1995)',
  12: 'With Pelé (2001)',
  13: 'With Lionel Messi and Neymar (FC Barcelona & Rakuten, 2017)',
  14: 'With Émerson Leão (Verdy Kawasaki 1996)',
  15: 'Show with Naomi Grace (2004)',
  16: 'Location shooting (IPC TV)',
  57: 'Eurojapan Cup 2019 - Manchester City',
  109: 'Udon preparation - MIE Kenjinkai'
};

// 2. Regras de Negócio (Motor Curatorial)
const TOTAL_PHOTOS = 109; 

// Lista de URLs customizadas que escapam da regra padrão "foto[ID].jpeg"
const customUrls: Record<number, string> = {
  109: '/assets/depoimento1.jpeg'
};

const EXCLUDED_PHOTOS = [
  3, 9, 14, 17, 20, 22, 23, 28, 33, 36, 40, 51, 52, 53, 54, 61, 69, 76, 78, 80, 91
];

const GROUPED_PHOTOS = [
  [18, 27, 29], 
  [31, 32],         
  [34, 35, 37, 38, 39] 
];

// 3. Algoritmo de Processamento Automático
const buildGalleryOrder = (): number[] => {
  const finalOrder: number[] = [];
  const flatGroups = GROUPED_PHOTOS.flat();

  for (let i = 1; i <= TOTAL_PHOTOS; i++) {
    if (EXCLUDED_PHOTOS.includes(i)) continue;

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
    finalOrder.push(i);
  }

  return finalOrder;
};

// 4. Execução e Exportação
const processedIds = buildGalleryOrder();

export const galleryData: GalleryItem[] = processedIds.map((id, index) => ({
  id,
  displayNumber: index + 1,
  imageUrl: customUrls[id] || `/assets/foto${id}.jpeg`,
  caption: customCaptions[id],
}));