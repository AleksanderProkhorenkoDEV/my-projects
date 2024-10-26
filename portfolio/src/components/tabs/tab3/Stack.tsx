import { bebas } from "@/assets/fonts"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

const Stack = () => {
    const t = useTranslations('stack')
    return (
        <div className="w-full h-full p-4 flex flex-col gap-8">
            <p className={`${bebas.className} text-xl tracking-widest`}>AleksanderProkhorenkoDEV / Readme.md</p>
            <div className="p-4">
                <ul className="flex flex-col gap-4">
                    <li>{t("first")}</li>
                    <li>{t("second")}</li>
                    <li className="flex items-center gap-4 600k:flex-wrap">
                        {t("third")}
                        <span >
                            <Link href={"https://www.linkedin.com/in/aleksander-trujillo-prokhorenko-90a066299/"} className="flex items-center justify-center gap-2 p-2 text-white bg-[#0e76a8] uppercase rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.04167in" viewBox="0 0 201 201" width="1.04167in" className="w-[19px] h-[19px]">
                                    <g id="Layer_x0020_1">
                                        <g id="_541895288">
                                            <rect height="201" rx="19" ry="19" width="201" className="fill-[#ffff]" />
                                            <g>
                                                <polygon points="39,102 39,162 68,162 68,97 68,80 39,80" className="fill-[#0e76a8]" />
                                                <path d="M54 39c-8,0 -15,7 -15,15 0,7 7,14 15,14 7,0 14,-7 14,-14 0,-8 -7,-15 -14,-15z" className="fill-[#0e76a8]" />
                                                <path d="M161 105c-2,-15 -9,-25 -30,-25 -12,0 -20,5 -24,11l0 0 0 -11 -23 0 0 16 0 66 24 0 0 -41c0,-10 2,-21 15,-21 13,0 14,13 14,22l0 40 25 0 0 -45 0 0c0,-4 0,-8 -1,-12z" className="fill-[#0e76a8]" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Linkedin
                            </Link>
                        </span>
                        {t("four")}
                        <span>
                            <Link href={"mailto:aprokhorenkodev@gmail.com"} className="flex items-center justify-center gap-2 p-2 text-white bg-[#D93025] rounded uppercase">
                                <svg
                                    height="19px"
                                    version="1.1"
                                    viewBox="0 0 512 512"
                                    width="19px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <g id="gmail_email_mail">
                                        <g>
                                            <g>
                                                <g>
                                                    <rect
                                                        height="358.87"
                                                        style={{ fill: "#F1F5F7" }}
                                                        width="357.904"
                                                        x="77.045"
                                                        y="76.565"
                                                    />
                                                    <path
                                                        d="M256.002,293.738l178.947,141.697v-279.74L256.002,293.738z"
                                                        style={{ fill: "#DCE6EA" }}
                                                    />
                                                    <path
                                                        d="M449.861,76.565h-14.912L256.002,218.26L77.045,76.565H62.134c-24.693,0-44.737,20.094-44.737,44.858v269.152c0,24.759,20.044,44.859,44.737,44.859h14.911v-279.74l178.957,138.014l178.947-138.047v279.773h14.912c24.699,0,44.742-20.101,44.742-44.859V121.424C494.604,96.66,474.561,76.565,449.861,76.565z"
                                                        style={{ fill: "#fffff" }}
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Layer_1" />
                                </svg>
                                Email
                            </Link>
                        </span>
                    </li>
                </ul>
            </div>
            <article>
                <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <caption className="text-lg font-semibold text-gray-700 mb-4">{t("five")}</caption>
                    <tbody className="bg-gray-50">
                        <tr className="hover:bg-gray-100">
                            <td className="py-2 px-4 bg-indigo-600 text-white uppercase font-bold">Front end</td>
                            <td className="py-2 px-2 flex flex-wrap items-center">
                                <Image src="/assets/icons/icon-react.png" height={54} width={54} alt="Icono de React" className="mr-2" />
                                <Image src="/assets/icons/icon-next.png" height={54} width={54} alt="Icono de Nextjs" className="mr-2" />
                                <Image src="/assets/icons/icon-html5.png" height={54} width={54} alt="Icono de HTML5" className="mr-2" />
                                <Image src="/assets/icons/icon-css.png" height={54} width={54} alt="Icono de CSS" className="mr-2" />
                                <Image src="/assets/icons/icon-tailwind.png" height={54} width={54} alt="Icono de Tailwind CSS" className="mr-2" />
                                <Image src="/assets/icons/icon-js.png" height={54} width={54} alt="Icono de JavaScript" className="mr-2" />
                                <Image src="/assets/icons/icon-typescript.png" height={84} width={84} alt="Icono de TypeScript" className="mr-2" />
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="py-2 px-4 bg-indigo-600 text-white uppercase font-bold">Back end</td>
                            <td className="py-2 px-2 flex flex-wrap items-center">
                                <Image src="/assets/icons/icon-php.png" height={54} width={54} alt="Icono de PHP" className="mr-2" />
                                <Image src="/assets/icons/icon-java.png" height={54} width={54} alt="Icono de Java" className="mr-2" />
                                <Image src="/assets/icons/icon-spring.png" height={54} width={54} alt="Icono de Spring" className="mr-2" />
                                <Image src="/assets/icons/icon-laravel.png" height={54} width={54} alt="Icono de Laravel" className="mr-2" />
                                <Image src="/assets/icons/icon-postgres.png" height={84} width={84} alt="Icono de PostgreSQL" className="mr-2" />
                                <Image src="/assets/icons/icon-mysql.png" height={54} width={54} alt="Icono de MySQL" className="mr-2" />
                                <Image src="/assets/icons/icon-graphql.png" height={54} width={54} alt="Icono de GraphQL" className="mr-2" />
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="py-2 px-4 bg-indigo-600 text-white uppercase font-bold">Dev Ops</td>
                            <td className="py-2 px-2 flex flex-wrap items-center">
                                <Image src="/assets/icons/icon-docker-without-bg.png" height={54} width={54} alt="Icono de Docker" className="mr-2" />
                                <Image src="/assets/icons/icon-linux.png" height={54} width={54} alt="Icono de Linux" className="mr-2" />
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="py-2 px-4 bg-indigo-600 text-white uppercase font-bold">CMS</td>
                            <td className="py-2 px-2 flex flex-wrap items-center">
                                <Image src="/assets/icons/icon-wordpress.png" height={54} width={54} alt="Icono de WordPress" className="mr-2" />
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="py-2 px-4 bg-indigo-600 text-white uppercase font-bold">Tools</td>
                            <td className="py-2 px-2 flex flex-wrap items-center">
                                <Image src="/assets/icons/icon-jira.png" height={54} width={54} alt="Icono de Jira" className="mr-2" />
                                <Image src="/assets/icons/icon-figma.png" height={54} width={54} alt="Icono de Figma" className="mr-2" />
                                <Image src="/assets/icons/icon-bitbucked.png" height={54} width={54} alt="Icono de Bitbucket" className="mr-2" />
                                <Image src="/assets/icons/icon-git.png" height={54} width={54} alt="Icono de Git" className="mr-2" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </div>
    )
}

export default Stack