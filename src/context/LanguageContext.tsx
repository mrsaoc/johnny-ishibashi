'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'PT' | 'EN' | 'JP';

// Tipagem completa do dicionário
export interface Dictionary {
    header: { home: string; inventory: string; gallery: string; contact: string; };
    footer: { summary: string; navigation: string; contact: string; linkedIn: string; whatsapp: string; credits1: string; credits2: string; };
    home: { title1: string; title2: string; subtitle: string; ctaInventory: string; ctaGallery: string; trust: string; rakutenTag: string; rakutenTitle: string; rakutenP1_1: string; rakutenP1_strong: string; rakutenP1_2: string; rakutenP2_1: string; rakutenP2_strong: string; rakutenP2_2: string; rakutenPhotoHolder: string; rakutenQuote: string; };
    inventoryPage: { title: string; description: string; };
    galleryPage: { title: string; description: string; photoAlt: string; captionPlaceholder: string; };
}

const translations: Record<Language, Dictionary> = {
    PT: {
        header: { home: 'Início', inventory: 'Inventário', gallery: 'Galeria', contact: 'Falar com Johnny' },
        footer: {
            summary: 'A ponte precisa entre lendas do desporto, instituições globais e o mercado asiático. Excelência em interpretação simultânea e consecutiva.',
            navigation: 'Navegação', contact: 'Contacto Profissional', linkedIn: 'LinkedIn Oficial', whatsapp: 'Assessoria / WhatsApp',
            credits1: 'Todos os direitos reservados.', credits2: 'Desenvolvido por'
        },
        home: {
            title1: 'A voz oficial dos', title2: 'gigantes do esporte.',
            subtitle: 'Com domínio de quatro idiomas, atua como a ponte exata entre lendas mundiais e equipes internacionais. A técnica impecável aliada à sensibilidade cultural.',
            ctaInventory: 'Explorar Inventário', ctaGallery: 'Ver Galeria', trust: 'Excelência validada ao lado de',
            rakutenTag: 'A Arte da Interpretação', rakutenTitle: 'Respeitando o protagonismo.',
            rakutenP1_1: 'Sua capacidade de transmitir não apenas as palavras, mas o ', rakutenP1_strong: 'tom e o humor fiel', rakutenP1_2: ' de cada atleta o tornou um dos intérpretes mais confiáveis para as grandes marcas globais e turnês asiáticas.',
            rakutenP2_1: 'Um dos momentos que definem sua excelência estratégica ocorreu no evento da ', rakutenP2_strong: 'Rakuten em 2017', rakutenP2_2: ', atuando na coletiva de imprensa oficial garantindo uma comunicação fluida entre Lionel Messi, Neymar, Gerard Piqué e Arda Turan.',
            rakutenPhotoHolder: '[ Inserir Foto: Johnny no evento Rakuten ]',
            rakutenQuote: '"Não basta traduzir as palavras. É preciso reproduzir fielmente a personalidade de cada lenda."',
        },
        inventoryPage: {
            title: 'Inventário Profissional',
            description: 'Um registro histórico de mais de 30 anos de atuação como ponte cultural nas mais prestigiadas instituições governamentais, artísticas e esportivas do mundo.',
        },
        galleryPage: {
            title: 'Galeria de Mídia',
            description: 'Registros visuais e documentais de atuações ao lado de gigantes do esporte, eventos institucionais e coberturas da grande mídia internacional.',
            photoAlt: 'Registro fotográfico',
            captionPlaceholder: 'Legenda provisória. Aguardando envio do material do cliente.',
        }
    },
    EN: {
        header: { home: 'Home', inventory: 'Inventory', gallery: 'Gallery', contact: 'Contact Johnny' },
        footer: {
            summary: 'The precise bridge between sports legends, global institutions, and the Asian market. Excellence in simultaneous and consecutive interpretation.',
            navigation: 'Navigation', contact: 'Professional Contact', linkedIn: 'Official LinkedIn', whatsapp: 'Inquiries / WhatsApp',
            credits1: 'All rights reserved.', credits2: 'Developed by'
        },
        home: {
            title1: 'The official voice of', title2: 'sports giants.',
            subtitle: 'Mastering four languages, he acts as the precise bridge between global legends and international teams. Flawless technique combined with cultural sensitivity.',
            ctaInventory: 'Explore Inventory', ctaGallery: 'View Gallery', trust: 'Excellence validated alongside',
            rakutenTag: 'The Art of Interpretation', rakutenTitle: 'Respecting the spotlight.',
            rakutenP1_1: 'His ability to convey not just the words, but the ', rakutenP1_strong: 'faithful tone and humor', rakutenP1_2: ' of each athlete has made him one of the most trusted interpreters for global brands and Asian tours.',
            rakutenP2_1: 'One of the defining moments of his strategic excellence occurred at the ', rakutenP2_strong: 'Rakuten event in 2017', rakutenP2_2: ', acting in the official press conference ensuring fluid communication between Lionel Messi, Neymar, Gerard Piqué, and Arda Turan.',
            rakutenPhotoHolder: '[ Insert Photo: Johnny at Rakuten event ]',
            rakutenQuote: '"It is not enough to translate words. One must faithfully reproduce the personality of each legend."',
        },
        inventoryPage: {
            title: 'Professional Inventory',
            description: 'A historical record of over 30 years of excellence serving as a cultural bridge across the world\'s most prestigious governmental, artistic, and sporting institutions.',
        },
        galleryPage: {
            title: 'Media Gallery',
            description: 'Visual and documentary records of performances alongside sports giants, institutional events, and major international media coverage.',
            photoAlt: 'Photographic record',
            captionPlaceholder: 'Provisional caption. Awaiting material from client.',
        }
    },
    JP: {
        header: { home: 'ホーム', inventory: '経歴・実績', gallery: 'ギャラリー', contact: 'お問い合わせ' },
        footer: {
            summary: 'スポーツ、グローバル機関、アジア市場を繋ぐ正確な架け橋。同時通訳と逐次通訳の卓越性。',
            navigation: 'ナビゲーション', contact: 'お問い合わせ', linkedIn: '公式LinkedIn', whatsapp: '広報 / WhatsApp',
            credits1: 'All rights reserved.', credits2: '開発：'
        },
        home: {
            title1: 'スポーツ界の巨人の', title2: '公式な声。',
            subtitle: '4か国語を操り、世界的なレジェンドと国際チームの架け橋として活躍。完璧な技術と文化的な感性を兼ね備えています。',
            ctaInventory: '経歴を見る', ctaGallery: 'ギャラリーを見る', trust: '共に検証された卓越性',
            rakutenTag: '通訳の芸術', rakutenTitle: '主役を尊重する。',
            rakutenP1_1: '言葉だけでなく、各アスリートの', rakutenP1_strong: '忠実なトーンとユーモア', rakutenP1_2: 'を伝える彼の能力は、グローバルブランドやアジアツアーで最も信頼される通訳者の一人となりました。',
            rakutenP2_1: '彼の戦略的卓越性を決定づける瞬間の一つは、', rakutenP2_strong: '2017年の楽天イベント', rakutenP2_2: 'で起こり、公式記者会見でリオネル・メッシ、ネイマール、ジェラール・ピケ、アルダ・トゥラン間の円滑なコミュニケーションを確保しました。',
            rakutenPhotoHolder: '[ 写真挿入: 楽天イベントでのジョニー ]',
            rakutenQuote: '「言葉を翻訳するだけでは不十分です。各レジェンドの個性を忠実に再現しなければなりません。」',
        },
        inventoryPage: {
            title: '経歴・実績',
            description: '世界で最も権威ある政府機関、芸術機関、スポーツ機関において、文化の架け橋として30年以上にわたり卓越した実績を残してきた歴史的記録。',
        },
        galleryPage: {
            title: 'ギャラリー',
            description: 'スポーツ界の巨人、機関イベント、主要な国際メディア報道と並んで行われたパフォーマンスの視覚的および記録的記録。',
            photoAlt: '写真記録',
            captionPlaceholder: '仮のキャプション。クライアントからの資料提供待ち。',
        }
    }
};

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('PT');
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage deve ser utilizado dentro de um LanguageProvider');
    }
    return context;
}