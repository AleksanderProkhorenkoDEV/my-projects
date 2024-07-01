"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { useState } from "react";
import CustomLink from "./custom-link";
import { appLinksRoutes } from "@/lib/router";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = appLinksRoutes;
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#252422]"
      shouldHideOnScroll
    >
      <NavbarContent className="gap-4 border-b-1 border-solid text-color-text-secondary ">
        <NavbarBrand>Aleksander Prokhorenko DEV</NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="bg-[#252422]">
        <NavbarContent className="flex flex-col gap-0">
          {router.map((item, index) => (
            <CustomLink
              text={item.text}
              url={item.url}
              key={`${item.text}-${index}`}
            />
          ))}
        </NavbarContent>
      </NavbarMenu>
    </Navbar>
  );
}
