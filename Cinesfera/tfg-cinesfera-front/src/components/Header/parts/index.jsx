'use client'

import { useEffect, useState } from "react";

const ScrollTraker = ({ children }) => {
    const [isScrolled, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && !isScrolled) {
                setScroll(true);
            } else if (window.scrollY === 0) {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

    return <header className={isScrolled ? "cabecera glass" : "cabecera"}>{children}</header>;
}

export default ScrollTraker