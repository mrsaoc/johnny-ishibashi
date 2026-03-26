'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-auto">
            <div className="max-w-7xl mx-auto px-6">

                {/* Grid de Informações Principais */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

                    {/* Coluna 1: Marca e Resumo */}
                    <div className="flex flex-col gap-5">
                        <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-[#111111] hover:text-[#004B23] transition-colors w-max">
                            JOHNNY ISHIBASHI
                        </Link>
                        <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-xs">
                            A ponte precisa entre lendas do desporto, instituições globais e o mercado asiático. Excelência em interpretação simultânea e consecutiva.
                        </p>
                    </div>

                    {/* Coluna 2: Navegação Rápida */}
                    <div className="flex flex-col gap-5 md:pl-10">
                        <h4 className="font-sans font-bold text-[#111111] uppercase tracking-widest text-xs">
                            Navegação
                        </h4>
                        <nav className="flex flex-col gap-3.5">
                            <Link href="/" className="text-gray-500 hover:text-[#004B23] transition-colors text-sm font-medium w-max">
                                Início
                            </Link>
                            <Link href="/inventario" className="text-gray-500 hover:text-[#004B23] transition-colors text-sm font-medium w-max">
                                Inventário Profissional
                            </Link>
                            <Link href="/galeria" className="text-gray-500 hover:text-[#004B23] transition-colors text-sm font-medium w-max">
                                Galeria de Mídia
                            </Link>
                        </nav>
                    </div>

                    {/* Coluna 3: Contatos e Redes */}
                    <div className="flex flex-col gap-5">
                        <h4 className="font-sans font-bold text-[#111111] uppercase tracking-widest text-xs">
                            Contacto Profissional
                        </h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-500 hover:text-[#004B23] transition-colors text-sm font-medium w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                LinkedIn Oficial
                            </a>
                            <a href="https://wa.me/5513996988700" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-500 hover:text-[#004B23] transition-colors text-sm font-medium w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                Assessoria / WhatsApp
                            </a>
                        </div>
                    </div>

                </div>

                {/* Linha Divisória e Copyright */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-xs font-sans text-center md:text-left">
                        &copy; {currentYear} Johnny Ishibashi. Todos os direitos reservados.
                    </p>

                </div>

            </div>
        </footer>
    );
}