import { useTranslations } from 'next-intl';
import Nav from '@/components/nav';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <>
            <Nav />
            <h1>{t('title')}</h1>
        </>
    );
}