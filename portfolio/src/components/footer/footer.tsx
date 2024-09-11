import { bebas, montserrat, montserrat_ligth, } from "@/assets/fonts";
import NavigationLink from "../nav/navigation-link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const t = useTranslations('footer');
    const n = useTranslations('nav');
    const f = useTranslations('HomePage');
    const i = useTranslations('nav');

    const make_date_formed = () => {
        const date = new Date();

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan en 0, por lo que sumamos 1
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;

    }

    const make_time_formed = () => {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    }

    return (
        <footer className={`bg-dark-bg min-h-[30rem] flex flex-col items-center text-white ${montserrat.className}`}>
            <section className="flex-1 flex items-center justify-end border-b w-11/12 justify-between">
                <p>{make_date_formed() + '  ' + make_time_formed()}</p>
                <p className="text-end">{t('location')}</p>
            </section>
            <section className="flex-[5] flex flex gap-2 justify-between p-8">
                <article className="w-[30rem] p-8 flex flex-col gap-4 bg-[#3A3741] h-full rounded-md shadow-[0_4px_10px_rgba(255,255,255,0.1)]">
                    <p className={`uppercase ${bebas.className} text-4xl w-11/12 border-b text-dark-main-color`}>Menu</p>
                    <div className="flex flex-col gap-4">
                        <NavigationLink href="/">{n('me')}</NavigationLink>
                        <NavigationLink href="/projects">{n('projects')}</NavigationLink>
                        <NavigationLink href="/contact">{n('contact')}</NavigationLink>
                    </div>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <h2 className={`uppercase text-7xl ${bebas.className} tracking-[.25em] text-transparent bg-clip-text bg-gradient-to-r from-dark-main-color to-main-color mb-2`}>APROKHORENKODEV</h2>
                    <p className={`text-4xl ${montserrat_ligth.className}  font-light mb-6`}>{f('title')}</p>
                    <blockquote className="flex flex-col items-center gap-4">
                        "{t("seneca")}"
                        <cite>– Séneca</cite>
                    </blockquote>
                </article>
                <article className="w-[30rem] flex flex-col gap-4 p-8 bg-[#3A3741] h-full rounded-md shadow-[0_4px_10px_rgba(255,255,255,0.1)]" >
                    <p className={`uppercase ${bebas.className} text-4xl w-11/12 border-b text-main-color`}>{t("links")}</p>
                    <div className="flex flex-col gap-4 ">
                        <Link href="https://github.com/AleksanderProkhorenkoDEV" className="flex gap-2 items-center justify-center w-1/2 p-2">
                            <Image src={"/assets/icons/github-svg.svg"} width={24} height={24} alt={i('git-icon')} />
                            Github
                        </Link>
                        <Link href="https://github.com/AleksanderProkhorenkoDEV" className="flex gap-2 items-center justify-center w-1/2 p-2">
                            <Image src={"/assets/icons/linkedin-svg.svg"} width={24} height={24} alt={i('git-icon')} />
                            Linkedin
                        </Link>
                    </div>
                </article>
            </section>
            <section className=" p-3 text-center bg-[#414042] w-full">
                <p className={`${montserrat_ligth.className}`}>{t('sub-footer')}</p>
            </section>
        </footer>
    )
};

export default Footer;