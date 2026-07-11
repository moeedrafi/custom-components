"use client";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-light px-4 py-2 text-text"
      >
        Open drawer
      </button>

      <div
        className={`fixed inset-0 z-50 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-dark/50 transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-light shadow-xl transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-2 text-gray-400 hover:text-white"
          >
            <span className="sr-only">Close panel</span>
            <XIcon className="h-6 w-6" />
          </button>

          <div className="flex h-full flex-col overflow-y-auto p-6">
            <h2 className="text-lg font-semibold text-white">Panel title</h2>
            <div className="mt-6 flex-1 text-white">Your content</div>
          </div>
        </div>
      </div>
    </>
  );
};
