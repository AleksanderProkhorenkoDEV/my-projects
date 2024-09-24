import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import TextGenerateEffect from '@/components/anima-text/animate-text';
import { bebas, montserrat } from '@/assets/fonts';
import Baner from '@/components/baner/baner';
import OwnCard from '@/components/card/card';
import { Cards, ProjectPageProps, Projects } from '@/types';
import { Velustro } from "uvcanvas"
import { Suspense } from 'react';

export default async function ProjectPage({ params: { locale } }: ProjectPageProps) {
    unstable_setRequestLocale(locale);
    const t = await getTranslations('projects');
    const messages: Projects = (await import(`/messages/data/${locale}/projects.json`)).default;

    return (
        <main className={`w-full flex flex-col gap-8 pb-8 ${montserrat.className}`}>
            <section className='w-full h-screen flex flex-col items-start justify-end gap-4 overflow-hidden relative'>
                <div className='w-[100rem] h-1/2 rotate-[23deg] transform translate-x-[-10%] absolute left-[0px] top-[0px] rounded-br-full rounded-tr-full overflow-hidden '>
                    <Velustro />
                </div>
                <div className='h-1/2 w-[35rem] p-4 flex flex-col items-center justify-center'>
                    <TextGenerateEffect words={t('hero-title')} className={`uppercase ${bebas.className} text-6xl w-3/4`}></TextGenerateEffect>
                    <TextGenerateEffect words={t('hero-text')} className='text-end w-3/4 text-2xl'></TextGenerateEffect>
                </div>
            </section>
            <Baner />
            <Suspense fallback={"laoding..."}>
                <section className='border border-indigo-800 w-11/12 mx-auto'>
                    {
                        Object.entries(messages).map(([key, project]) => (
                            <OwnCard
                                key={key}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                github={project.github}
                                link={project.link}
                            />
                        ))
                    }
                </section>
            </Suspense>
        </main>
    );
}