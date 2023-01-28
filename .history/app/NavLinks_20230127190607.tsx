'use client'

import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

function NavLinks() {
    const pathname = usePathname();

    const = (path: string) => {
        return pathname?.split('/').pop() === path;
    }
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={isActive(category)} />
        ))}
    </nav>
  )
}

export default NavLinks
