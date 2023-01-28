import Link from "next/"
type Props = {
    category:string;
    isActive: boolean;
}

function NavLink({category}: Props) {
  return (
    <Link href={'/news/${category}'}>
      
    </Link>
  )
}

export default NavLink
