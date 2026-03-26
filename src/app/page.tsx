import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
      <div className="flex flex-col items-center w-full">

        {/* Hero Section - A Primeira Impressão */}
        <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">

          {/* Elemento de fundo sutil para dar profundidade (Glow Verde Verdy) */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-gradient-to-tr from-[#00A850]/5 to-[#004B23]/5 rounded-full blur-3xl opacity-60"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

            {/* Badge de Especialidade */}
            <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-gray-200 text-[#004B23] text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm">
            Intérprete Esportivo & Corporativo
          </span>

            {/* Título Principal de Impacto */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#111111] leading-[1.1] tracking-tight">
              A voz oficial dos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004B23] to-[#00A850]">
              gigantes do esporte.
            </span>
            </h1>

            {/* Subtítulo / Resumo */}
            <p className="max-w-3xl text-lg md:text-xl text-gray-600 font-sans leading-relaxed">
              Com domínio de quatro idiomas, atua como a ponte precisa entre lendas mundiais e equipes internacionais. A técnica excepcional aliada à sensibilidade cultural.
            </p>

            {/* Call to Actions (CTAs) */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
              <Link
                  href="/inventario"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] focus:outline-none shadow-md"
              >
                {/* Gradiente animado simulando a camisa */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#00A850] via-[#004B23] to-[#00A850] animate-gradient-x transition-all duration-500"></span>

                <span className="relative flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#004B23] transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
                Explorar Inventário
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
              </Link>

              <Link href="/galeria" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#111111] transition-colors flex items-center gap-2">
                Ver Galeria
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Seção de Autoridade - O Caso Rakuten 2017 */}
        <section className="w-full bg-white py-24 px-6 border-t border-gray-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
                Respeitando o protagonismo.
              </h2>
              <p className="text-gray-600 font-sans text-lg leading-relaxed">
                Sua capacidade de transmitir não apenas as palavras, mas o tom e o humor fiel de cada atleta o tornou um dos intérpretes mais confiáveis para as grandes marcas globais.
              </p>
              <p className="text-gray-600 font-sans text-lg leading-relaxed">
                Um dos momentos que definem sua excelência estratégica ocorreu no evento da Rakuten em 2017, atuando na coletiva de imprensa oficial ao lado de Lionel Messi, Neymar, Gerard Piqué e Arda Turan.
              </p>
            </div>

            {/* Espaço reservado para a foto histórica do evento */}
            <div className="relative aspect-[4/3] w-full bg-[#F8F9FA] border border-gray-200 rounded-3xl overflow-hidden shadow-lg group flex items-center justify-center">
              <div className="text-gray-400 font-sans text-sm tracking-widest uppercase text-center px-4">
                [ Inserir Foto: Johnny no evento Rakuten 2017 ]
              </div>
              {/* Efeito sutil de hover na imagem quando ela existir */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

          </div>
        </section>

      </div>
  );
}