'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

const FlagBR = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504" className="w-7 sm:w-8 h-auto rounded-[2px] shadow-sm">
        <rect width="720" height="504" fill="#009b3a"/>
        <polygon points="360,86.4 633.6,252 360,417.6 86.4,252" fill="#fedf00"/>
        <circle cx="360" cy="252" r="100.8" fill="#002776"/>
    </svg>
);

const FlagUS = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="w-7 sm:w-8 h-auto rounded-[2px] shadow-sm">
        <rect width="7410" height="3900" fill="#b22234"/>
        <path d="M0,300H7410V600H0ZM0,900H7410V1200H0ZM0,1500H7410V1800H0ZM0,2100H7410V2400H0ZM0,2700H7410V3000H0ZM0,3300H7410V3600H0Z" fill="#fff"/>
        <rect width="2964" height="2100" fill="#3c3b6e"/>
    </svg>
);

const FlagJP = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-7 sm:w-8 h-auto rounded-[2px] shadow-sm border border-gray-200">
        <rect width="900" height="600" fill="#fff"/>
        <circle cx="450" cy="300" r="180" fill="#bc002d"/>
    </svg>
);

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const isActive = (path: string) => pathname === path;
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                    ? 'bg-white shadow-sm py-4 border-b border-gray-200'
                    : 'bg-[#F8F9FA] py-6 md:py-8'
            }`}
        >
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">

                {/* 1. COLUNA ESQUERDA: Logo */}
                <div className="flex xl:flex-1 justify-start z-50">
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-[#111111] hover:text-[#004B23] transition-colors whitespace-nowrap"
                    >
                        JOHNNY ISHIBASHI
                    </Link>
                </div>

                {/* 2. COLUNA CENTRAL: Navegação (Sempre no meio absoluto) */}
                <nav className="hidden xl:flex justify-center items-center gap-5 2xl:gap-8">
                    <Link
                        href="/"
                        className={`text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                            isActive('/') ? 'text-[#004B23]' : 'text-gray-500 hover:text-[#111111]'
                        }`}
                    >
                        {t.header.home}
                    </Link>
                    <Link
                        href="/inventario"
                        className={`text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                            isActive('/inventario') ? 'text-[#004B23]' : 'text-gray-500 hover:text-[#111111]'
                        }`}
                    >
                        {t.header.inventory}
                    </Link>
                    <Link
                        href="/galeria"
                        className={`text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                            isActive('/galeria') ? 'text-[#004B23]' : 'text-gray-500 hover:text-[#111111]'
                        }`}
                    >
                        {t.header.gallery}
                    </Link>
                    <Link
                        href="/depoimentos"
                        className={`text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                            isActive('/depoimentos') ? 'text-[#004B23]' : 'text-gray-500 hover:text-[#111111]'
                        }`}
                    >
                        {t.header.testimonials}
                    </Link>
                </nav>

                {/* 3. COLUNA DIREITA: Bandeiras e Contato (Sempre fixos na direita) */}
                <div className="hidden xl:flex xl:flex-1 justify-end items-center gap-5 relative z-50">
                    
                    <div className="flex items-center gap-4 pr-5 border-r border-gray-300">
                        <button
                            onClick={() => setLanguage('PT')}
                            title="Português"
                            className={`transition-all duration-300 hover:scale-110 ${language === 'PT' ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale hover:grayscale-0'}`}
                        >
                            <FlagBR />
                        </button>
                        <button
                            onClick={() => setLanguage('EN')}
                            title="English"
                            className={`transition-all duration-300 hover:scale-110 ${language === 'EN' ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale hover:grayscale-0'}`}
                        >
                            <FlagUS />
                        </button>
                        <button
                            onClick={() => setLanguage('JP')}
                            title="日本語"
                            className={`transition-all duration-300 hover:scale-110 ${language === 'JP' ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale hover:grayscale-0'}`}
                        >
                            <FlagJP />
                        </button>
                    </div>

                    <a
                        href="https://wa.me/5513996988700"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 bg-[#004B23] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00A850] transform translate-y-[1px] group-hover:translate-y-0 transition-transform duration-300"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            {t.header.contact}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </span>
                    </a>
                </div>

                {/* Botão Menu Mobile */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="xl:hidden text-[#111111] focus:outline-none hover:text-[#004B23] transition-colors relative z-50 p-2 -mr-2"
                    aria-label="Toggle Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMobileMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        ) : (
                            <>
                                <line x1="4" x2="20" y1="12" y2="12"></line>
                                <line x1="4" x2="20" y1="6" y2="6"></line>
                                <line x1="4" x2="20" y1="18" y2="18"></line>
                            </>
                        )}
                    </svg>
                </button>

            </div>

            {/* Menu Mobile Expandido */}
            <div
                className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 transition-all duration-300 xl:hidden ${
                    isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
            >
                <nav className="flex flex-col gap-8 flex-grow">
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={`text-2xl font-serif font-bold tracking-widest border-b border-gray-100 pb-4 ${
                            isActive('/') ? 'text-[#004B23]' : 'text-[#111111]'
                        }`}
                    >
                        {t.header.home}
                    </Link>
                    <Link
                        href="/inventario"
                        onClick={closeMobileMenu}
                        className={`text-2xl font-serif font-bold tracking-widest border-b border-gray-100 pb-4 ${
                            isActive('/inventario') ? 'text-[#004B23]' : 'text-[#111111]'
                        }`}
                    >
                        {t.header.inventory}
                    </Link>
                    <Link
                        href="/galeria"
                        onClick={closeMobileMenu}
                        className={`text-2xl font-serif font-bold tracking-widest border-b border-gray-100 pb-4 ${
                            isActive('/galeria') ? 'text-[#004B23]' : 'text-[#111111]'
                        }`}
                    >
                        {t.header.gallery}
                    </Link>
                    <Link
                        href="/depoimentos"
                        onClick={closeMobileMenu}
                        className={`text-2xl font-serif font-bold tracking-widest border-b border-gray-100 pb-4 ${
                            isActive('/depoimentos') ? 'text-[#004B23]' : 'text-[#111111]'
                        }`}
                    >
                        {t.header.testimonials}
                    </Link>
                </nav>

                <div className="pb-12 mt-auto">

                    <div className="flex items-center justify-center gap-10 mb-8">
                        <button
                            onClick={() => setLanguage('PT')}
                            className={`transition-transform duration-300 ${language === 'PT' ? 'opacity-100 scale-110' : 'opacity-40 grayscale hover:grayscale-0'}`}
                        >
                            <FlagBR />
                        </button>
                        <button
                            onClick={() => setLanguage('EN')}
                            className={`transition-transform duration-300 ${language === 'EN' ? 'opacity-100 scale-110' : 'opacity-40 grayscale hover:grayscale-0'}`}
                        >
                            <FlagUS />
                        </button>
                        <button
                            onClick={() => setLanguage('JP')}
                            className={`transition-transform duration-300 ${language === 'JP' ? 'opacity-100 scale-110' : 'opacity-40 grayscale hover:grayscale-0'}`}
                        >
                            <FlagJP />
                        </button>
                    </div>

                    <a
                        href="https://wa.me/5513996988700"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-[#004B23] text-white w-full py-4 text-sm font-bold uppercase tracking-[0.2em] shadow-md"
                    >
                        {t.header.contact}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}