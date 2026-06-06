'use client';

import React, { useState } from 'react';
import { useLanguage, Language } from '@/context/LanguageContext';
import { inventoryData } from '@/data/inventory';

export default function InventarioPage() {
  const { t, language } = useLanguage();
  
  const [activeCategory, setActiveCategory] = useState(inventoryData[0].id);
  const activeData = inventoryData.find(cat => cat.id === activeCategory);

  return (
    <div className="flex flex-col items-center w-full bg-[#F8F9FA] min-h-screen pb-20 sm:pb-32 relative">
      
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-[#111111] tracking-tight">
          {t.inventoryPage.title}
        </h1>
        <div className="w-12 sm:w-16 h-1 bg-[#004B23] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6"></div>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
          {t.inventoryPage.description}
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="lg:w-1/3 flex flex-col gap-2">
            {inventoryData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-left px-4 py-3 sm:py-4 font-sans text-sm sm:text-base font-bold transition-all duration-300 border-l-4 ${
                  activeCategory === category.id 
                    ? 'border-[#004B23] text-[#004B23] bg-white shadow-sm' 
                    : 'border-transparent text-gray-500 hover:text-[#111111] hover:bg-white/50'
                }`}
              >
                {category.title[language as Language]}
              </button>
            ))}
          </div>

          <div className="lg:w-2/3 bg-white p-6 sm:p-10 shadow-sm border border-gray-100 min-h-[500px]">
            {activeData && (
              <div className="flex flex-col">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-10 border-b border-gray-200 pb-4">
                  {activeData.title[language as Language]}
                </h2>

                <div className="flex flex-col gap-8 relative">
                  <div className="absolute top-2 bottom-2 left-[5px] sm:left-[7px] w-[2px] bg-gray-200"></div>

                  {activeData.items.map((item, idx) => (
                    <div key={idx} className="relative flex items-start gap-6 sm:gap-8 group">
                      
                      <div className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 mt-1.5 bg-white border-2 border-[#004B23] rounded-sm group-hover:bg-[#004B23] transition-colors duration-300"></div>
                      
                      <div className="flex flex-col gap-1 sm:gap-2 pb-6 w-full">
                        <span className="font-sans text-xs sm:text-sm font-bold tracking-widest text-[#004B23] uppercase">
                          {typeof item.year === 'string' ? item.year : item.year[language as Language]}
                        </span>
                        
                        <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                          {item.title[language as Language]}
                        </p>
                        
                        {item.url && (
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-2 text-xs sm:text-sm font-bold text-gray-500 hover:text-[#004B23] transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            {t.inventoryPage.viewLink}
                          </a>
                        )}
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}