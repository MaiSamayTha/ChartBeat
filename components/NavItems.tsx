"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/constants";

export default function NavItems() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {navItems.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={[
              "transition-colors hover:text-yellow-500",
              isActive(href) ? "text-gray-100" : "text-gray-400"
            ].join(" ")}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
