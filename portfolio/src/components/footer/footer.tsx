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
                    <div className="flex flex-col gap-4 items-start justify-center ">
                        <Link href="https://github.com/AleksanderProkhorenkoDEV" className="group flex gap-2 items-center justify-center w-1/2  py-2 ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" version="1.1" className="fill-current text-black group-hover:text-[#1040b0] transition-colors ease-in-out">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className="group-hover:text-main-color transition-colors ease-in-out">Github</p>
                        </Link>
                        <Link href="https://github.com/AleksanderProkhorenkoDEV" className="group flex gap-2 items-center justify-center w-1/2  py-2 ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 310 310" version="1.1" className="fill-current text-black group-hover:text-[#1040b0] transition-colors ease-in-out">
                                <g id="XMLID_801_">
                                    <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		                                C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                                    <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		                                c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                                    <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		                                c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		                                c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		                                C310,145.43,300.549,94.761,230.454,94.761z"/>
                                </g>
                            </svg>
                            <p className="group-hover:text-main-color transition-colors ease-in-out">Linkedin</p>
                        </Link>
                    </div>
                </article>
            </section>
            <section className=" p-3 text-center bg-[#3A3741] w-full">
                <p className={`${montserrat_ligth.className}`}>{t('sub-footer')}</p>
            </section>
        </footer>
    )
};

export default Footer;