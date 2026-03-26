'use client';

import React, { useState } from 'react';
import { inventoryData } from '@/data/inventory';

export default function InventarioPage() {
    // Inicia com a primeira categoria (Esportiva) selecionada
    const [activeCategory, setActiveCategory] = useState(inventoryData[0].id);

    // Busca os dados da categoria ativa
    const currentCategoryData = inventoryData.find(cat => cat.id === activeCategory);

    return (
        <div className="flex flex-col items-center w-full bg-[#F8F9FA] min-h-screen pb-24">

            {/* Cabeçalho da Página */}
            <section className="w-full max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#111111] tracking-tight">
                    Inventário Profissional
                </h1>
                <p className="mt-6 text-lg text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
                    Um registro histórico de mais de 30 anos de atuação como ponte cultural nas mais prestigiadas instituições governamentais, artísticas e esportivas do mundo.
                </p>
            </section>

            {/* Container Principal */}
            <section className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12">

                {/* Menu Lateral de Categorias (Desktop) / Menu Superior (Mobile) */}
                <aside className="w-full md:w-1/3 shrink-0 flex flex-col gap-2">
                    {inventoryData.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`text-left px-6 py-4 rounded-2xl transition-all duration-300 font-sans font-semibold text-sm tracking-wide border ${
                                activeCategory === category.id
                                    ? 'bg-white text-[#004B23] border-[#00A850]/30 shadow-sm transform scale-[1.02]'
                                    : 'bg-transparent text-gray-500 border-transparent hover:bg-gray-100/50 hover:text-[#111111]'
                            }`}
                        >
                            {category.title}
                        </button>
                    ))}
                </aside>

                {/* Área de Conteúdo (Linha do Tempo) */}
                <div className="w-full md:w-2/3 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#111111] mb-10 pb-6 border-b border-gray-100">
                        {currentCategoryData?.title}
                    </h2>

                    <div className="relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-12">
                        {currentCategoryData?.items.map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-10 group">

                                {/* Ponto da Linha do Tempo */}
                                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-[#00A850] group-hover:bg-[#00A850] transition-colors duration-300"></div>

                                {/* Conteúdo */}
                                <div className="flex flex-col gap-1.5">
                  <span className="text-[#00A850] font-sans font-bold text-sm uppercase tracking-widest">
                    {item.year}
                  </span>
                                    <h3 className="text-gray-800 font-sans text-lg font-medium leading-relaxed group-hover:text-[#111111] transition-colors">
                                        {item.title}
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