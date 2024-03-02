"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Users", icon: "/icons/user.svg", href: "/auth/manage/users" },
  {
    name: "Notifications",
    icon: "/icons/notification.svg",
    href: "/auth/manage/notifications",
  },
  {
    name: "Settings",
    icon: "/icons/settings.svg",
    href: "/auth/manage/settings",
  },
  {
    name: "Sign In",
    icon: "/icons/login.svg",
    href: "/auth/signin",
  },
  {
    name: "Back",
    icon: "/icons/back.svg",
    href: "/auth/manage",
  },
];
export function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="text-2xl leading-loose">
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <div className="flex gap-2 items-center hover:underline">
            <Image
              className=""
              src={link.icon}
              alt={link.name}
              width={24}
              height={24}
            />
            {link.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
