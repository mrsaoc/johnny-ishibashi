'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
    imageUrl: string;
    altText: string;
    onClose: () => void;
}

export default function ImageModal({ imageUrl, altText, onClose }: ImageModalProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Adiciona listener para fechar com a tecla ESC
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Impede que cliques dentro do modal fechem o popup
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/95 p-4 sm:p-6 transition-opacity duration-300"
            onClick={handleOverlayClick}
            aria-label="Modal de visualização de imagem"
            role="dialog"
        >

            {/* Container principal do modal */}
            <div className="relative w-full max-w-7xl h-full flex flex-col justify-center gap-5">

                {/* Botão Fechar Minimalista */}
                <button
                    onClick={onClose}
                    className="absolute -top-10 -right-2 text-white hover:text-[#00A850] transition-colors p-2 -mr-2"
                    aria-label="Fechar popup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Container da Imagem Inteira */}
                <div className="relative aspect-[4/3] w-full bg-[#FFFFFF] border-4 border-white/5 shadow-2xl overflow-hidden rounded-sm transition-opacity duration-300">

                    {/* Spinner de Carregamento Minimalista */}
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                            <div className="w-8 h-8 border-4 border-gray-100 border-t-[#00A850] rounded-full animate-spin"></div>
                        </div>
                    )}

                    <Image
                        src={imageUrl}
                        alt={altText}
                        fill
                        className={`object-contain transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
                        quality={95} // Alta qualidade no popup
                        onLoadingComplete={() => setLoading(false)}
                    />
                </div>

                {/* Legenda Opcional */}
                <div className="text-center">
                    <p className="text-white text-base sm:text-lg font-serif italic">{altText}</p>
                </div>

            </div>

        </div>
    );
}