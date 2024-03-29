import Link from 'next/link';
import NavBar from './NavBar';

const Header = () => (
  <header className="bg-gray-900 py-4 px-8 flex justify-between items-center">
    <div className="w-30">
      <Link href='/'>
        <h1 className="text-white text-2xl cursor-pointer">Store</h1> 
      </Link>
    </div>
    <div className="w-70">
      <NavBar />
    </div>
  </header>
);

export default Header;