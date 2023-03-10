import { categories } from "../constants";
import {usePath
import NavLink from "./NavLink";

function NavLinks() {
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={true} />
        ))}
    </nav>
  )
}

export default NavLinks
