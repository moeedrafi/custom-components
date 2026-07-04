type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  required?: boolean;
};

export const Label = ({ label, required, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      className={`font-semibold text-sm text-muted-foreground ${
        required ? "after:content-['*'] after:ml-1 after:text-red-500" : ""
      }`}
    >
      {label}
    </label>
  );
};
