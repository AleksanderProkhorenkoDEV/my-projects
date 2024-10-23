
import { bebas, montserrat } from '@/assets/fonts';
import { useTranslations } from 'next-intl';
import { LayoutGrid } from "./layout";
import { Card } from '@/types';



export function Grid({ cards, showTitle }: { cards: Card[], showTitle?: boolean }) {
    const t = useTranslations('grid');

    return (
        <div className="h-screen py-20 w-full flex flex-col items-center ">
            {showTitle && (
                <h2 className={`${bebas.className} text-5xl w-[65rem] 1k:w-fit`}>
                    {t('title')}
                </h2>
            )}
            <LayoutGrid cards={cards} />
            {
                showTitle && (
                    <p className={`${montserrat.className} w-[65rem] text-end text-xl 1k:w-fit`}>
                        {t('description')}
                    </p>
                )
            }
        </div>
    );
}

