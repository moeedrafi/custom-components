import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (checked: boolean) => void;
}

export function Checkbox({
  id,
  label,
  checked,
  onChange,
  disabled,
  className,
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-grid grid-cols-[auto_1fr] items-center gap-3 cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="peer absolute inset-0 h-5 w-5 cursor-pointer opacity-0"
        />

        <span className="group flex size-5 items-center justify-center rounded bg-text transition-colors peer-checked:bg-blue-600">
          <Check className="size-3.5 text-text scale-0 transition-transform group-peer-checked:scale-100" />
        </span>
      </span>

      <span className="text-sm text-text">{label}</span>
    </label>
  );
}
