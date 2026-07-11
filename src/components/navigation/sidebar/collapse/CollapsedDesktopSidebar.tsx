import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import { CollapsedNavLinks } from "./CollapsedNavLinks";

export const CollapsedDesktopSidebar = ({
  collapsed,
}: {
  collapsed: boolean;
}) => {
  return (
    <aside
      className={cn(
        "hidden lg:block shrink-0 bg-bg border-r border-color",
        collapsed ? "w-20" : "w-80",
      )}
    >
      <div
        className={cn(
          "h-svh px-4 py-6 flex flex-col",
          collapsed ? "items-center" : "items-stretch",
        )}
      >
        <Link href="/" className="w-max self-center">
          <span className="sr-only">My Company</span>
          <Image
            src="/vercel.svg"
            alt="logo"
            width={44}
            height={44}
            loading="eager"
            priority
            className="w-11 h-11"
          />
        </Link>

        <CollapsedNavLinks collapsed={collapsed} />

        <button
          className={cn(
            "mt-6 flex items-center justify-center rounded-lg transition-all",
            collapsed
              ? "p-2 hover:text-gray-300"
              : "gap-2 px-3 py-2 bg-primary text-text hover:brightness-110",
          )}
        >
          <LogOutIcon className="size-5 shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
};
