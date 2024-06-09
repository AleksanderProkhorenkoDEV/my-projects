'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import style from './style/Buttons.module.css'
import { useState, useEffect } from 'react'

const Buttons = ({ pages }) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const [maxPages, setMaxPages] = useState(0);
    const [thisPage, setThisPage] = useState(1);

    useEffect(() => {
        const page = searchParams.get('page');
        setThisPage(page != null ? parseInt(page) : 1);
        setMaxPages(pages);
    }, [pages, searchParams]);

    const handlePrevClick = () => {
        if (thisPage > 1) {
            const newPage = thisPage - 1;
            const params = new URLSearchParams(searchParams);
            params.set('page', newPage.toString());
            setThisPage(newPage);
            replace(`${pathName}?${params.toString()}`, { scroll: false });
        }
    };

    const handleNextClick = () => {
        if (thisPage < maxPages) {
            const newPage = thisPage + 1;
            const params = new URLSearchParams(searchParams);
            params.set('page', newPage.toString());
            setThisPage(newPage);
            replace(`${pathName}?${params.toString()}`, { scroll: false });
        }
    };

    return (
        <div className={style.containerButtons}>
            <button onClick={handlePrevClick}><img width={30} height={30} src='/images/icons/arrowLeft.svg' alt="Previous page"/></button>
            <button onClick={handleNextClick}><img width={30} height={30} src='/images/icons/arrowRight.svg' alt="Next page"/></button>
        </div>
    );
};

export default Buttons;
