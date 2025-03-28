import { useTranslations } from "next-intl";
import { bebas } from "@/assets/fonts"
import Link from "next/link"

const Baner = () => {
    const t = useTranslations('banner');
    return (
        <div className="w-full flex items-center justify-center bg-gradient-to-r from-dark-main-color via-indigo-700 to-main-color text-white rounded-lg shadow-lg ">
            <section className="w-11/12 flex flex-col gap-6 items-start justify-start p-6 ">
                <h3 className={`text-5xl font-extrabold tracking-tight ${bebas.className} leading-tight tracking-[0.35rem] 700k:text-2xl`}>
                    {t("title")}
                </h3>
                <p className="text-pretty text-lg leading-relaxed">
                    {t("message")}
                </p>
                <div className="flex gap-4 700k:flex-wrap">
                    <Link href={'/contact'} className="shadow-[inset_0_0_0_2px_#fff] tracking-wide  hover:scale-105 transform transition-all duration-300 text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-white hover:text-main-color dark:text-neutral-200">
                        {t("contacta")}
                    </Link>
                    <a href={'/assets/cv/Spanish_Full_Stack_cv.pdf'} download="aleksander_cv.pdf" className="bg-white text-main-color  tracking-wide hover:shadow-[inset_0_0_0_2px_#fff] hover:scale-105 transform transition-all duration-300 px-12 py-4 rounded-full tracking-widest uppercase font-bold hover:bg-transparent hover:text-white dark:text-neutral-200">
                        {t("cv")}
                    </a>
                </div>
            </section>

        </div>
    )
}

export default Baner