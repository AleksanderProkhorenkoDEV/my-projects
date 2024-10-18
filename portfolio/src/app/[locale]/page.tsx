import ParallaxText from '@/components/scroll-velocity/scroll-velocity';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Grid } from '@/components/grid-layout/grid-layout';
import { bebas, montserrat } from '@/assets/fonts';
import { useTranslations } from 'next-intl';
import { ProjectPageProps } from '@/types';
import { Novatrix } from 'uvcanvas';
import Image from 'next/image';
import Link from 'next/link';
import cards from '@/components/grid-layout/Home/Cards';


export default function HomePage({ params: { locale } }: ProjectPageProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('HomePage');
    return (
        <main className='w-full flex flex-col gap-8 pb-8'>
            <section className='w-full h-screen flex flex-col items-center justify-center gap-4 overflow-hidden'>
                <h1 className={`w-[75rem] uppercase text-7xl ${bebas.className} tracking-wider z-20 1k3:text-6xl 1k2:text-4xl 1k2:w-[65rem] 1k:text-2xl 1k:w-[55rem] 1k:absolute 1k:left-[420px] 1k:top-[198px] 1k:w-fit`}>{t('title')}</h1>
                <div className='relative w-[80rem] h-1/2 1k3:w-[70rem] 1k2:w-[60rem] 1k:w-[45rem] 1k:hidden'>
                    <div className='w-full h-full '>
                        <Novatrix />
                    </div>
                </div>
                <div className='hidden 1k:block 1k:w-full 1k:h-full 1k:relative m-auto'>
                    <Image
                        src={'/assets/images/logo.png'}
                        width={250}
                        height={250}
                        alt='logo aleksander'
                        className='absolute left-[400px] top-[298px]  rotate-horizontal' />
                    <Novatrix />
                </div>
                <p className={`w-[75rem] text-end uppercase text-xl ${montserrat.className} tracking-wider 1k3:text-lg 1k2:text-base 1k2:w-[65rem] 1k:w-[55rem]  1k:absolute 1k:w-fit 1k:left-[350px] 1k:top-[698px]`}>Aleksander Trujillo Prokhorenko</p>
                <article className='flex justify-between text-white w-full bg-[#2D2A32] py-6 px-10 uppercase mt-8'>
                    <p>{t('location')}</p>
                    <div className='flex gap-2 justify-center items-center'><Image src={"/assets/icons/world.svg"} width={20} height={20} alt='World icon' /> <p>{t('www')}</p></div>
                    <div className='flex gap-2 justify-center items-center'><div className='w-2 h-2 bg-lime-600 animate-fade'></div><p >{t('work')}</p></div>
                </article>
            </section>

            <section className='flex flex-col items-center justify-center'>
                <article className='section-parallax italic overflow-hidden'>
                    <ParallaxText baseVelocity={-5}>{t('scroll')}</ParallaxText>
                    <ParallaxText baseVelocity={5}>{t('scroll')}</ParallaxText>
                </article>
                <Link href={'/contact'} className="shadow-[inset_0_0_0_2px_#2D2A32] tracking-wide hover:shadow-[inset_0_0_0_2px_#2667FF] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-main-color hover:text-white dark:text-neutral-200 transition duration-200">{t('contact')}</Link>
            </section>

            <Grid cards={cards} showTitle />
        </main>
    );
}