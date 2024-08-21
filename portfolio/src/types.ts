import { locales } from './config';

export type Locale = (typeof locales)[number];

export interface ProjectPageProps {
    params: {
        locale: Locale;
    };
}