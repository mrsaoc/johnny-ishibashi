export interface InventoryItem {
    year: string;
    title: string;
}

export interface InventoryCategory {
    id: string;
    title: string;
    items: InventoryItem[];
}

export const inventoryData: InventoryCategory[] = [
    {
        id: "esportiva",
        title: "Interpretação Esportiva Profissional",
        items: [
            { year: "1992, 1993", title: "Tokyo Yomiuri Giants - Intérprete de equipe profissional de beisebol" },
            { year: "1995-2016", title: "J-League (Verdy Kawasaki, Urawa Reds, Nagoya Grampus Eight, Tokyo Verdy, FC Gifu) - Intérprete de clubes profissionais" },
            { year: "2000-2010", title: "Eventos de Boxe, K-1, PRIDE e artes marciais - Intérprete" },
            { year: "2000-2018", title: "Copa Kirin - Intérprete (múltiplas edições)" },
            { year: "2001-2022", title: "Kirin Challenge Cup (múltiplas edições)" },
            { year: "2002", title: "Maratona de Honolulu" },
            { year: "2004, 2017", title: "Eventos de Voleibol - Copa dos Campeões, Copa do Mundo, V.League All Stars, Seleções de Cuba e Irã" },
            { year: "2005-2016", title: "Copa do Mundo de Clubes da FIFA - Intérprete (múltiplas edições)" },
            { year: "2006-2017", title: "Clássico Mundial de Beisebol (WBC) - Intérprete (múltiplas edições)" },
            { year: "2008-2019", title: "Copa Suruga - Intérprete (múltiplas edições)" },
            { year: "2013, 2014", title: "Seleção Japonesa de Futsal - Intérprete" },
            { year: "2017", title: "EAFF East Asian Football Championship - Intérprete" },
            { year: "2019", title: "Rugby World Cup - Intérprete" },
            { year: "2021", title: "Jogos Olímpicos e Paralímpicos de Tóquio - Intérprete responsável pelo estádio de basquetebol" }
        ]
    },
    {
        id: "artistica",
        title: "Interpretação Artística e Broadway",
        items: [
            { year: "2000-2018", title: "Produções da Broadway em turnê no Japão - Intérprete de direção artística e técnica" },
            { year: "2003", title: "Sony Music Dream Factory" },
            { year: "2017", title: "BLAST! - The Music of Disney - Intérprete" },
            { year: "2017", title: "Fuerza Bruta - Intérprete trilíngue" },
            { year: "2017", title: "Concertos de Kerry Ellis e Ben Foster (Broadway) - Intérprete" },
            { year: "2018", title: "Michael Hampton Workshop" }
        ]
    },
    {
        id: "governamental",
        title: "Missões Governamentais e Institucionais",
        items: [
            { year: "2007-2019", title: "Houterasu - Centro de Suporte Jurídico do Japão - Intérprete" },
            { year: "2007-2019", title: "Departamento da Imigração do Japão - Intérprete" },
            { year: "2007-2019", title: "Ordem dos Advogados de Tóquio - Intérprete judicial" },
            { year: "2008-2018", title: "Ministério dos Negócios Estrangeiros do Japão - Intérprete em missões ODA" },
            { year: "2008-2019", title: "JICA - Agência de Cooperação Internacional do Japão - Intérprete em missões internacionais" },
            { year: "2017", title: "Comitê Organizador dos Jogos Olímpicos e Paralímpicos de 2020 para a modalidade de Voleibol" }
        ]
    },
    {
        id: "midia",
        title: "Mídia, Imprensa e Apresentação",
        items: [
            { year: "Anos diversos", title: "IPC TV - Apresentador de programas de variedades e entrevistas" },
            { year: "Anos diversos", title: "Travellers TV/SKY PerfecTV - Apresentador bilíngue do programa OOPS" },
            { year: "Anos diversos", title: "Tokyo Motor Show / Tokyo Game Show - Apresentador bilíngue" },
            { year: "2001-2018", title: "NHK World Rádio Japão - Tradutor-intérprete e locutor" },
            { year: "2018", title: "Adidas - Workshop, Palestra e encontro com fãs de Xabi Alonso" },
            { year: "2018", title: "Adidas - Workshop, Palestra e encontro com fãs de David Villa" }
        ]
    },
    {
        id: "eventos",
        title: "Eventos Internacionais e Feiras",
        items: [
            { year: "1998-2024", title: "Feiras comerciais, workshops e exposições internacionais - Intérprete e coordenador" },
            { year: "1999", title: "Tokyo Motor Show (Volkswagen)" },
            { year: "2000", title: "Tokyo Game Show (battletop.com)" },
            { year: "2001", title: "JATACOM" },
            { year: "2008", title: "Foodex Pavilhão Brasil" },
            { year: "2025", title: "Expo Japan 2025 - Intérprete contratado do representante da JICA" }
        ]
    }
];