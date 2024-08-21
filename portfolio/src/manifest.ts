import { getTranslations } from 'next-intl/server';
import { MetadataRoute } from 'next';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
    const locale = 'es';
    const t = await getTranslations({ locale, namespace: 'Manifest' });

    return {
        name: t('name'),
        start_url: '/',
    };
}