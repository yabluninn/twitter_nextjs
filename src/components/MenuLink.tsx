"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  title: string;
  href: string;
}

export default function MenuLink({ title, href }: MenuLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? "text-white" : "text-white/50"}>
      {title}
    </Link>
  );
}
