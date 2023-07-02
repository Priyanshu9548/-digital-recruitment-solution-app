import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navbarClasses = scroll ? "bg-white" : null;
  const mobileMenuClasses = mobileMenuOpen ? "block" : "hidden";

  return (
    <nav
      className={`fixed w-full transition-colors duration-300 ${navbarClasses}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl">Logo</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="home"
                  activeClass="text-active"
                  className={`cursor-pointer ${
                    scroll ? "text-active" : "text-inactive"
                  }`}
                  smooth
                  spy
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  activeClass="text-active"
                  className={`cursor-pointer ${
                    scroll ? "text-active" : "text-inactive"
                  }`}
                  smooth
                  spy
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="jobs"
                  activeClass="text-active"
                  className={`cursor-pointer ${
                    location.pathname === "/jobs"
                      ? "text-active"
                      : "text-inactive"
                  }`}
                  smooth
                  spy
                >
                  JOB OPENINGS
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  activeClass="text-active"
                  className={`cursor-pointer ${
                    location.pathname === "/contact"
                      ? "text-active"
                      : "text-inactive"
                  }`}
                  smooth
                  spy
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuClasses}`}>
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
              <Link
                to="home"
                activeClass="text-active"
                className={`text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/home"
                    ? "text-active"
                    : "text-inactive"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                smooth
                spy
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="text-active"
                className={`text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/about"
                    ? "text-active"
                    : "text-inactive"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                smooth
                spy
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="jobs"
                activeClass="text-active"
                className={`text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/jobs"
                    ? "text-active"
                    : "text-inactive"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                smooth
                spy
              >
                Job Openings
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                activeClass="text-active"
                className={`text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/contact"
                    ? "text-active"
                    : "text-inactive"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                smooth
                spy
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
