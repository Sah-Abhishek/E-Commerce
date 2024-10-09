import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
    if (
      accountDropdownRef.current &&
      !accountDropdownRef.current.contains(event.target)
    ) {
      setAccountDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-transparent backdrop-blur-md shadow-lg py-4 md:px-10 px-7">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer text-white">
          Ayurayurveda
        </div>

        {/* Center navigation items */}
        <div className="flex-grow flex justify-center">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="text-xl">
                <NavLink
                  to={item.link}
                  className="text-white hover:text-blue-600 duration-500 font-bold text-sm"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Dropdown for Products & Services */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white hover:text-blue-600 font-bold text-sm"
              >
                Products & Services
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md z-50">
                  <li>
                    <NavLink
                      to="/products-services/#products"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products-services/#services"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Services
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Account Dropdown (on the right) */}
        <div className="ml-auto relative" ref={accountDropdownRef}>
          <button
            onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
            className="text-white hover:text-blue-600 font-bold text-sm"
          >
            Account
          </button>
          {accountDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white shadow-md z-50">
              <li>
                <NavLink
                  to="/#"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                  onClick={() => setAccountDropdownOpen(false)}
                >
                  User
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                  onClick={() => setAccountDropdownOpen(false)}
                >
                  Admin
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
