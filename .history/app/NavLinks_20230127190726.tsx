'use client'

import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

function NavLinks() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split('/').pop() === path;
    }
  return (
    <nav className=>
      {categories.map((category) => (
        <NavLink key={category} 
                category={category} 
                isActive={isActive(category)} 
                />
        ))}
    </nav>
  )
}

export default NavLinks
