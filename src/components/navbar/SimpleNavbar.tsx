import Link from "next/link";
import Image from "next/image";
import { SunIcon } from "lucide-react";

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
  return (
    <header className="p-6 lg:px-8 bg-light flex items-center justify-between">
      <Link href="/" className="flex-1">
        <span className="sr-only">My Company</span>
        <Image
          src="/vercel.svg"
          alt="logo"
          width={50}
          height={50}
          className="w-12.5 h-12.5"
        />
      </Link>

      <nav className="space-x-8">
        {routes.map(({ href, label }) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>

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
