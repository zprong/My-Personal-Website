import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4 gap-10 flex justify-start items-center bg-white dark:bg-neutral-900">
      <Link href="/" className="text-xl font-bold">ZP</Link>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-amber-500 transition-colors">
          Home
        </Link>
        <Link href="/about-me" className="hover:text-amber-500 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-amber-500 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;