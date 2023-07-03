import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link as Link1 } from "react-router-dom";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  let navigate = useNavigate();
  const userlogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const mobilelogout = () => {
    setMobileMenuOpen(false)
    dispatch(logout());
    navigate("/login");
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
      className={`fixed  w-full transition-colors duration-300 ${navbarClasses}`}
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
                  className={`px-2 lg:px-0  h-6 w-fit  animate-text flex items-center justify-center text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500 cursor-pointer ${
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
                  className={`px-2 lg:px-0  h-6 w-fit  animate-text flex items-center justify-center text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500 cursor-pointer ${
                    scroll ? "text-active" : "text-inactive"
                  }`}
                  smooth
                  spy
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link1
                  to="jobs"
                  className={`px-2 lg:px-0  h-6 w-fit  animate-text flex items-center justify-center text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500 cursor-pointer ${
                    location.pathname === "/jobs"
                      ? "text-active"
                      : "text-inactive"
                  }`}
                 
                >
                  JOB OPENINGS
                </Link1>
              </li>
              <li className="px-2 lg:px-0  h-6 w-fit  animate-text flex items-center justify-center text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500">
                {isLoggedIn ? (
                  <button onClick={userlogout}> Logout</button>
                ) : (
                  <Link1
                    to="/signup"
                    className={`cursor-pointer ${
                     location.pathname === "/signup" || "/login"
                        ? "text-green-600"
                        : "text-inactive"
                    }`}
                  > 
                 {
                  location.pathname === "/signup"? "LOG IN":location.pathname === "/login"? "REGISTER":null
                 }
                    
                  </Link1>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden text-black">
            <button
              type="button"
              className="text-black hover:text-black focus:text-black"
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
                className={`text-gray-800 hover:bg-gray-700 cursor-pointer hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
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
                className={`text-gray-800 hover:bg-gray-700 cursor-pointer hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
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
                className={`text-gray-800 hover:bg-gray-700  hover:text-white font-medium block px-3 py-2 cursor-pointer rounded-md text-base font-medium" ${
                  location.pathname === "/jobs"
                    ? "text-active"
                    : "text-inactive"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              
              >
                Job Openings
              </Link>
              
            </li>
            <li>
            {isLoggedIn ? (
                  <button className="ml-3 font-medium" onClick={mobilelogout}>Logout</button>
                ) : (
                  <Link1
                    to="/signup"
                    className={`cursor-pointer ${
                     location.pathname === "/signup" || "/login"
                        ? "text-green-600"
                        : "text-inactive"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  > 
                 {
                  location.pathname === "/signup"? "LOG IN":location.pathname === "/login"? "REGISTER":null
                 }
                    
                  </Link1>
                )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
