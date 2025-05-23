import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Studio's Shay - Beleza, cuidado e propósito",
        template: "%s | Studio's Shay"
    },
    description: "Studio especializado em design de sobrancelhas, micropigmentação e tratamentos de beleza no Rio de Janeiro. Agende seu horário!",
    keywords: [
        "design de sobrancelhas",
        "micropigmentação",
        "beleza",
        "estética",
        "brow lamination",
        "hidratação labial",
        "depilação",
        "Rio de Janeiro",
        "studio shay",
        "shay"
    ],
    metadataBase: new URL('https://studio-shay.com.br/'), // IMPORTANTE!
    alternates: {
        canonical: '/',
    },
    verification:{
        google: "Qi9f_dKWLyZjGpaGa9M_tCET3dpifGwDJmcuUKpIkHs"
    },
    openGraph: {
        title: "Studio's Shay",
        description: "Studio especializado em design de sobrancelhas e tratamentos de beleza",
        url: "https://www.studio-shay.com.br/",
        siteName: "Studio's Shay",
        images: [
            {
                url: "/logo2.png",
                width: 1200,
                height: 630,
                alt: "Studio's Shay - Transformando sua beleza",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    manifest: "/manifest.json",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" }
        ],
        apple: [
            { url: "/apple-icon-57x57.png", sizes: "57x57" },
            { url: "/apple-icon-60x60.png", sizes: "60x60" },
            { url: "/apple-icon-72x72.png", sizes: "72x72" },
            { url: "/apple-icon-76x76.png", sizes: "76x76" },
            { url: "/apple-icon-114x114.png", sizes: "114x114" },
            { url: "/apple-icon-120x120.png", sizes: "120x120" },
            { url: "/apple-icon-144x144.png", sizes: "144x144" },
            { url: "/apple-icon-152x152.png", sizes: "152x152" },
            { url: "/apple-icon-180x180.png", sizes: "180x180" }
        ],
        other: [
            {
                rel: "msapplication-TileImage",
                url: "/ms-icon-144x144.png",
            }
        ]
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" data-kantu="1">
        <body className="scroll-behavior">
        <div className="bg-gray-100 min-h-screen mx-auto">{children}</div>
        </body>
        </html>
    );
}
