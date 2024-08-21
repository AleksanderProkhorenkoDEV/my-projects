import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'es' as const;
export const locales = ['en', 'es'] as const;

export const pathnames = {
    '/': '/',
    '/projects': {
        en: '/projects',
        es: '/proyectos'
    },
    '/contact': {
        en: '/contact',
        es: '/contacto'
    }
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const port = process.env.PORT || 3000;
// export const host = process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : `http://localhost:${port}`;

export const host = `http://localhost:${port}`;