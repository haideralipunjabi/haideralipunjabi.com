"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
          <NavbarItem href="https://blog.haideralipunjabi.com">Blog</NavbarItem>

        </NavbarList>
      </nav>
      <FontAwesomeIcon
        className="fa-solids fa-bars absolute top-2 right-2 z-20 text-2xl text-foreground-primary md:z-0 md:hidden"
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
    <ul className="relative mt-10 flex flex-col md:mt-0 md:flex-row">
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
  const externalLink = href.startsWith("http");
  return (
    <Link href={href} target={externalLink ? "_blank" : "_self"} rel={externalLink ? "noopener noreferrer" : ""}>
      <li
        className={
          "p-4 hover:bg-accent-primary " +
          (href === pathname ? "bg-accent-primary" : "")
        }
      >
        {children}
      </li>
    </Link>
  );
}
