import { categories } from "../constants";
import NavLink from "./NavLink";

function NavLinks() {
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive />
        )}}
    </nav>
  )
}

export default NavLinks
