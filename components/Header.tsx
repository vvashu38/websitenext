import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl text-black">Little Millenium</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-3 mr-2">
            <li className="lg:mb-0 mb-2">
              <Link
                href="/"
                className="text-md font-bold text-black px-4 py-2 rounded-md hover:text-red-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="lg:mb-0 mb-2">
              <Link
                href="/about"
                className="text-md font-bold text-black px-4 py-2 rounded-md hover:text-red-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li className="lg:mb-0 mb-2">
              <Link
                href="/admission"
                className="text-md font-bold text-black px-4 py-2 rounded-md hover:text-red-400 transition-colors"
              >
                Admission
              </Link>
            </li>
            <li className="lg:mb-0 mb-2">
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
