import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer py-4 bg-gray-800 text-white text-center">
      <p>
        &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
