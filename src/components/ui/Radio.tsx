import { cn } from "@/lib/utils";

interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
}

export function Radio({ label, className, ...props }: RadioProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-white">
      <input
        type="radio"
        className={cn(
          // Reset browser styles
          "appearance-none",

          // Size
          "size-6 shrink-0",

          // Circle
          "rounded-full border-2 border-color bg-light",

          // Center pseudo element
          "grid place-content-center",

          // Inner dot
          "before:size-2.5 before:scale-0 before:rounded-full before:bg-secondary before:transition-transform before:duration-150 before:content-['']",

          // Checked
          "checked:before:scale-100",

          // Focus
          "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-700",

          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50",

          className,
        )}
        {...props}
      />

      <span>{label}</span>
    </label>
  );
}
