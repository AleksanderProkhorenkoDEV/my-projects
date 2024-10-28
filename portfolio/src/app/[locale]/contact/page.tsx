import { unstable_setRequestLocale } from 'next-intl/server';
import FormContact from '@/components/Form/form-contact';
import { useTranslations } from 'next-intl';
import { ProjectPageProps } from '@/types';
import { bebas } from '@/assets/fonts';
import { Velustro } from 'uvcanvas';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage({ params: { locale } }: ProjectPageProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('contact');
    const f = useTranslations('formulario');
    const i = useTranslations('información');
    return (
        <main className='mb-8 flex flex-col gap-8'>
            <section className='flex flex-col gap-8 items-center w-11/12 m-auto p-4 '>
                <div className='flex items-center justify-around gap-16 1k:flex-col-reverse'>
                    <div className='flex flex-col gap-4 max-w-xl 1k3:max-w-lg 1k:max-w-xl'>
                        <h2 className={`text-5xl ${bebas.className} 500k:text-3xl`}>{t("title")}</h2>
                        <p className='text-pretty text-lg'>{t("vision")}</p>
                        <p className='text-pretty text-lg'>{t("sub-title")}</p>
                    </div>
                    <div className="w-[30rem] h-[30rem] rounded-full overflow-hidden relative drop-shadow-xl 1k3:w-[20rem] 1k3:h-[20rem] ">
                        <div className='overflow-hidden w-[30rem] h-[30rem] z-10 absolute 1k3:w-[20rem] 1k3:h-[20rem]'>
                            <Velustro />
                        </div>
                        <div className="w-full h-full bg-[url('/assets/icons/tierra-svg.svg')] bg-fit bg-center bg-no-repeat z-20 absolute" />
                        <Image
                            src={'/assets/images/logo.png'}
                            width={250}
                            height={250}
                            alt='logo aleksander'
                            className='hidden 1k:block rotate-horizontal absolute z-[21] left-[40px] top-[70px]' />
                    </div>
                </div>
                <div className='min-h-min w-fit'>
                    <Image src={"/assets/icons/doble-arrow-scroll-svg.svg"} height={30} width={30} alt={"Arrow icon"} className='scroll-animation' />
                </div>
            </section>
            <section className='flex gap-8 justify-around w-11/12 min-h-96 m-auto p-8 rounded-lg 1k:flex-col 1k:items-center 600k:w-full'>
                <div className='flex flex-1 flex-col gap-6 justify-center w-fit'>
                    <p className={`${bebas.className} tracking-[0.25rem] text-2xl font-bold text-main-color`}>
                        {i('title1')}
                    </p>

                    <div className='ml-4 flex gap-2 items-center text-gray-700 1k:flex-wrap'>
                        <p className='font-semibold text-lg text-bold'>{i('horario')}</p>
                        <p className='text-base'>{i('dias')}</p>
                    </div>

                    <p className={`${bebas.className} tracking-[0.25rem] text-2xl font-bold text-main-color`}>
                        {i('title2')}
                    </p>
                    <div className='ml-4 flex flex-col gap-2 text-gray-700'>
                        <p className='flex items-center font-bold'>
                            Email: <Link href="mailto:aprokhorenkodev@gmail.com" className='text-blue-600 hover:underline ml-4'>aprokhorenkodev@gmail.com</Link>
                        </p>
                        <p className='flex items-center font-bold'>
                            LinkedIn: <Link href="https://www.linkedin.com/in/aleksander-trujillo-prokhorenko-90a066299/" target="_blank" className='text-blue-600 hover:underline ml-4'>aleksander-trujillo-prokhorenko</Link>
                        </p>
                    </div>
                </div>

                <div className='border-l border-indigo-800 h-full'></div>

                <div className='flex flex-1 items-center justify-center p-6 rounded-lg w-full'>
                    <FormContact
                        email_title={f("row1")}
                        message={f("row2")}
                        buton_text={f("row3")}
                        succes_text={f("succes")}
                        error_text={f("error")}
                    />
                </div>
            </section>
            <section className='flex items-center justify-center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50860.94557461577!2d-3.632471259083814!3d37.18100750305445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fce62d32c27d%3A0x9258f79dd3600d72!2sGranada!5e0!3m2!1ses!2ses!4v1729006054009!5m2!1ses!2ses"
                    width="100%"
                    height="600"
                    loading="lazy">

                </iframe>
            </section>
        </main>
    );
}