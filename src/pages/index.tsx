import React from "react";
import { Link } from "gatsby";
import "../styles/global.css";

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and learn more about me.</p>
      </header>

      {/* Image Section */}
      <section className="home-image">
        <img src="https://picsum.photos/1200/600" alt="Random Placeholder" />
      </section>

      {/* Navigation Section */}
      <nav className="home-nav">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
