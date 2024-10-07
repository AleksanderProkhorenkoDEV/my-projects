import { bebas } from "@/assets/fonts"
import Image from "next/image"
import Link from "next/link"

const Stack = () => {
    return (
        <div className="border-2 border-indigo-500 w-full h-full p-4 flex flex-col">
            <p className={`${bebas.className} text-xl tracking-widest`}>AleksanderProkhorenkoDEV / Readme.md</p>
            <div>
                <ul>
                    <li>Desarrollando proyectos personales</li>
                    <li>Aprendiendo Nextjs como principal y Java Spring boot</li>
                    <li>Contacta conmigo por <span><Link href={"https://www.linkedin.com/in/aleksander-trujillo-prokhorenko-90a066299/"}>Linkedin</Link></span></li>
                    <li>O via <span><Link href={"mailto:aprokhorenkodev@gmail.com"}>Email</Link></span></li>
                </ul>
            </div>
            <article>
                <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <caption className="text-lg font-semibold text-gray-700 mb-4">Habilidades técnicas</caption>
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