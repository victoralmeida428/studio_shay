import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Studio's Shay",
    description: "Beleza, cuidado e propósito",
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
