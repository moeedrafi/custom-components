import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  PhoneIcon,
  LayoutDashboardIcon,
  MessageCircleQuestionIcon,
} from "lucide-react";

const routes = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboardIcon />,
  },
  {
    label: "Features",
    href: "/features",
    icon: <HomeIcon />,
  },
  {
    label: "About",
    href: "/about",
    icon: <HomeIcon />,
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    icon: <PhoneIcon />,
  },
  {
    label: "FAQs",
    href: "/faqs",
    icon: <MessageCircleQuestionIcon />,
  },
  {
    label: "FAQs",
    href: "/faqs1",
    icon: <MessageCircleQuestionIcon />,
  },
  {
    label: "FAQs",
    href: "/faqs2",
    icon: <MessageCircleQuestionIcon />,
  },
  {
    label: "FAQs",
    href: "/faqs3",
    icon: <MessageCircleQuestionIcon />,
  },
  {
    label: "FAQs",
    href: "/faqs4",
    icon: <MessageCircleQuestionIcon />,
  },
  {
    label: "FAQs",
    href: "/faqs5",
    icon: <MessageCircleQuestionIcon />,
  },
];

export const SidebarContent = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-svh px-4 py-6 flex flex-col">
        <Link href="/" className="w-max self-center">
          <span className="sr-only">My Company</span>
          <Image
            src="/vercel.svg"
            alt="logo"
            width={50}
            height={50}
            className="w-12.5 h-12.5"
          />
        </Link>

        <nav className="flex-1 mt-8 space-y-2 overflow-y-auto hide-scrollbar">
          {routes.map(({ href, label, icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive ? "border bg-light text-white border-color" : "text-gray-400 border-transparent hover:bg-light hover:text-white"}`}
              >
                {icon}
                {label}
              </Link>
            );
          })}
        </nav>

        <button className="mt-6 px-3 py-2 bg-primary text-text hover:brightness-110">
          Sign Out
        </button>
      </div>
    </>
  );
};
