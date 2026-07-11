"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, SunIcon, XIcon } from "lucide-react";

const routes = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "FAQs", href: "/faqs" },
];

export const FloatingGlassNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-10 z-50 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Navbar */}
        <div className="flex items-center justify-between rounded-full border border-color/15 bg-light/10 px-6 py-4 shadow-xl backdrop-blur-xl backdrop-saturate-150">
          {/* Logo */}
          <Link href="/" className="flex flex-1 items-center">
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {routes.map(({ href, label }) => {
              const active = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
                    ${
                      active
                        ? "bg-bg shadow-sm"
                        : "hover:bg-bg/70 hover:shadow-sm"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden flex-1 items-center justify-end gap-3 lg:flex">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-color/15 bg-light hover:bg-light/80">
              <SunIcon className="size-5" />
            </button>

            <button className="rounded-full bg-primary px-5 py-2 font-medium text-text hover:brightness-110">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 transition hover:bg-bg md:hidden"
          >
            {isOpen ? (
              <XIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "mt-3 max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-color/15 bg-light/10 p-4 shadow-xl backdrop-blur-xl backdrop-saturate-150">
            <nav className="flex flex-col gap-2">
              {routes.map(({ href, label }) => {
                const active = pathname === href;

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 transition-all
                      ${active ? "bg-bg font-medium" : "hover:bg-bg/70"}`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 flex items-center justify-between border-t border-color/15 pt-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-color/15 bg-light hover:bg-light/80">
                <SunIcon className="size-5" />
              </button>

              <button className="rounded-full bg-primary px-5 py-2 font-medium text-text hover:brightness-110">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
