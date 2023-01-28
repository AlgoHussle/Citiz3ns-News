import Link from "next/link";
type Props = {
    category:string;
    isActive: boolean;
}

function NavLink({category, isActive}: Props) {
  return (
    <Link href={'/news/${category}'}
    className='navLink 1' 
    >{category}</Link>
  )
}

export default NavLink
