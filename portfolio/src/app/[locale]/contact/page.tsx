import { unstable_setRequestLocale } from 'next-intl/server';
import FormContact from '@/components/Form/form-contact';
import { useTranslations } from 'next-intl';
import { ProjectPageProps } from '@/types';
import { bebas } from '@/assets/fonts';
import { Velustro } from 'uvcanvas';
import Image from 'next/image';

export default function ContactPage({ params: { locale } }: ProjectPageProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('contact');
    return (
        <main>
            <section className='flex flex-col gap-8 items-center w-11/12 m-auto p-4'>
                <div className='flex items-center justify-around gap-16'>
                    <div className='flex flex-col gap-4 max-w-xl'>
                        <h2 className={`text-5xl ${bebas.className}`}>{t("title")}</h2>
                        <p className='text-pretty text-lg'>{t("vision")}</p>
                        <p className='text-pretty text-lg'>{t("sub-title")}</p>
                    </div>
                    <div className="w-[30rem] h-[30rem] rounded-full overflow-hidden relative drop-shadow-xl">
                        <div className='overflow-hidden w-[30rem] h-[30rem] z-10 absolute'>
                            <Velustro />
                        </div>
                        <div className="w-full h-full bg-[url('/assets/icons/tierra-svg.svg')] bg-fit bg-center bg-no-repeat z-20 absolute" />
                    </div>
                </div>
                <div className='min-h-min w-fit'>
                    <Image src={"/assets/icons/doble-arrow-scroll-svg.svg"} height={30} width={30} alt={"Arrow icon"}  className='scroll-animation'/>
                </div>
            </section>
            <section>
                <FormContact />
            </section>
        </main>
    );
}