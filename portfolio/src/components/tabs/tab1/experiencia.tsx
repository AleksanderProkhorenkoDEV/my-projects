import Image from "next/image";

const Experiencia = async ({ locale }: { locale: string }) => {

    const messages: any = (await import(`/messages/experiencia/${locale}/experiencia.json`)).default;

    return (
        <article className="flex flex-col gap-4">
            {Object.keys(messages).map((key: string) => {
                const project = messages[key];
                return (
                    <div key={key}>
                        <div className="flex items-center justify-between p-4">
                            <ul className="flex flex-col gap-4">
                                <li className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-dark-main-color to-main-color">
                                    {project.puesto}
                                </li>
                                <li>{project.empresa}</li>
                            </ul>
                            <Image src={`/assets/images/${project.imagen}`} height={125} width={125} alt={project.imagen} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-bold">{project.title}</p>
                            <ul className="pl-4 flex flex-col gap-2">
                                {Object.keys(project)
                                    .filter((key) => key.startsWith('e-'))
                                    .map((taskKey) => (
                                        <li key={taskKey}>{project[taskKey]}</li>
                                    ))}
                            </ul>
                        </div>
                        <hr className="border-blue-500 mt-8"></hr>
                    </div>
                );
            })}
        </article>
    )
}

export default Experiencia;