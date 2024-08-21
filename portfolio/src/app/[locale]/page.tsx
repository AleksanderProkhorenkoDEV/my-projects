import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ProjectPageProps } from '@/types';

export default function HomePage({ params: { locale } }: ProjectPageProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('HomePage');
    return (
        <>
            <h1>{t('title')}</h1>
        </>
    );
}