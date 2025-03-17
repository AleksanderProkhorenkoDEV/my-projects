import { bebas, montserrat } from "@/assets/fonts";
import { Cards } from "@/types";
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const OwnCard = ({ image, title, description, github, link }: Cards) => {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] "
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                            alt={title}
                            className="object-cover"
                            height={200}
                            shadow="md"
                            src={image}
                            width="100%"
                        />
                    </div>

                    <div className="flex flex-col gap-4 col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h2 className={`text-2xl tracking-[.25em] mt-2 ${bebas.className}`}>{title}</h2>
                                <p className={`text-small text-foreground/80 ${montserrat.className} text-balance`}>{description}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Link
                                href={github}
                                className="inline-flex items-center justify-center shadow-sm tracking-wide hover:shadow-md transition-shadow duration-300 text-sm text-white px-6 py-2 rounded-md font-semibold bg-indigo-600 hover:bg-indigo-500 dark:text-neutral-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </Link>
                            {
                                link && <Link
                                    href={link}
                                    className="inline-flex items-center justify-center shadow-sm tracking-wide hover:shadow-md transition-shadow duration-300 text-sm text-white px-6 py-2 rounded-md font-semibold bg-indigo-600 hover:bg-indigo-500 dark:text-neutral-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View project
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default OwnCard