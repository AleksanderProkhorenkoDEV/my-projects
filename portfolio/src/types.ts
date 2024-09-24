import { locales } from './config';

export type Locale = (typeof locales)[number];

export interface ProjectPageProps {
    params: {
        locale: Locale;
    };
}

export interface Cards {
    image: string,
    title: string,
    description: string,
    github: string,
    link: string
}

export interface Projects {
    [key: string] : Cards,
}