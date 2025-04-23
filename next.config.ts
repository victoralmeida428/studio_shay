// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async headers() {
        const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: isProduction ? 'index, follow' : 'noindex, nofollow',
                    },
                    {
                        key: 'Cache-Control',
                        value: isProduction
                            ? 'public, max-age=3600, stale-while-revalidate=86400'
                            : 'no-cache',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
