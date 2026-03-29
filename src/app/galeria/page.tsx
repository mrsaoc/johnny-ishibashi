'use client';

import React from 'react';
import { galleryData } from '@/data/gallery';
import { useLanguage } from '@/context/LanguageContext';

export default function GaleriaPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col items-center w-full bg-[#F8F9FA] min-h-screen pb-20 sm:pb-32">

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

                            <div className="relative aspect-[4/3] w-full bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.imageUrl}
                                    alt={`${t.galleryPage.photoAlt} ${item.id}`}
                                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                                    loading="lazy"
                                />
                            </div>

                            {/* Área da Legenda (Caption) - Mock Data com Placeholder traduzido */}
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

        </div>
    );
}