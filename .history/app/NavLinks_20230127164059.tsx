import { categories } from "../constants";
import NavLink from 

function NavLinks() {
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} />
        )}}
    </nav>
  )
}

export default NavLinks
