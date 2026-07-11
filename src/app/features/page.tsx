"use client";
import { useState } from "react";
import { Radio } from "@/components/ui/Radio";
import { Drawer } from "@/components/ui/Drawer";
import { Dialog } from "@/components/ui/Dialog";
import { Checkbox } from "@/components/ui/Checkbox";
import { Stepper } from "@/components/navigation/Stepper";
import { MobileSidebar } from "@/components/navigation/sidebar/MobileSidebar";
import { MenuIcon, PanelLeftIcon, SunIcon, UserIcon } from "lucide-react";
import { CollapsedDesktopSidebar } from "@/components/navigation/sidebar/collapse/CollapsedDesktopSidebar";

export default function FeaturesPage() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const [checked, setChecked] = useState<boolean>(false);

  const [currentStep, setCurrentStep] = useState<number>(1);

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

        <main className="relative p-4 space-y-6">
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

          <div className="space-y-4">
            <Radio name="plan" value="free" label="Free" defaultChecked />
            <Radio name="plan" value="pro" label="Pro" />
          </div>

          <Stepper
            currentStep={currentStep}
            onStepChange={setCurrentStep}
            steps={["Create an account", "Verify email", "Get full access"]}
          />
        </main>
      </div>
    </div>
  );
}
