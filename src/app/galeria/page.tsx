'use client';

import React from 'react';
import { galleryData } from '@/data/gallery';

export default function GaleriaPage() {
    return (
        <div className="flex flex-col items-center w-full bg-[#F8F9FA] min-h-screen pb-24">

            {/* Cabeçalho da Página */}
            <section className="w-full max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#111111] tracking-tight">
                    Galeria de Mídia
                </h1>
                <p className="mt-6 text-lg text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
                    Registros visuais de atuações ao lado de gigantes do esporte, eventos institucionais e coberturas da grande mídia internacional.
                </p>
            </section>

            {/* Grid de Imagens */}
            <section className="w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {galleryData.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl aspect-[4/3] cursor-pointer"
                        >
                            {/* Imagem */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.imageUrl}
                                alt={item.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Overlay Glassmorphism para a Legenda */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/60 to-transparent pt-12 pb-6 px-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                <p className="text-white font-sans text-sm font-medium leading-snug drop-shadow-md">
                                    {item.caption}
                                </p>
                            </div>

                            {/* Etiqueta de Numeração Opcional (Design Premium) */}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#004B23] text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                                #{item.id < 10 ? `0${item.id}` : item.id}
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </div>
    );
}