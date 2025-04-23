// app/sitemap.ts
export default async function sitemap() {
    return [
        {
            url: 'https://studio-shay.vercel.app/',
            lastModified: new Date(),
        },
        {
            url: 'https://studio-shay.vercel.app/service',
            lastModified: new Date(),
        },
        // Adicione todas as rotas importantes
    ]
}