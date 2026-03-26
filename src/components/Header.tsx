'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Efeito para detectar o scroll e aplicar o "Floating Glass"
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-[#F8F9FA]/85 backdrop-blur-md shadow-sm py-4'
                    : 'bg-transparent py-8'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo / Nome - Fonte Serifada para Autoridade */}
                <Link
                    href="/"
                    className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#111111] hover:text-[#004B23] transition-colors"
                >
                    JOHNNY ISHIBASHI
                </Link>

                {/* Navegação Desktop - Fonte Sans-Serif Limpa */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/" className="text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-[#111111] transition-colors">
                        Início
                    </Link>
                    <Link href="/inventario" className="text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-[#111111] transition-colors">
                        Inventário
                    </Link>
                    <Link href="/galeria" className="text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-[#111111] transition-colors">
                        Galeria
                    </Link>
                </nav>

                {/* Call to Action (Botão Verdy) */}
                <div className="hidden md:block">
                    <Link
                        href="#contato"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] focus:outline-none"
                    >
                        {/* Gradiente animado no fundo simulando a camisa */}
                        <span className="absolute inset-0 bg-gradient-to-r from-[#00A850] via-[#004B23] to-[#00A850] animate-gradient-x transition-all duration-500"></span>

                        {/* Área interna do botão */}
                        <span className="relative flex items-center gap-2 rounded-full bg-[#F8F9FA] px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-[#004B23] transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
              Falar com Johnny
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
                    </Link>
                </div>

                {/* Menu Mobile Toggle */}
                <button className="md:hidden text-[#111111] focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </button>

            </div>
        </header>
    );
}