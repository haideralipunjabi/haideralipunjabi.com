"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={classNames(
          "bg-background-primary md:h-16 absolute top-0 right-0 left-0 text-2xl text-foreground-primary md:block z-10	",

          isOpen ? "block" : "hidden"
        )}
      >
        <NavbarList>
          <NavbarItem href="/">Home</NavbarItem>
          <NavbarItem href="/skills">Skills</NavbarItem>
          <NavbarItem href="/projects">Projects</NavbarItem>
          <NavbarItem href="/press">Press</NavbarItem>
        </NavbarList>
      </nav>
      <FontAwesomeIcon
        className="md:hidden text-foreground-primary text-2xl absolute top-2 right-2 fa-solids fa-bars"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        icon={isOpen ? faTimes : faBars}
      />
    </>
  );
}

function NavbarList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-col md:flex-row mt-10 md:mt-0 relative">
      {children}
    </ul>
  );
}

function NavbarItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();

  return (
    <li
      className={
        "p-4 hover:bg-accent-primary " +
        (href === pathname ? "bg-accent-primary" : "")
      }
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
