'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/gallery';
import { useLanguage, Language } from '@/context/LanguageContext';
import ImageModal from '@/components/ImageModal';

export default function GaleriaPage() {
  const { t, language } = useLanguage();
  
  // Estado que gerencia qual aba está ativa na tela
  const [activeTab, setActiveTab] = useState<'photos' | 'links'>('photos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);

  // Base de dados local com os links oficiais fornecidos pelo cliente
  const linksData = [
    { 
      title: 'Wikipedia Oficial', 
      url: 'https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A7%E3%83%8B%E3%83%BC%E7%9F%B3%E6%A9%8B', 
      description: 'Perfil biográfico e registro histórico de carreira (em japonês).' 
    },
    { 
      title: 'Acervo Documental (Google Share)', 
      url: 'https://share.google/roeNOAHWWvKsRxzzB', 
      description: 'Arquivos adicionais, recortes de revistas e registros impressos da trajetória.' 
    },
    { 
      title: 'FC Barcelona & Rakuten (2017)', 
      url: 'https://youtube.com/watch?v=jmJKbeadac0&feature=youtu.be', 
      description: 'Registro em vídeo da coletiva de imprensa oficial ao lado de Lionel Messi, Neymar e grandes estrelas.' 
    },
    { 
      title: 'Chelsea FC vs Kawasaki Frontale (2019)', 
      url: 'https://www.chelseafc.com/en/video/highlights--kawasaki-frontale--a--19-20-h1m3g2ate61dnjlf0vfqgavgc7zspecr', 
      description: 'J.League Super Challenge: Cobertura oficial e acompanhamento da visita da lenda Marcel Desailly.' 
    }
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#F8F9FA] min-h-screen pb-20 sm:pb-32 relative">
      
      {/* Cabeçalho */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-[#111111] tracking-tight">
          {t.galleryPage.title}
        </h1>
        <div className="w-12 sm:w-16 h-1 bg-[#004B23] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6"></div>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
          {t.galleryPage.description}
        </p>

        {/* Sistema de Abas (Tab Switcher) */}
        <div className="flex justify-center gap-8 mt-10 border-b border-gray-300">
          <button 
            onClick={() => setActiveTab('photos')}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'photos' ? 'text-[#004B23] border-b-2 border-[#004B23]' : 'text-gray-400 hover:text-[#111111]'}`}
          >
            {t.galleryPage.tabPhotos}
          </button>
          <button 
            onClick={() => setActiveTab('links')}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'links' ? 'text-[#004B23] border-b-2 border-[#004B23]' : 'text-gray-400 hover:text-[#111111]'}`}
          >
            {t.galleryPage.tabLinks}
          </button>
        </div>
      </section>

      {/* Subseção: Fotos */}
      {activeTab === 'photos' && (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 animate-in fade-in duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-16">
            {galleryData.map((item) => {
              const currentCaption = item.caption ? item.caption[language as Language] : t.galleryPage.captionPlaceholder;
              const formattedNumber = item.displayNumber < 10 ? `0${item.displayNumber}` : item.displayNumber;

              return (
                <div key={item.id} className="flex flex-col group cursor-default">
                  
                  {/* Moldura Clássica */}
                  <div 
                    className="relative aspect-[4/3] w-full bg-[#E5E7EB] border border-gray-200 rounded-sm overflow-hidden shadow-sm transition-shadow duration-300 group-hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage(item.imageUrl)}
                  >
                    <div className="absolute inset-2 sm:inset-3 border border-gray-100 bg-white">
                      <Image 
                        src={item.imageUrl} 
                        alt={`${t.galleryPage.photoAlt} ${formattedNumber}`} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain transition-opacity duration-500 group-hover:opacity-90 p-1 sm:p-2"
                        quality={85}
                        priority={item.displayNumber <= 6} 
                      />

                      {/* Indicador de Expandir */}
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

                  {/* Legenda */}
                  <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5 pl-3 sm:pl-4 border-l-2 border-transparent group-hover:border-[#004B23] transition-colors duration-300">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#004B23] leading-none pt-0.5">
                      {formattedNumber}.
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed pr-2">
                      {currentCaption}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Subseção: Links */}
      {activeTab === 'links' && (
        <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-8 animate-in fade-in duration-500">
          <div className="flex flex-col gap-6">
            {linksData.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-white border border-gray-200 p-6 sm:p-8 hover:border-[#004B23] transition-colors shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#004B23] transition-colors">
                      {link.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="text-gray-300 group-hover:text-[#00A850] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Modal Lightbox */}
      {selectedImage && (
        <ImageModal 
          imageUrl={selectedImage} 
          altText={`${t.galleryPage.photoAlt}`}
          onClose={closeModal}
        />
      )}

    </div>
  );
}