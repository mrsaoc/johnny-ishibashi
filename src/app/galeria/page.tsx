'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/gallery';
import { useLanguage } from '@/context/LanguageContext';
import ImageModal from '@/components/ImageModal';

export default function GaleriaPage() {
    const { t } = useLanguage();

    // Estado para gerenciar qual imagem está aberta (popup)
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Fecha o modal limpando o estado
    const closeModal = () => setSelectedImage(null);

    return (
        <div className="flex flex-col items-center w-full bg-[#F8F9FA] min-h-screen pb-20 sm:pb-32 relative">

            {/* Cabeçalho */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16 text-center">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-[#111111] tracking-tight">
                    {t.galleryPage.title}
                </h1>
                <div className="w-12 sm:w-16 h-1 bg-[#004B23] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6"></div>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
                    {t.galleryPage.description}
                </p>
            </section>

            {/* Grid de Imagens */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-16">

                    {galleryData.map((item) => (
                        <div key={item.id} className="flex flex-col group cursor-default">

                            {/* Moldura Clássica: Borda Branca, Fundo Cinza */}
                            <div
                                className="relative aspect-[4/3] w-full bg-[#E5E7EB] border border-gray-200 rounded-sm overflow-hidden shadow-sm transition-shadow duration-300 group-hover:shadow-lg cursor-pointer"
                                onClick={() => setSelectedImage(item.imageUrl)} // Habilita o clique
                            >
                                <div className="absolute inset-2 sm:inset-3 border border-gray-100 bg-white">
                                    <Image
                                        src={item.imageUrl}
                                        alt={`${t.galleryPage.photoAlt} ${item.id}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-contain transition-opacity duration-500 group-hover:opacity-90 p-1 sm:p-2"
                                        quality={85}
                                        priority={item.id <= 6}
                                    />

                                    {/* Indicador de Ação (Ícone de Expandir) - Sempre visível no Mobile, Hover no Desktop */}
                                    <div className="absolute bottom-2 right-2 bg-white border border-gray-200 shadow-sm p-1.5 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#004B23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <polyline points="9 21 3 21 3 15"></polyline>
                                            <line x1="21" y1="3" x2="14" y2="10"></line>
                                            <line x1="3" y1="21" x2="10" y2="14"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Área da Legenda (Caption) */}
                            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5 pl-3 sm:pl-4 border-l-2 border-transparent group-hover:border-[#004B23] transition-colors duration-300">
                <span className="font-serif text-base sm:text-lg font-bold text-[#004B23] leading-none pt-0.5">
                  {item.id < 10 ? `0${item.id}` : item.id}.
                </span>
                                <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed pr-2">
                                    {t.galleryPage.captionPlaceholder}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* Modal de Visualização da Imagem Inteira - Renderização Condicional */}
            {selectedImage && (
                <ImageModal
                    imageUrl={selectedImage}
                    altText={`${t.galleryPage.photoAlt} ${galleryData.find(i => i.imageUrl === selectedImage)?.id}`}
                    onClose={closeModal}
                />
            )}

        </div>
    );
}