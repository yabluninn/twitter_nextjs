"use client";

import { PAGES } from "../config/pages.config";
import MenuLink from "./MenuLink";

export default function Menu() {
  return (
    <nav className="flex gap-6">
      <MenuLink title="Home" href={PAGES.HOME} />
      <MenuLink title="Explore" href={PAGES.EXPLORE} />
      <MenuLink title="Profile" href={PAGES.PROFILE_FAKE} />
    </nav>
  );
}
