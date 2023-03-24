import Link from "next/link";
import React, { useState } from "react";

const Navbar = (active) => {
  const [nav, setNav] = useState(false);
  return (
    <div className="h-16">
      <nav className="bg-white shadow-lg fixed z-50 left-0 right-0 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-pink-500 hover:text-pink-600"
              >
                Master Eater
              </Link>
              <div className="hidden md:block ml-4">
                <Link
                  href="/"
                  className={`${
                    active.active == "home"
                      ? "text-pink-500"
                      : "text-gray-600 hover:text-pink-500"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Home
                </Link>
                <Link
                  href="/recipe"
                  className={`${
                    active.active == "recipe"
                      ? " text-pink-500"
                      : "text-gray-600 hover:text-pink-500"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Recipe
                </Link>
                <Link
                  href="/review"
                  className={`${
                    active.active == "review"
                      ? " text-pink-500"
                      : "text-gray-600 hover:text-pink-500"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Review
                </Link>
                <Link
                  href="/service"
                  className={`${
                    active.active == "service"
                      ? " text-pink-500"
                      : "text-gray-600 hover:text-pink-500"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Service
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="https://www.instagram.com/master.eater/"
                target="_blank"
                className={`text-gray-600 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@master.eater"
                target="_blank"
                className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Tiktok
              </a>
            </div>
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => {
                  setNav(!nav);
                }}
                type="button"
                className="bg-pink-500 hover:bg-pink-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
          </div>
        </div>

        {nav && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-600 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/recipe"
                className="text-gray-600 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Recipe
              </Link>
              <Link
                href="/review"
                className="text-gray-600 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Review
              </Link>
              <Link
                href="/service"
                className="text-gray-600 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Service
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <a
                    href="https://www.instagram.com/master.eater/"
                    target="_blank"
                    className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md text-sm font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@master.eater"
                    target="_blank"
                    className="bg-pink-500 ml-2 hover:bg-pink-600 text-white py-2 px-4 rounded-md text-sm font-medium"
                  >
                    Tiktok
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
