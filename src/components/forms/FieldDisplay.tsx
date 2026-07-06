type FieldDisplayProps = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

export const FieldDisplay = ({ label, value, icon }: FieldDisplayProps) => (
  <div className="flex flex-col gap-1 p-2 bg-gray-50 rounded-lg">
    <div className="flex items-center gap-2 text-sm text-gray-600">
      {icon}
      <span>{label}</span>
    </div>
    <span className="text-base font-medium ml-6">{value || "-"}</span>
  </div>
);
