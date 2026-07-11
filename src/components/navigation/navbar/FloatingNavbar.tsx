import Link from "next/link";
import Image from "next/image";
import { MenuIcon, SunIcon } from "lucide-react";

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

export const FloatingNavbar = () => {
  return (
    <header className="sticky top-10 z-50 bg-light/80 mx-auto max-w-5xl py-3 px-6 flex items-center justify-between border border-color shadow-lg rounded-full backdrop-blur-sm">
      <Link href="/" className="flex-1">
        <span className="sr-only">My Company</span>
        <Image
          alt="logo"
          width={50}
          height={50}
          src="/vercel.svg"
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

      <button className="sm:hidden hover:text-gray-300">
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
    </header>
  );
};
