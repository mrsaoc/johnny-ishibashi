import { Dictionary } from '@/context/LanguageContext';

export interface GalleryItem {
    id: number;
    imageUrl: string;
}

// Mapeia exatamente as 39 imagens no formato /assets/fotoX.jpeg
export const galleryData: GalleryItem[] = Array.from({ length: 39 }, (_, index) => ({
    id: index + 1,
    imageUrl: `/assets/foto${index + 1}.jpeg`,
}));