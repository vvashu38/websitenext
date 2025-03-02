import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl text-black">Little Millenium</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-3 mr-2">
            <li>
              <Link
                href="/"
                className="text-md font-bold text-black px-4 py-2 rounded-md hover:text-red-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-md font-bold text-black px-4 py-2 rounded-md hover:text-red-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/admission"
                className="text-md font-bold text-black px-4 py-2 rounded-md hover:text-red-400 transition-colors"
              >
                Admission
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-md font-bold text-black px-4 py-2 rounded-md hover:text-red-400 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
