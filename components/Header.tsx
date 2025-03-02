import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl text-white">Little Millenium</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link
                href="/"
                className="text-sm text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/admission"
                className="text-sm text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Admission
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
