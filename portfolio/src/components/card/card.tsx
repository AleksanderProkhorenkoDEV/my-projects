import { Cards } from "@/types";
import { Card, CardBody, Image} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const OwnCard = ({image, title, description, github, link}: Cards) => {

    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
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

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h2 className="text-large font-medium mt-2">{title}</h2>
                                <p className="text-small text-foreground/80">{description}</p>
                            </div>
                        </div>
                        <div>
                            <Link href={github}>Github</Link>
                            <Link href={link}>View project</Link>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default OwnCard