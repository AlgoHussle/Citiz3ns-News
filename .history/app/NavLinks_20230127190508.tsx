'use client'

import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

function NavLinks() {
    const pathname = usePathname();

    const isACTIVE = (path: string) => {
        return pathname?.split('/').pop() === path;
    }
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={isActive} />
        ))}
    </nav>
  )
}

export default NavLinks
