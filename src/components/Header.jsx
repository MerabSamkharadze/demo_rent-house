import Link from "next/link";

function Header() {
  return (
    <header className="bg-red-900 fixed w-screen top-0 left-0 z-50 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/listing" className="hover:underline">
            Listing
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          {/* Icon for mobile menu */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
