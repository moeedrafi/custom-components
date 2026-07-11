"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon, SunIcon, XIcon } from "lucide-react";
import { SidebarContent } from "../sidebar/SidebarContent";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
];

export const SimpleNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="p-6 lg:px-8 bg-light flex items-center justify-between">
      <Link href="/" className="flex-1">
        <span className="sr-only">My Company</span>
        <Image
          src="/vercel.svg"
          alt="logo"
          width={50}
          height={50}
          loading="eager"
          className="w-12.5 h-12.5"
        />
      </Link>

      <nav className="hidden sm:block space-x-8">
        {routes.map(({ href, label }) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden hover:text-gray-300"
      >
        <MenuIcon className="size-8" />
      </button>

      <div className="hidden lg:flex flex-1 justify-end gap-3">
        <button className="p-2 border border-gray-400 rounded-full cursor-pointer hover:text-gray-300">
          <SunIcon />
        </button>

        <button className="px-3 py-2 bg-primary text-text hover:brightness-110">
          Sign In
        </button>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-y-0 right-0 z-50 w-80 lg:hidden bg-bg border-r border-color transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="p-2 absolute right-0 hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            <XIcon />
          </button>

          <SidebarContent />
        </div>
      )}
    </header>
  );
};
