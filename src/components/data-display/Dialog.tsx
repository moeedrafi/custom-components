"use client";
import { useEffect, useRef } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Dialog({ open, onClose, title, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;

    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 m-0 w-125 max-w-[90vw] rounded-xl bg-light text-white backdrop:bg-bg/50"
    >
      <div className="w-125 max-w-[90vw]">
        <div className="p-6 space-y-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="text-muted-foreground">{children}</div>
        </div>

        <div className="flex justify-end gap-3 border-t border-color px-6 py-4">
          <button
            onClick={() => ref.current?.close()}
            className="rounded-md bg-white/10 px-4 py-2"
          >
            Cancel
          </button>

          <button className="rounded-md bg-red-500 px-4 py-2">Confirm</button>
        </div>
      </div>
    </dialog>
  );
}
