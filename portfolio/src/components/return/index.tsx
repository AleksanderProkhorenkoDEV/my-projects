'use client'

import { useEffect, useState } from "react";

const Return = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position_scroll = window.scrollY;

            if (position_scroll > 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleClick = ( ) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        isVisible && (
            <div className="fixed bottom-8 right-8">
                <button
                    onClick={handleClick}
                    className="w-12 h-12 bg-main-color text-white rounded-full flex items-center justify-center shadow-lg hover:bg-dark-main-color transition-colors"
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-6 h-6 transform rotate-180"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 01.993.883L11 4v10.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 14.586V4a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        )
    );
}

export default Return
