import Link from "next/link";
type Props = {
    category:string;
    isActive: boolean;
}

function NavLink({category}: Props) {
  return (
    <Link href={'/news/${category}'}
    className
    >{category}</Link>
  )
}

export default NavLink
