import { Language } from '@/context/LanguageContext';

export interface Testimonial {
  id: string;
  author: string;
  role: Record<Language, string>;
  content: Record<Language, string>;
  images?: string[]; // Propriedade adicionada para suportar a galeria embutida
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'ruy-ramos',
    author: 'Ruy Ramos',
    role: {
      PT: 'Ex-futebolista brasileiro naturalizado japonês, amplamente reconhecido como uma das maiores lendas e pioneiros do futebol no Japão. Peça fundamental na transição do esporte no país do amadorismo para o profissionalismo, abrindo as portas para dezenas de outros atletas brasileiros.',
      EN: 'Brazilian-born naturalized Japanese former footballer, widely recognized as one of the greatest legends and pioneers of football in Japan. He was a fundamental piece in the country\'s transition of the sport from amateurism to professionalism, opening doors for dozens of other Brazilian athletes.',
      JP: '日本のサッカー界における最大のレジェンドであり、先駆者の一人として広く認められています。日本サッカーがアマチュアからプロフェッショナルへと移行する上で不可欠な存在であり、その後多くのブラジル人選手が来日する道を切り開きました。'
    },
    content: {
      PT: 'Um intérprete que além de traduzir super bem ainda consegue ajudar as esposas e filhos dos jogadores, mostrando como é o sistema e a cultura do Japão. Uma das pessoas mais confiáveis que conheci. Ele é muito fiel, íntegro e consciente do seu papel, não se deixando envolver em fofocas ou politicagens que existem numa equipe de futebol. Mantém a imparcialidade e só opina quando solicitado, sempre visando ser a ponte que leva aos objetivos, apesar de conflitos de opiniões ou emoções, mostrando com inteligência quando estamos errados.\nPara qualquer situação é o elemento mais confiável para que as pessoas se entendam. assino embaixo.',
      EN: 'An interpreter who, besides translating incredibly well, also manages to help the players\' wives and children by showing them how the system and culture work in Japan. He is one of the most trustworthy people I have ever met. He is loyal, high-integrity, and deeply aware of his role, never letting himself get caught up in the gossip or politics that exist within a football team. He maintains his impartiality and only offers his opinion when asked, always aiming to be the bridge that leads to the goals, regardless of conflicting opinions or emotions, while intelligently showing us when we are wrong.\nFor any situation, he is the most reliable element to ensure people understand each other. I fully endorse him.',
      JP: '「彼は通訳として非常に優秀なだけでなく、選手の奥様や子どもたちが日本の社会システムや文化に馴染めるようサポートもしてくれます。これまでに私が出会った中で、最も信頼できる人物の一人です。 非常に忠実で誠実、そして自分の役割を深く自覚しており、サッカーチーム内にありがちな噂話や政治的な駆け引きには一切関わりません。常に中立を保ち、意見を求められた時にだけ発言します。意見や感情の対立があっても、常に目標達成への『架け橋』となることを目指し、私たちが間違っている時には知的にそれを指摘してくれます。 どんな状況においても、人々が相互理解を深めるための最も信頼できる存在です。私が太鼓判を押します。」'
    }
  },
  {
    id: 'hiroto-kusama',
    author: '草間浩人 (Hiroto Kusama)',
    role: {
      PT: 'Influente executivo do setor de mídia e negócios esportivos no Japão, tendo ocupado cargos de liderança e posições administrativas estratégicas no jornal The Yomiuri Shimbun e na diretoria executiva do Yomiuri Giants (equipe profissional de beisebol).',
      EN: 'Prominent Japanese media and sports business executive who has held key administrative and leadership roles within The Yomiuri Shimbun and the front office of the Yomiuri Giants (professional baseball team).',
      JP: '読売新聞社および読売巨人軍（ジャイアンツ）のフロント・ビジネス部門・日本のメディア・スポーツビジネスの経営職・幹部'
    },
    content: {
      PT: 'Em preparação para a Copa do Mundo da FIFA de 2002 no Japão e na Coreia do Sul, a FIFA enviou uma delegação de cerca de dez jornalistas do mundo todo, e o Tokyo Verdy foi escolhido como o clube modelo japonês a ser inspecionado. O guia da visita foi o presidente do clube, e Johnny Ishibashi atuou como intérprete. Embora a FIFA tivesse solicitado que a visita fosse realizada em inglês, as línguas nativas dos jornalistas eram muito diversas, incluindo inglês, espanhol, português, italiano, francês, entre outras. Movido por um forte espírito de hospitalidade, Johnny demonstrou suas habilidades poliglotas, realizando a façanha sobre-humana de fazer uma interpretação multilíngue sozinho. Logo após a visita, os jornalistas romperam em aplausos calorosos e gritos de "Bravo!", oferecendo o maior dos elogios ao declarar: "A melhor parte desta inspeção foi o Johnny."',
      EN: 'In preparation for the 2002 FIFA World Cup in Japan and South Korea, FIFA dispatched a press delegation of about ten journalists from around the world, and Tokyo Verdy was selected as the representative Japanese club facility to be inspected. The tour guide was the club\'s president, and Johnny Ishibashi served as the interpreter. Although FIFA had requested that the tour be conducted in English, the journalists\' native languages were highly diverse, including English, Spanish, Portuguese, Italian, French, and others. Driven by a strong spirit of hospitality, Johnny showcased his polyglot skills, performing a superhuman feat of interpretation into multiple languages all by himself. Immediately following the tour, the journalists erupted into loud applause and cheers of "Bravo!", offering the highest praise by stating, "The best part of this inspection was Johnny."',
      JP: '2002年のサッカーワールドカップ日韓に向けてFIFAが世界各国から十名ほどの記者団を派遣し、日本を代表するクラブ施設の視察先に東京のヴェルディが選ばれた。案内役は社長で通訳はジョニー石橋。FIFAからは英語で要請されていたが、記者団は母国語が英語のほかスペイン語、ポルトガル語、イタリア語、フランス語ほか多岐にわたっていたため、サービス精神旺盛なジョニーは、Polyglotを発揮して一人多言語通訳という超人的なテクニックを披露した。視察終了直後には、記者たちから大きな拍手と「ブラボー」の歓声が沸き起こり、「今回の視察で最も良かったのはジョニー」と最大級の賛辞が贈られた。'
    }
  },
  {
    id: 'kazu-fukushima',
    author: 'Kazu Fukushima MD PhD',
    role: {
      PT: 'Médico Esportivo & Pesquisador',
      EN: 'Sports Doctor & Researcher',
      JP: 'スポーツドクター・研究者'
    },
    images: [
      '/assets/depoimento3foto1.jpeg',
      '/assets/depoimento3foto2.jpeg'
    ],
    content: {
      PT: 'Johnny Ishibashi é um intérprete extremamente confiável, com conhecimento avançado e vasta experiência prática nas áreas de esportes e medicina.\n\nEm contextos esportivos, ele precisa facilitar a comunicação fluida com uma grande variedade de pessoas, incluindo atletas, treinadores, equipe médica, funcionários administrativos e representantes da mídia, transmitindo com precisão a terminologia especializada e as nuances exclusivas de cada esporte. Da mesma forma, em contextos médicos, ele precisa de excelente capacidade para lidar com precisão com conteúdo altamente especializado, como exames, testes, explicações de planos de tratamento e orientações de reabilitação. Johnny possui essas habilidades excepcionais.\n\nParticularmente na área de medicina esportiva profissional, Johnny consegue transmitir de forma clara e precisa informações especializadas sobre planos de tratamento e condicionamento para o retorno à competição para equipe médica, atletas, treinadores, funcionários administrativos e representantes da mídia, tornando-o um recurso valioso no suporte médico esportivo internacional.\n\nComo médico esportivo, já interagi com muitos intérpretes, mas Johnny se destaca não apenas em suas habilidades linguísticas, mas também em sua compreensão da medicina esportiva, precisão, responsabilidade e consideração pelos outros. Recomendo Johnny-chan com toda a confiança para situações que exigem um alto nível de especialização, como prestar assistência médica a atletas estrangeiros e apoiar eventos médicos em competições internacionais.\n\nJohnny-chan pode contribuir significativamente para diversos intercâmbios internacionais, atuando como uma ponte entre o esporte e a medicina.',
      EN: 'Johnny Ishibashi is an extremely reliable interpreter with advanced expertise and extensive practical experience in the fields of sports and medicine.\n\nIn sports settings, he must facilitate smooth communication with a wide variety of people, including athletes, coaches, medical staff, front office staff, and media representatives, accurately conveying the specialized terminology and nuances unique to each sport. Similarly, in medical settings, he needs excellent ability to accurately handle highly specialized content such as examinations, tests, explanations of treatment plans, and rehabilitation guidance. Johnny possesses these outstanding abilities.\n\nParticularly in the field of professional sports medicine, Johnny can clearly and accurately convey specialized information regarding treatment plans and conditioning for return to competition to medical staff, athletes, coaches, front office staff, and media representatives, making him a valuable asset in international sports medical support.\n\nAs a sports doctor, I have interacted with many interpreters, but Johnny excels not only in language skills but also in his understanding of sports medicine, accuracy, responsibility, and consideration for others. I confidently recommend Johnny-chan for situations requiring a high level of expertise, such as providing medical care to overseas athletes and supporting medical events at international competitions.\n\nJohnny-chan can make a significant contribution to diverse international exchanges as a bridge between sports and medicine.',
      JP: 'ジョニー石橋君は、スポーツおよび医療分野における高度な専門知識と豊富な実務経験を兼ね備えた、極めて信頼性の高い通訳者です。\n\nスポーツ現場では、選手・指導者・メディカルスタッフのみならずフロントスタッフやメディア関係者なども含めた多種多様な人たちとのコミュニケーションを円滑に支援し、競技特有の専門用語やニュアンスを正確に伝達しなければなりません。同様に医療現場においても、診察、検査、治療方針の説明、リハビリテーション指導など、専門性の高い内容にも的確に対応できる優れた能力が必要となります。ジョニーちゃんはこれらの優れた能力を持ち合わせています。\n\n特にプロスポーツ医療の分野では、ジョニーちゃんは競技復帰に向けた治療計画やコンディショニングに関する専門的な内容を、メディカルスタッフと選手だけでなく指導者やフロントスタッフ、メディア関係者なども含めた方々に分かりやすく、誤解なく伝えることができ、国際的なスポーツ医療サポートの現場において大きな力となっています。\n\n私はスポーツドクターとして多くの通訳者と接してきましたが、ジョニーちゃんは語学力だけでなく、スポーツ医学への理解力、正確性、責任感、そして相手への配慮において非常に優れています。海外選手の受診対応や国際大会での医療サポートなど、高度な専門性が求められる場面において自信を持って推薦いたします。\n\nジョニーちゃんはスポーツと医療の架け橋として、多様な国際交流の場で大きく貢献できます。'
    }
  }
];