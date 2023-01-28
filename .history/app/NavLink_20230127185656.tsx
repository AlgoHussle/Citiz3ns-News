import Link from "next/link";

type Props = {
    category:string;
    isActive: boolean;
};

function NavLink({ category, isActive}: Props) {
  return (
    <Link href={`/news/${category}`} 
    className={`navLink ${
        underline decoration-orange-400 underline
    }`} >
        {category}
        </Link>
  );
}

export default NavLink;
