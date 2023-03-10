import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <link href="/" prefetch={false}>
         <h1> Algo News </h1>
        </link>
      </div>
    </header>
  )
}

export default Header
