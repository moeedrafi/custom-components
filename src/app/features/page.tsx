"use client";
import { useState } from "react";
import { MenuIcon, SunIcon, UserIcon } from "lucide-react";
import { CollapsibleSidebar } from "@/components/sidebar/CollapsibleSidebar";

export default function FeaturesPage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="flex min-h-svh">
      <CollapsibleSidebar isOpen={isOpen} />

      <div className="flex-1 flex flex-col">
        <header className="p-5 bg-light flex justify-between border-b border-color">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="hover:text-gray-300"
          >
            <MenuIcon />
          </button>

          <div className="flex flex-1 justify-end gap-3">
            <button className="p-2 border border-gray-400 rounded-full cursor-pointer hover:text-gray-300">
              <SunIcon />
            </button>

            <button className="p-2 border border-gray-400 rounded-full cursor-pointer hover:text-gray-300">
              <UserIcon />
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8 flex items-center justify-center">
          FEATURES
        </main>
      </div>
    </div>
  );
}
