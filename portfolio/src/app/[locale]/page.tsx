import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ProjectPageProps } from '@/types';
import { Novatrix } from 'uvcanvas';
import { bebas, montserrat } from '@/assets/fonts';


export default function HomePage({ params: { locale } }: ProjectPageProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('HomePage');
    return (
        <main className='w-full'>
            <section className='w-full h-screen flex items-center justify-center relative'>
                <h1 className={`absolute top-[140px] left-[350px] uppercase text-7xl ${bebas.className} tracking-wider z-20`}>{t('title')}</h1>
                <div className='w-[80rem] h-1/2'>
                    <Novatrix />
                </div>
                <p className={`absolute bottom-[180px] right-[350px] uppercase text-xl ${montserrat.className} tracking-wider `}>Aleksander Trujillo Prokhorenko</p>
            </section>
            <section>
                <h1>Segunda sección</h1>
            </section>
        </main>
    );
}