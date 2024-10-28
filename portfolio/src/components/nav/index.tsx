'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import LocaleSwitcher from "../switcher-locale/locale-switcher";
import NavigationLink from "./navigation-link";
import { useTranslations } from "next-intl";
import { montserrat } from "@/assets/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Nav() {
    const t = useTranslations('nav');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" isBordered={true} isBlurred={true} position="sticky" className={`bg-transparent ${montserrat.className}`}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden "
                />
                <NavbarBrand>
                    <p className="hidden font-bold text-inherit 1k:block">ADEV</p>
                    <Image
                        src={'/assets/images/logo.png'}
                        width={80}
                        height={80}
                        alt='logo aleksander'
                        className='block 1k:hidden' />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <NavigationLink href="/">{t('me')}</NavigationLink>
                </NavbarItem>
                <NavbarItem>
                    <NavigationLink href="/projects">{t('projects')}</NavigationLink>
                </NavbarItem>
                <NavbarItem>
                    <NavigationLink href="/contact">{t('contact')}</NavigationLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <LocaleSwitcher />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://github.com/AleksanderProkhorenkoDEV"><Image src={"/assets/icons/github-svg.svg"} width={24} height={24} alt={t('git-icon')} /></Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://www.linkedin.com/in/aleksander-trujillo-prokhorenko-90a066299/"><Image src={"/assets/icons/linkedin-svg.svg"} width={24} height={24} alt={t('lin-icon')} /></Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-main-bg">
                <NavigationLink href="/">{t('me')}</NavigationLink>
                <NavigationLink href="/projects">{t('projects')}</NavigationLink>
                <NavigationLink href="/contact">{t('contact')}</NavigationLink>
            </NavbarMenu>
        </Navbar>
    );
}
