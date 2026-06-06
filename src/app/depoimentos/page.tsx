'use client';

import React from 'react';
import { useLanguage, Language } from '@/context/LanguageContext';
import { testimonialsData } from '@/data/testimonials';

export default function DepoimentosPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col items-center w-full bg-[#F8F9FA] min-h-screen pb-20 sm:pb-32 relative">
      
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-[#111111] tracking-tight">
          {t.testimonialsPage.title}
        </h1>
        <div className="w-12 sm:w-16 h-1 bg-[#004B23] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6"></div>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
          {t.testimonialsPage.description}
        </p>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-12 sm:gap-16">
        {testimonialsData.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white border border-gray-200 p-8 sm:p-12 shadow-sm flex flex-col gap-8 relative"
          >
            <div className="absolute top-8 left-8 sm:top-10 sm:left-10 text-gray-200 opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <blockquote className="relative z-10 pt-4 sm:pt-6">
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#111111] leading-relaxed whitespace-pre-line italic text-justify">
                {testimonial.content[language as Language]}
              </p>
            </blockquote>

            <div className="relative z-10 flex flex-col gap-2 pt-6 border-t border-gray-100 mt-2">
              <span className="font-sans font-bold text-[#004B23] text-lg uppercase tracking-widest">
                {testimonial.author}
              </span>
              <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-3xl">
                {testimonial.role[language as Language]}
              </p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}