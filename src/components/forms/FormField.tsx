import { Label } from "@/components/ui/Label";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export const FormField = ({
  label,
  required,
  error,
  htmlFor,
  children,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label label={label} htmlFor={htmlFor} required={required} />

      {children}

      {error && (
        <p id={`${htmlFor}-error`} className="mt-1 text-sm text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
};
