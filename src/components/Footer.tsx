'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-gray-200 pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 mb-12 sm:mb-16">
          
          {/* Coluna 1: Nome e Resumo */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] tracking-widest uppercase">
              {t.footer.name}
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
              {t.footer.summary}
            </p>
          </div>

          {/* Coluna 2: Navegação Interna */}
          <div className="md:col-span-3 flex flex-col gap-4 sm:gap-6">
            <h3 className="font-sans text-xs font-bold text-[#111111] uppercase tracking-[0.2em]">
              {t.footer.navigation}
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="font-sans text-sm text-gray-500 hover:text-[#004B23] transition-colors w-fit">
                {t.header.home}
              </Link>
              <Link href="/inventario" className="font-sans text-sm text-gray-500 hover:text-[#004B23] transition-colors w-fit">
                {t.header.inventory}
              </Link>
              <Link href="/galeria" className="font-sans text-sm text-gray-500 hover:text-[#004B23] transition-colors w-fit">
                {t.header.gallery}
              </Link>
            </nav>
          </div>

          {/* Coluna 3: Contatos Externos */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
            <h3 className="font-sans text-xs font-bold text-[#111111] uppercase tracking-[0.2em]">
              {t.footer.contact}
            </h3>
            <div className="flex flex-col gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 font-sans text-sm text-gray-500 hover:text-[#004B23] transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                {t.footer.linkedIn}
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 font-sans text-sm text-gray-500 hover:text-[#004B23] transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {t.footer.whatsapp}
              </a>
            </div>
          </div>

        </div>

        {/* Mensagem Institucional Adicional */}
        <div className="w-full pt-6 pb-6 text-center sm:text-left">
          <p className="font-sans text-xs text-gray-500 tracking-wide sm:truncate">
            {t.footer.bottomLine}
          </p>
        </div>

        {/* Linha de Copyright e Créditos */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-8">
          <p className="font-sans text-xs text-gray-400">
            © {new Date().getFullYear()} {t.footer.name}. {t.footer.credits1}
          </p>
          <p className="font-sans text-xs text-gray-400">
            {t.footer.credits2} 
            <a 
              href="https://mrsaoc.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-1 text-[#111111] font-semibold tracking-wider uppercase hover:text-[#004B23] transition-colors duration-300"
            >
              mrsaoc
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}