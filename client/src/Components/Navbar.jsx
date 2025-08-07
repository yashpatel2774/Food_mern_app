import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cart from "../assets/basket_icon.png";
import search from "../assets/search_icon.png";
import logo from "../assets/logo.png";
import Register from "../pages/Register";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, null, " ");
        }, 100);
      }
    }
  }, [location.pathname]);

 useEffect(() => {
  window.scrollTo({ top: 0, behavior: "auto" });

  if (window.location.hash) {
    window.history.replaceState(null, null, "/");
  }
}, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Mobile App", id: "mobileapp" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="py-4 shadow-sm bg-white sticky top-0 z-50">
        <nav>
          <div className="container max-w-7xl mx-auto flex justify-between items-center px-4">
            <Link to="/">
              <img className="w-[130px]" src={logo} alt="Food Delivery" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-3xl focus:outline-none transition-transform"
              aria-label="Toggle Menu"
            >
              ☰
            </button>

            <ul
              className={`absolute md:static bg-white md:bg-transparent md:flex md:items-center md:space-x-6 top-16 left-0 w-full md:w-auto px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none z-40 transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0 md:opacity-100 md:translate-y-0 hidden md:flex"
              }`}
            >
              {navItems.map(({ name, id }) => (
                <li
                  key={id}
                  className="py-2 md:py-0 hover:text-orange-700 hover:font-bold transition cursor-pointer"
                >
                  <span onClick={() => handleScroll(id)}>{name}</span>
                </li>
              ))}

              <li className="md:hidden flex items-center space-x-4 mt-4">
                <Link to="/search">
                  <img className="w-5 h-5" src={search} alt="Search" />
                </Link>
                <Link to="/cart">
                  <img className="w-6 h-6" src={cart} alt="Cart" />
                </Link>
              </li>

              <li className="md:hidden mt-4">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="border border-[#E1653A] text-[#E1653A] px-4 py-1 rounded-2xl hover:bg-[#E1653A] hover:text-white transition"
                >
                  Sign Up
                </button>
              </li>
            </ul>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/search">
                <img className="w-5 h-5" src={search} alt="Search" />
              </Link>
              <Link to="/cart">
                <img className="w-6 h-6" src={cart} alt="Cart" />
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border border-[#E1653A] text-[#E1653A] px-4 py-1 rounded-2xl hover:cursor-pointer hover:bg-[#E1653A] hover:text-white transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </header>

      <Register isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
