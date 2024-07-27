/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'fr', 'es'],
        defaultLocale: 'es',
        domains: [
            {
                domain: 'example.com',
                defaultLocale: 'es',
            },
        ],
    },

};

export default nextConfig;
