"use client";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userId = "1";
  return (
    <>
      {sidebarLinks.map((link) => {
        let route: string = "";
        let isActive = false;

        if (typeof link.route === "function") {
          userId && (route = link.route(userId));
        } else {
          route = link.route;
        }

        isActive =
          (pathname.includes(route) && route.length > 1) || pathname === route;

        const linkComponent = (
          <Link
            href={route}
            key={link.label}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-ligh-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={cn({
                "invert-colors": !isActive,
                "invert dark:invert-0": isActive,
              })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {link.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={route}>
            {linkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={route}>{linkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
