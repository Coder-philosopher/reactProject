import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the menu when a link is clicked
    }
  };

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="border-gray-200 rounded-md px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-10 sm:h-12 mr-3"
              alt="Logo"
            />
          </Link>

          <div className="hidden lg:flex lg:space-x-4 lg:items-center">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
            >
              Get started
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={handleMenuToggle}
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium mt-4 lg:mt-0 lg:items-center">
              {[
                "contact",
                "github",
                "todo",
                "password",
                "nationality",
                "login",
                "gallery",
                "crypto",
                "counter",
                "autobg",
                "btnbg",
              ].map((route) => (
                <li key={route}>
                  <NavLink
                    to={`/${route}`}
                    onClick={handleLinkClick} // Close menu when clicked
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    {route.charAt(0).toUpperCase() + route.slice(1)}
                  </NavLink>
                </li>
              ))}
              <li className="block lg:hidden">
                <Link
                  to="#"
                  className="block text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2.5"
                >
                  Log in
                </Link>
              </li>
              <li className="block lg:hidden">
                <Link
                  to="#"
                  className="block text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2.5"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
