import { XIcon } from "lucide-react";
import { SidebarContent } from "./SidebarContent";

export const MobileSidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-80 lg:hidden bg-bg border-r border-color transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button
        onClick={onClose}
        className="p-2 absolute right-0 hover:text-gray-300"
      >
        <XIcon />
      </button>

      <SidebarContent />
    </aside>
  );
};
