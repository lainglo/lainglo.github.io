import React from "react";
import NavBar from "./navbar";
import "../src/styles/global.css";

const Header = () => {
  return (
    <header className="site-header">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my work and learn more about me.</p>
      <NavBar />
    </header>
  );
};

export default Header;
