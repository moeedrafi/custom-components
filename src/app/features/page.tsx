"use client";
import { useState } from "react";
import { Checkbox } from "@/components/forms/Checkbox";
import { Dialog } from "@/components/data-display/Dialog";
import { Drawer } from "@/components/data-display/Drawer";
import { MobileSidebar } from "@/components/sidebar/MobileSidebar";
import { MenuIcon, PanelLeftIcon, SunIcon, UserIcon } from "lucide-react";
import { CollapsedDesktopSidebar } from "@/components/sidebar/collapse/CollapsedDesktopSidebar";

export default function FeaturesPage() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const [checked, setChecked] = useState<boolean>(false);

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

        <main className="relative p-4 space-x-3">
          <Checkbox
            id="terms"
            label="I agree to the terms"
            checked={checked}
            onChange={setChecked}
          />

          <Drawer />

          <>
            <button onClick={() => setOpenDialog(true)}>Open Dialog</button>

            <Dialog
              open={openDialog}
              onClose={() => setOpenDialog(false)}
              title="Delete Account"
            >
              This cannot be undone.
            </Dialog>
          </>
        </main>
      </div>
    </div>
  );
}
