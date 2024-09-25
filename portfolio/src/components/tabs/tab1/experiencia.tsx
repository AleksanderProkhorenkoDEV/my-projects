import Image from "next/image";

const Experiencia = () => {
    return (
        <article className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-2 border-indigo-500 p-4">
                <ul className="flex flex-col gap-4">
                    <li className="font-bold text-xl">Desarrollador Full Stack - Mayo 2024 - Junio 2024</li>
                    <li>Ecope</li>
                </ul>
                <Image src={'/assets/images/ecope.png'} height={125} width={125} alt="ecope logo" />
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold ">Tareas realizadas:</p>
                <ul className="pl-4 flex flex-col gap-2">
                    <li>Dockerización de la aplicación en sistema Linux.</li>
                    <li>Creación de backends con PHP especificamente en el framework Laravel 11.</li>
                    <li>Uso de metodología TDD para la creación de código limpio.</li>
                    <li>Creación de api full rest.</li>
                    <li>Creación de Tets unitarios con PHPUnit.</li>
                    <li>Gestión de base de datos relacionales: MySQL</li>
                    <li>Uso de metodologias Agiles, gestión de proyecto con Jira y Github.</li>
                    <li>Creación y gestión de JWT además de gestión de usuarios y roles mediante Laravel Spatie.</li>
                    <li>Creación de frontend en Nextjs 14.</li>
                    <li>Creación y gestión de custom hooks.</li>
                    <li>Creación y reutilización de componentes  en Nextjs 14.</li>
                    <li>Uso de librerias de autenticación como Nextj Auth.</li>
                </ul>
            </div>

            <hr></hr>

            <div className="flex items-center justify-between border-2 border-indigo-500 p-4">
                <ul className="flex flex-col gap-4">
                    <li className="font-bold text-xl">Desarrollador Full Stack Freelance Ecommerce - Junio 2024 - Actual</li>
                    <li>Empere Nail</li>
                </ul>
                <Image src={'/assets/images/ecope.png'} height={125} width={125} alt="ecope logo" />
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold ">Tareas realizadas:</p>
                <ul className="pl-4 flex flex-col gap-2">
                    <li>Dockerización de la aplicación en sistema Windows.</li>
                    <li>Creación de backend con PHP especificamente en el framework Laravel 11.</li>
                    <li>Creación de api full rest y de api GraphQL.</li>
                    <li>Creación de Tets unitarios con PHPUnit.</li>
                    <li>Gestión de base de datos relacionales: MySQL</li>
                    <li>Uso de metodologias Agiles, gestión de proyecto con Jira y Bitbucket.</li>
                    <li>Creación y gestión de JWT además de gestión de usuarios y roles mediante Laravel Spatie.</li>
                    <li>Creación de frontend con React y Nextjs 14.</li>
                    <li>Creación y gestión de custom hooks.</li>
                    <li>Gestión de contexto mediante Redux.</li>
                    <li>Creación y reutilización de componentes tanto en React como en Nextjs 14.</li>
                    <li>Uso de librerias de autenticación como Nextj Auth.</li>
                </ul>
            </div>
        </article>


    )
}

export default Experiencia;