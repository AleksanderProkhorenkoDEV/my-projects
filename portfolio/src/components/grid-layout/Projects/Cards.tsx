import { useTranslations } from "next-intl";

const SkeletonOne = () => {

    const t = useTranslations('zaidin_vergeles')
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white 600k:text-sm" >
                {t('title')}
            </p>

            < p className="font-normal text-base my-4 max-w-lg text-neutral-200 600k:text-sm" >
                · {t('description')}
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    const t = useTranslations('salesianos')
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white 600k:text-sm" >
                {t('title')}
            </p>
            < p className="font-normal text-base my-4 max-w-lg text-neutral-200 600k:text-sm" >
                · {t('description')}
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    const t = useTranslations('openwebinars')
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white 600k:text-sm" >
                {t('title')}
            </p>

            <ul className="font-normal text-base my-4 max-w-lg text-neutral-200 600k:text-sm ocultar-texto-multilinea">
                <li>· {t('o-4')}</li>
                <li>· {t('o-5')}</li>
                <li>· {t('o-6')}</li>
                <li>· {t('o-7')}</li>
                <li>· {t('o-8')}</li>
                <li>· {t('o-9')}</li>
                <li>· {t('o-10')}</li>
                <li>· {t('o-11')}</li>
                <li>· {t('o-12')}</li>
                <li>· {t('o-13')}</li>
            </ul>
        </div>
    );
};
const SkeletonFour = () => {
    const t = useTranslations('openwebinars-2')
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white 600k:text-sm" >
                {t('title')}
            </p>
            < ul className="font-normal text-base my-4 max-w-lg text-neutral-200 600k:text-sm" >
                <li>· {t('o-1')}</li>
                <li>· {t('o-2')}</li>
                <li>· {t('o-3')}</li>
            </ul>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2 cursor-pointer ",
        thumbnail: "/assets/images/zaidinvergeles.png"
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1 cursor-pointer ",
        thumbnail:
            "/assets/images/salesianos.jpg",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1 cursor-pointer",
        thumbnail:
            "/assets/images/openwebinars.png",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2 cursor-pointer",
        thumbnail:
            "/assets/images/aptitud.png",
    },
];

export default cards