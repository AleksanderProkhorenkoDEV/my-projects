import { useTranslations } from "next-intl";
import { LayoutGrid } from "./layout";


export function Grid() {

    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {

    const t = useTranslations('card-bike')
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                {t('title')}
            </p>

            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                {t('description')}
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    const t = useTranslations('card-me')
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            {t('title')}
            </p>
            <p className="font-normal text-base text-white mt-2">{t('data')}</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            {t('description')}
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    const t = useTranslations('card-web')
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                {t('title')}
            </p>

            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                {t('description')}
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Rivers are serene
            </p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house by the river is a place of peace and tranquility. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2 cursor-pointer",
        thumbnail: "/assets/images/honda-cbr-600.jpg"
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1 cursor-pointer",
        thumbnail:
            "/assets/images/me.jpg",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1 cursor-pointer",
        thumbnail:
            "/assets/images/Desarrollo-web.jpg",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2 cursor-pointer",
        thumbnail:
            "/assets/images/Curiosidad.jpg",
    },
];
