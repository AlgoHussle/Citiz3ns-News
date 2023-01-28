import { categories } from "../constants";
import N

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
