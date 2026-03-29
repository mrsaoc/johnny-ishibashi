'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Importamos o motor de tradução
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
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-[#111111] hover:text-[#004B23] transition-colors relative z-50"
                >
                    JOHNNY ISHIBASHI
                </Link>

                <nav className="hidden lg:flex items-center gap-10">
                    <Link
                        href="/"
                        className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                            isActive('/') ? 'text-[#004B23]' : 'text-gray-500 hover:text-[#111111]'
                        }`}
                    >
                        {t.header.home}
                    </Link>
                    <Link
                        href="/inventario"
                        className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                            isActive('/inventario') ? 'text-[#004B23]' : 'text-gray-500 hover:text-[#111111]'
                        }`}
                    >
                        {t.header.inventory}
                    </Link>
                    <Link
                        href="/galeria"
                        className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                            isActive('/galeria') ? 'text-[#004B23]' : 'text-gray-500 hover:text-[#111111]'
                        }`}
                    >
                        {t.header.gallery}
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-6 relative z-50">

                    {/* Seletor de Idiomas Ativo */}
                    <div className="flex items-center gap-3 pr-6 border-r border-gray-300">
                        <button
                            onClick={() => setLanguage('PT')}
                            className={`text-xs font-bold transition-colors ${language === 'PT' ? 'text-[#004B23]' : 'text-gray-400 hover:text-[#111111]'}`}
                        >
                            PT
                        </button>
                        <button
                            onClick={() => setLanguage('EN')}
                            className={`text-xs font-bold transition-colors ${language === 'EN' ? 'text-[#004B23]' : 'text-gray-400 hover:text-[#111111]'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('JP')}
                            className={`text-xs font-bold transition-colors ${language === 'JP' ? 'text-[#004B23]' : 'text-gray-400 hover:text-[#111111]'}`}
                        >
                            JP
                        </button>
                    </div>

                    <a
                        href="https://wa.me/5513996988700"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 bg-[#004B23] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
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

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-[#111111] focus:outline-none hover:text-[#004B23] transition-colors relative z-50 p-2 -mr-2"
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

            <div
                className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 transition-all duration-300 md:hidden ${
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
                </nav>

                <div className="pb-12 mt-auto">

                    <div className="flex items-center justify-center gap-8 mb-8">
                        <button
                            onClick={() => setLanguage('PT')}
                            className={`text-sm font-bold transition-colors ${language === 'PT' ? 'text-[#004B23] border-b-2 border-[#004B23] pb-1' : 'text-gray-400 hover:text-[#111111] pb-1'}`}
                        >
                            PT
                        </button>
                        <button
                            onClick={() => setLanguage('EN')}
                            className={`text-sm font-bold transition-colors ${language === 'EN' ? 'text-[#004B23] border-b-2 border-[#004B23] pb-1' : 'text-gray-400 hover:text-[#111111] pb-1'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('JP')}
                            className={`text-sm font-bold transition-colors ${language === 'JP' ? 'text-[#004B23] border-b-2 border-[#004B23] pb-1' : 'text-gray-400 hover:text-[#111111] pb-1'}`}
                        >
                            JP
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