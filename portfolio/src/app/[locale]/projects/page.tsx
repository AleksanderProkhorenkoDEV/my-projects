import { unstable_setRequestLocale } from 'next-intl/server';
import { bebas, montserrat } from '@/assets/fonts';
import { useTranslations } from 'next-intl';
import { ProjectPageProps } from '@/types';
import { Velustro } from "uvcanvas"




export default function ProjectPage({ params: { locale } }: ProjectPageProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('HomePage');
    return (
        <main className={`w-full flex flex-col gap-8 pb-8 ${montserrat.className}`}>
            <section className='w-full h-screen flex flex-col items-start justify-end gap-4 overflow-hidden relative'>
                <div className='w-[100rem] h-1/2 rotate-[23deg] transform translate-x-[-10%] absolute left-[0px] top-[0px] rounded-br-full rounded-tr-full overflow-hidden '>
                    <Velustro />
                </div>
                <div className='border-indigo-800 border-2 h-1/2 w-[35rem] ml-2 p-4'>
                    <h1 className={`uppercase ${bebas.className} text-7xl`}>Projects Zone</h1>
                    <p>Aqui podréis ver mi arte</p>
                </div>
            </section>
        </main>
    );
}