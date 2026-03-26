export interface GalleryItem {
    id: number;
    imageUrl: string;
    caption: string;
}

// Gerador automático de 30 itens provisórios (Placeholders).
// Quando o cliente enviar as fotos, basta você apagar esse gerador
// e escrever a lista real, no mesmo formato: { id: 1, imageUrl: '/foto1.jpg', caption: 'Legenda...' }
export const galleryData: GalleryItem[] = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    // Utiliza um serviço público de placeholders para renderizar imagens de teste (800x600px)
    imageUrl: `https://picsum.photos/seed/${index + 1}/800/600`,
    caption: `Legenda provisória para a imagem ${index + 1}. Aguardando envio do cliente.`,
}));