import { SidebarContent } from "./SidebarContent";

export const DesktopSidebar = () => {
  return (
    <aside className="hidden lg:block w-80 shrink-0 bg-bg border-r border-color">
      <SidebarContent />
    </aside>
  );
};
