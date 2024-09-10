import { useTranslations } from "next-intl";
import NavigationLink from "../nav/navigation-link";
import { montserrat } from "@/assets/fonts";

const Footer = () => {
    const t = useTranslations('footer');
    const n = useTranslations('nav');
    return (
        <footer className={`bg-dark-bg min-h-[30rem] flex flex-col text-white ${montserrat.className}`}>
            <section className="border border-sky-500 flex-1 flex items-center justify-end">
                <p className="text-end mr-6">{t('location')}</p>
            </section>
            <section className="border border-indigo-500 flex-[5] flex flex gap-2">
                <article className="w-1/4 border p-8 flex flex-col gap-4">
                    <p>Menu</p>
                    <div className="flex flex-col gap-4">
                        <NavigationLink href="/">{n('me')}</NavigationLink>
                        <NavigationLink href="/projects">{n('projects')}</NavigationLink>
                        <NavigationLink href="/contact">{n('contact')}</NavigationLink>
                    </div>
                </article>
                <article className="w-2/4 border flex flex-col">
                    <h2>APROKHORENKODEV</h2>
                    <div>
                        
                    </div>
                </article>
            </section>
            <section className="font-bold italic  p-3 text-center bg-[#414042]">
                <p>{t('sub-footer')}</p>
            </section>
        </footer>
    )
};

export default Footer;