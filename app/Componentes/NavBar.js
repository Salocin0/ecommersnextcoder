import Link from "next/link";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center text-white space-x-10">
      <Link href="/productos/menclothing" className="hover:text-gray-300">
        Ropa de Hombre
      </Link>
      <Link href="/productos/womenclothing" className="hover:text-gray-300">
        Ropa de mujer
      </Link>
      <Link href="/productos/electronics" className="hover:text-gray-300">
        Electronica
      </Link>
      <Link href="/productos/jewelery" className="hover:text-gray-300">
        Joyeria
      </Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
