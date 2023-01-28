
type Props = {
    category:string;
    isActive: boolean;
}

function NavLink({category}: Props) {
  return (
    <Link href{'/news/${}'>
      
    </Link>
  )
}

export default NavLink
