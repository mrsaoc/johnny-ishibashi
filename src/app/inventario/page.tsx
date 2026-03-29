'use client';

import React, { useState } from 'react';
import { inventoryData } from '@/data/inventory';
import { useLanguage } from '@/context/LanguageContext';

export default function InventarioPage() {
    const [activeCategory, setActiveCategory] = useState(inventoryData[0].id);
    const { t, language } = useLanguage();

    // Busca os dados da categoria ativa
    const currentCategoryData = inventoryData.find(cat => cat.id === activeCategory);

    return (
        <div className="flex flex-col items-center w-full bg-[#F8F9FA] min-h-screen pb-20 sm:pb-24">

            {/* Cabeçalho */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12 text-center">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-[#111111] tracking-tight">
                    {t.inventoryPage.title}
                </h1>
                <div className="w-12 sm:w-16 h-1 bg-[#004B23] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6"></div>
                <p className="text-base sm:text-lg text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
                    {t.inventoryPage.description}
                </p>
            </section>

            {/* Container Principal */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8 md:gap-12">

                {/* Menu Lateral - Utilizando títulos traduzidos da estrutura de dados */}
                <aside className="w-full md:w-1/3 shrink-0 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-1 pb-4 md:pb-0 scrollbar-hide snap-x">
                    {inventoryData.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`whitespace-nowrap md:whitespace-normal snap-start text-left px-5 sm:px-6 py-3 sm:py-4 transition-all duration-300 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase ${
                                activeCategory === category.id
                                    ? 'bg-white text-[#004B23] border border-gray-200 border-b-4 md:border-b border-l md:border-l-4 border-b-[#004B23] md:border-b-transparent md:border-l-[#004B23] shadow-sm'
                                    : 'bg-transparent text-gray-500 border border-transparent border-b-4 md:border-b border-l md:border-l-4 border-b-transparent md:border-l-transparent hover:bg-gray-200/50 hover:text-[#111111]'
                            }`}
                        >
                            {category.title[language]}
                        </button>
                    ))}
                </aside>

                {/* Área de Conteúdo - Utilizando itens traduzidos da estrutura de dados */}
                <div className="w-full md:w-2/3 bg-white border border-gray-200 p-6 sm:p-8 md:p-12">
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] mb-8 sm:mb-10 pb-4 sm:pb-6 border-b border-gray-200">
                        {currentCategoryData?.title[language]}
                    </h2>

                    <div className="relative border-l-2 border-gray-300 ml-2 md:ml-4 space-y-8 sm:space-y-12">
                        {currentCategoryData?.items.map((item, index) => (
                            <div key={index} className="relative pl-6 sm:pl-8 md:pl-10 group">
                                {/* Marcador */}
                                <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-white border-2 border-[#004B23]"></div>

                                {/* Conteúdo */}
                                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="text-[#004B23] font-sans font-bold text-xs sm:text-sm uppercase tracking-widest">
                    {item.year}
                  </span>
                                    <h3 className="text-gray-800 font-serif text-base sm:text-lg md:text-xl font-medium leading-relaxed group-hover:text-[#111111] transition-colors">
                                        {item.title[language]}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
}