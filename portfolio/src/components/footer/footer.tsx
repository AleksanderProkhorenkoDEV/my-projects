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
        <footer className={`bg-dark-bg min-h-[30rem] w-full flex flex-col items-center text-white ${montserrat.className} 1k3:min-h-fit `}>
            <section className="flex-1 flex items-center justify-end border-b w-11/12 justify-between 1k3:flex-1 1k3:p-8">
                <p>{make_date_formed() + '  ' + make_time_formed()}</p>
                <p className="text-end">{t('location')}</p>
            </section>
            <section className="flex-[5] flex flex gap-2 justify-between p-8  1k3:flex-[3] 1k2:justify-between 1k2:w-full 1k2:flex-col 1k2:items-center 1k2:gap-8">
                <article className="w-[30rem] p-8 flex flex-col gap-4 bg-[#3A3741] h-full rounded-md shadow-[0_4px_10px_rgba(255,255,255,0.1)] 1k7:w-[25rem] 1k5:w-[22rem] 1k2-min-w-min">
                    <p className={`uppercase ${bebas.className} text-4xl w-11/12 border-b text-dark-main-color`}>Menu</p>
                    <div className="flex flex-col gap-4">
                        <NavigationLink href="/">{n('me')}</NavigationLink>
                        <NavigationLink href="/projects">{n('projects')}</NavigationLink>
                        <NavigationLink href="/contact">{n('contact')}</NavigationLink>
                    </div>
                </article>
                <article className="w-full flex flex-col items-center justify-center 1k3:min-w-min 1k2:hidden">
                    <h2 className={`uppercase text-7xl ${bebas.className} tracking-[.25em] text-transparent bg-clip-text bg-gradient-to-r from-dark-main-color to-main-color mb-2 1k5:text-6xl 1k3:text-4xl`}>APROKHORENKODEV</h2>
                    <p className={`text-4xl ${montserrat_ligth.className}  font-light mb-6 1k3:text-2xl`}>{f('title')}</p>
                    <blockquote className="flex flex-col items-center gap-4">
                        "{t("seneca")}"
                        <cite>– Séneca</cite>
                    </blockquote>
                </article>
                <article className="w-[30rem] flex flex-col gap-4 p-8 bg-[#3A3741] h-full rounded-md shadow-[0_4px_10px_rgba(255,255,255,0.1)] 1k7:w-[25rem] 1k5:w-[22rem] 1k2-min-w-min" >
                    <p className={`uppercase ${bebas.className} text-4xl w-11/12 border-b text-main-color`}>{t("links")}</p>
                    <div className="flex flex-col gap-4 items-start justify-start ">
                        <Link href="https://github.com/AleksanderProkhorenkoDEV" className="group flex gap-2 items-center justify-center w-1/2  py-2 ml-2 w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-[34px] h-[34px]">
                                <g>
                                    <path fillRule="evenodd" d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z" />
                                    <path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zm-.524-.388M39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm-.406-.437M40.97 66.968c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm0 0M43.268 69.336c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm0 0M46.44 70.71c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm0 0M49.92 70.965c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm0 0M53.16 70.414c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0" />
                                </g>
                                <g>
                                    <path d="M24.855 108.302h-10.7a.5.5 0 0 0-.5.5v5.232a.5.5 0 0 0 .5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 0 0-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 0 0-.5-.5zM79.506 94.81H73.48a.5.5 0 0 0-.498.503l.002 11.644h-9.392V95.313a.5.5 0 0 0-.497-.503H57.07a.5.5 0 0 0-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 0 0 .497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 0 0 .497-.504v-31.53c0-.278-.22-.502-.497-.502zM32.34 95.527c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zM35.296 105.135H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-6.346-14.553a.5.5 0 0 0-.498-.502zM102.902 105.182h-5.98a.5.5 0 0 0-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 0 0-.497-.504h-6.068a.502.502 0 0 0-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 0 0 .5-.504l-.003-21.166a.504.504 0 0 0-.5-.502zM119.244 104.474c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 0 0-.497-.503H107a.5.5 0 0 0-.5.503v31.53a.5.5 0 0 0 .5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zM53.195 122.12c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 0 0 .5-.504v-4.856a.5.5 0 0 0-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 0 0-.36.48v3.877a.5.5 0 0 0 .497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 0 0-.5-.502z" />
                                </g>
                            </svg>
                            <p>Github</p>
                        </Link>
                        <Link href="https://github.com/AleksanderProkhorenkoDEV" className="group flex gap-2 items-center justify-center w-1/2 py-2 ml-2 w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.04167in" viewBox="0 0 201 201" width="1.04167in" className="fill-current text-black group-hover:text-[#1040b0] transition-colors ease-in-out w-[24px] h-[24px]">
                                <g id="Layer_x0020_1">
                                    <g id="_541895288">
                                        <rect height="201" rx="19" ry="19" width="201" className="fill-[#379AD0]" />
                                        <g>
                                            <polygon points="39,102 39,162 68,162 68,97 68,80 39,80" className="fill-[#FEFEFE]" />
                                            <path d="M54 39c-8,0 -15,7 -15,15 0,7 7,14 15,14 7,0 14,-7 14,-14 0,-8 -7,-15 -14,-15z" className="fill-[#FEFEFE]" />
                                            <path d="M161 105c-2,-15 -9,-25 -30,-25 -12,0 -20,5 -24,11l0 0 0 -11 -23 0 0 16 0 66 24 0 0 -41c0,-10 2,-21 15,-21 13,0 14,13 14,22l0 40 25 0 0 -45 0 0c0,-4 0,-8 -1,-12z" className="fill-[#FEFEFE]" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p>Linkedin</p>
                        </Link>
                    </div>
                </article>
            </section>
            <section className=" p-3 text-center bg-[#3A3741] w-full 500:text-sm 400k:text-xs">
                <p className={`${montserrat_ligth.className}`}>{t('sub-footer')}</p>
            </section>
        </footer>
    )
};

export default Footer;