"use client";
import { useState } from "react";
import { MobileSidebar } from "@/components/sidebar/MobileSidebar";
import { MenuIcon, PanelLeftIcon, SunIcon, UserIcon } from "lucide-react";
import { CollapsedDesktopSidebar } from "@/components/sidebar/collapse/CollapsedDesktopSidebar";

export default function FeaturesPage() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-svh">
      <CollapsedDesktopSidebar collapsed={collapsed} />
      <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="flex-1 flex flex-col">
        <header className="p-5 bg-light flex justify-between border-b border-color">
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className="hidden lg:block hover:text-gray-300"
          >
            <PanelLeftIcon />
          </button>

          <button
            className="lg:hidden hover:text-gray-300"
            onClick={() => setMobileOpen(true)}
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
