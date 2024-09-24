import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Games", path: "/games" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu Icon (Visible on smaller screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu (Visible on larger screens) */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 absolute bg-gray-800 text-white z-50 md:hidden`}
        style={{ padding: "1rem" }} // Set max height and enable scrolling
      >
        <div className="mt-2 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setIsOpen(false)} // Close the menu when an item is clicked
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
