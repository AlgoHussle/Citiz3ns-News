'use client'

import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

function NavLinks() {
    const pathname = usePathname();

    const isACTIVE = ()
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={true} />
        ))}
    </nav>
  )
}

export default NavLinks
