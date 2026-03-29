import { Dictionary } from '@/context/LanguageContext';

export interface GalleryItem {
    id: number;
    imageUrl: string;
}

// Quando o cliente enviar, substitua as URLs por '/galeria/foto1.jpg', etc.
export const galleryData: GalleryItem[] = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    imageUrl: `https://picsum.photos/seed/${index + 1}/800/600`,
}));