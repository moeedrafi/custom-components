"use client";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "./NavLinks";

export const CollapsibleSidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen ? (
        <aside className="hidden lg:block w-80 shrink-0 bg-bg border-r border-color">
          <div className="h-svh px-4 py-6 flex flex-col">
            <Link href="/" className="w-max self-center">
              <span className="sr-only">My Company</span>
              <Image
                src="/vercel.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-12.5 h-12.5"
              />
            </Link>

            <NavLinks />

            <button className="mt-6 px-3 py-2 bg-primary text-text hover:brightness-110">
              Sign Out
            </button>
          </div>
        </aside>
      ) : (
        <aside className="hidden lg:block w-40 shrink-0 bg-bg border-r border-color">
          <div className="h-svh px-4 py-6 flex flex-col">
            <Link href="/" className="w-max self-center">
              <span className="sr-only">My Company</span>
              <Image
                src="/vercel.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-12.5 h-12.5"
              />
            </Link>

            <NavLinks />

            <button className="mt-6 px-3 py-2 bg-primary text-text hover:brightness-110">
              Sign Out
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
