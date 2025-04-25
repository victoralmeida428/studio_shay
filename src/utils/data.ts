type servsType = {
    id: number;
    nome: string;
    categoria: string;
    descricao: string;
}

type priceType = {
    id: number;
    nome: string;
    valor: number;
    categoria: string;
}


export const PRICES: priceType[] = [
    // SOBRANCELHA
    { id: 1, categoria: "Sobrancelha", nome: "Sem henna", valor: 45 },
    { id: 2, categoria: "Sobrancelha", nome: "Com henna ou tinta", valor: 60 },

    // FACIAL
    { id: 3, categoria: "Facial", nome: "Depilação face linha", valor: 80 },

    // CORPORAL (primeira seção)
    { id: 4, categoria: "Corporal", nome: "Esfoliação", valor: 70 },
    { id: 5, categoria: "Corporal", nome: "Banho dourado", valor: 55 },
    { id: 6, categoria: "Corporal", nome: "Esfoliação + banho dourado", valor: 120 },
    { id: 7, categoria: "Corporal", nome: "Axila + meia perna + virilha", valor: 90 },
    { id: 8, categoria: "Corporal", nome: "Sobrancelha + buço", valor: 60 },

    // CORPORAL (segunda seção)
    { id: 9, categoria: "Corporal", nome: "Axila", valor: 25 },
    { id: 10, categoria: "Corporal", nome: "Buço", valor: 20 },
    { id: 11, categoria: "Corporal", nome: "1/2 Perna", valor: 35 },
    { id: 12, categoria: "Corporal", nome: "Perna Toda", valor: 60 },
    { id: 13, categoria: "Corporal", nome: "Nariz", valor: 20 },
    { id: 14, categoria: "Corporal", nome: "Queixo", valor: 18 },
    { id: 15, categoria: "Corporal", nome: "Rosto Todo", valor: 80 },
    { id: 16, categoria: "Corporal", nome: "Orelha", valor: 20 },
    { id: 17, categoria: "Corporal", nome: "Abdômen", valor: 35 },
    { id: 18, categoria: "Corporal", nome: "Costas", valor: 35 },
    { id: 19, categoria: "Corporal", nome: "1/2 Braço", valor: 35 },
    { id: 20, categoria: "Corporal", nome: "Braço", valor: 65 }
];


export const SERVICOS: servsType[] = [
    {
        id: 1,
        nome: "Designer de sobrancelhas",
        categoria: "Sobrancelhas",
        descricao:
            "Técnica personalizada que realça o formato natural das suas sobrancelhas, garantindo harmonia e expressão ao seu olhar.",
    },
    {
        id: 2,
        nome: "Brow Lamination",
        categoria: "Sobrancelhas",
        descricao:
            "Alisamento temporário dos fios que proporciona sobrancelhas alinhadas, volumosas e bem definidas por semanas.",
    },
    {
        id: 3,
        nome: "Micropigmentação",
        categoria: "Sobrancelhas",
        descricao:
            "Procedimento semipermanente que corrige falhas e realça o desenho das sobrancelhas, com aspecto natural e duradouro.",
    },
    {
        id: 4,
        nome: "Hidratação labial e de sobrancelhas",
        categoria: "Hidratação",
        descricao:
            "Tratamento nutritivo que devolve maciez, viço e hidratação intensa aos lábios e sobrancelhas ressecadas.",
    },
    {
        id: 5,
        nome: "Hidra Gloss",
        categoria: "Labial",
        descricao:
            "Técnica de hidratação profunda que promove o rejuvenescimento labial, deixando os lábios mais saudáveis, brilhantes e volumosos.",
    },
    {
        id: 6,
        nome: "Depilação (linha, cera e corporal)",
        categoria: "Depilação",
        descricao:
            "Serviço completo com técnicas de linha, cera quente ou fria para remoção dos pelos de forma eficaz, segura e duradoura.",
    },
    {
        id: 7,
        nome: "Esfoliação corporal",
        categoria: "Corporal",
        descricao:
            "Remove as células mortas, suaviza a pele e estimula a renovação celular, proporcionando um toque sedoso e aparência mais saudável.",
    },
    {
        id: 8,
        nome: "Banho dourado",
        categoria: "Corporal",
        descricao:
            "Tratamento que uniformiza o tom da pele com leve dourado, nutre e hidrata, ideal para ocasiões especiais e realce do bronze.",
    }
];
