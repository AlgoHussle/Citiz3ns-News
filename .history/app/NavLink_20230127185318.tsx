import Link from "next/link";

type Props = {
    category:string;
    isActive: boolean;
};

function NavLink({ category, isActive}: Props) {
  return (
    <Link href={`/news/${category}`} className="{`navLink ${
        isActive && 
        underline decoration
    }}" >
        {category}
        </Link>
  );
}

export default NavLink;
