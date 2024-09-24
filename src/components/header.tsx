import React from "react";
import Navbar from "./navbar";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <div className="text-lg font-bold">
          <a href="/" className="text-white">
            {/* Logo Placeholder */}
            {/* Example: <img src="/path-to-logo.png" alt="Logo" className="w-10 h-10"/> */}
            My Portfolio
          </a>
        </div>
        {/* Navigation Bar */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
