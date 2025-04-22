type servsType = {
    id: number;
    nome: string;
    categoria: string;
    descricao: string;
}

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
