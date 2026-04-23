'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col items-center w-full">

      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[#F8F9FA]">
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">

          {/* Título Principal */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#111111] leading-[1.1] tracking-tight">
            {t.home.title1} <br />
            <span className="text-[#004B23]">
              {t.home.title2}
            </span>
          </h1>

          {/* Subtítulo e Competências */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 mt-2">
            {/* O whitespace-pre-line permite ler as quebras de linha que colocamos no texto em japonês */}
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 font-sans leading-relaxed px-2 whitespace-pre-line">
              {t.home.subtitle}
            </p>
            
            <div className="flex flex-col items-center gap-2.5">
              {t.home.roles.map((role, idx) => (
                <span key={idx} className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#004B23]">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="/inventario"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#004B23] text-white w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <span className="absolute inset-y-0 left-0 w-[4px] bg-[#00A850] transition-all duration-300 group-hover:w-full group-hover:opacity-10"></span>
              <span className="absolute inset-y-0 left-0 w-[4px] bg-[#00A850]"></span>

              <span className="relative z-10 flex items-center gap-2">
                {t.home.ctaInventory}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>

            <Link href="/galeria" className="group text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#111111] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto py-2">
              <span className="relative flex items-center justify-center w-10 h-10 border border-gray-300 group-hover:border-[#111111] transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </span>
              {t.home.ctaGallery}
            </Link>
          </div>

          {/* Prova Social */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-300 w-full max-w-3xl flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500">{t.home.trust}</p>
            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 text-xs sm:text-sm md:text-base font-serif font-medium text-[#111111] px-4">
              <span>Pelé</span>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <span>Lionel Messi</span>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <span>Neymar Jr.</span>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <span>Zico</span>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <span>FIFA</span>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <span>J-League</span>
            </div>
            
            {/* Lista adicional exibida estritamente na versão em Japonês */}
            {language === 'JP' && (
              <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-sans text-gray-600 px-4 mt-2">
                <span>外務省</span>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span>JICA</span>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span>JETRO</span>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span>東京入国管理局</span>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span>東京第二弁護士会</span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Seção Rakuten */}
      <section className="w-full bg-[#FFFFFF] py-20 sm:py-32 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">

          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              <span className="text-[#004B23] font-sans font-bold text-xs sm:text-sm uppercase tracking-widest">
                {t.home.rakutenTag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.1]">
                {t.home.rakutenTitle}
              </h2>
            </div>
            
            <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {t.home.rakutenP1_1} 
              <strong className="text-[#111111] font-semibold">{t.home.rakutenP1_strong}</strong> 
              {t.home.rakutenP1_2}
            </p>
            
            {/* Condicional para evitar renderizar parágrafo vazio caso o idioma (como o JP) não tenha texto extra aqui */}
            {t.home.rakutenP2_1 && (
              <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {t.home.rakutenP2_1} 
                <strong className="text-[#111111] font-semibold">{t.home.rakutenP2_strong}</strong> 
                {t.home.rakutenP2_2}
              </p>
            )}
          </div>

          <div className="lg:col-span-7 relative pb-12 sm:pb-0">
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full bg-[#F8F9FA] rounded-sm border border-gray-200 overflow-hidden shadow-sm">
              <Image 
                src="/assets/foto13.jpeg"
                alt="Johnny Ishibashi no evento Rakuten"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto sm:translate-x-0 sm:-bottom-10 sm:-left-10 bg-white p-5 sm:p-8 border border-gray-200 max-w-sm z-20 shadow-md">
              <div className="w-8 sm:w-10 h-1 bg-[#004B23] mb-4 sm:mb-6"></div>
              <p className="font-serif text-base sm:text-lg md:text-xl text-[#111111] italic leading-tight whitespace-pre-line">
                {t.home.rakutenQuote}
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}