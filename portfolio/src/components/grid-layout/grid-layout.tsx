import { useTranslations } from "next-intl";
import { bebas, montserrat } from '@/assets/fonts';
import { LayoutGrid } from "./layout";


export function Grid() {
    const t = useTranslations('grid')
    return (
        <div className="h-screen py-20 w-full flex flex-col items-center">
            <h2 className={`${bebas.className} text-5xl w-[65rem] `}>{t('title')}</h2>
            <LayoutGrid cards={cards} />
            <p className={`${montserrat.className} w-[65rem] text-end text-xl`}>{t('description')}</p>
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
    const t = useTranslations('card-curiosidad')
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

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2 cursor-pointer",
        thumbnail: "/assets/images/4.4.jpg"
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1 cursor-pointer",
        thumbnail:
            "/assets/images/3.3.jpg",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1 cursor-pointer",
        thumbnail:
            "/assets/images/2.2.jpg",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2 cursor-pointer",
        thumbnail:
            "/assets/images/1.1.jpg",
    },
];
