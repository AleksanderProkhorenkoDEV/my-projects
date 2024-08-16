'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function App() {
    const t = useTranslations('nav');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "me",
        "projects",
        "contact",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" isBordered>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>

                    <p className="font-bold text-inherit">ADEV</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        {t('me')}
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link color="foreground" href="/projects">
                        {t('projects')}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contact" >
                        {t('contact')}
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://github.com/AleksanderProkhorenkoDEV"><Image src={"/assets/icons/github-svg.svg"} width={24} height={24} alt={t('git-icon')} /></Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://www.linkedin.com/in/aleksander-trujillo-prokhorenko-90a066299/"><Image src={"/assets/icons/linkedin-svg.svg"} width={24} height={24} alt={t('lin-icon')} /></Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                        >
                            {t(item)}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
