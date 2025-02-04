import React, { useState } from "react";
import logo from "/Logo-removebg.png";
import { Outlet, Link } from "react-router-dom";

const CustomerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For profile dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu

  const toggleProfileDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link to="/customer" className="block text-teal-600">
                <span className="sr-only">Home</span>
                <img src={logo} alt="logo" className="h-12" />
              </Link>
            </div>

            {/* Desktop Navigation and Profile Dropdown */}
            <div className="md:flex md:items-center md:gap-12">
              {/* Desktop Navigation */}
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(0, 0, 0, 1)",
                        transform: "",
                        msFilter: "",
                      }}
                    >
                      <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                      <circle cx="10.5" cy="19.5" r="1.5"></circle>
                      <circle cx="17.5" cy="19.5" r="1.5"></circle>
                    </svg>
                  </li>
                  <li>
                    <Link
                      to="/" // Update the path as needed
                      className="text-gray-500 text-lg transition hover:text-gray-500/75"
                    >
                      Order History
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Profile Dropdown */}
              <div className="hidden md:relative md:block">
                <button
                  type="button"
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                  onClick={toggleProfileDropdown}
                >
                  <span className="sr-only">Toggle dashboard menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 bg-blue-100"
                    viewBox="0 0 20 20"
                    fill="#4d6bfd"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg">
                    <div className="p-2">
                      <Link
                        to="/delivary/delivaryprofile" // Update the path as needed
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        My Profile
                      </Link>
                    </div>
                    <div className="p-2">
                      <Link to="/">
                        <button
                          type="button"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>
                          Logout
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <nav aria-label="Global">
                <ul className="flex flex-col gap-4 text-sm mt-4">
                  <li>
                    <Link
                      to="/delivary/delivaryhistory" // Update the path as needed
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      Delivary History
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/delivary/delivaryprofile" // Update the path as needed
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <div className="p-2">
                      <Link to="/">
                        <button
                          type="button"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>
                          Logout
                        </button>
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default CustomerNavbar;
