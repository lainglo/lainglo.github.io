import React from "react";
import Header from "../../components/header";
import "../styles/global.css";

const AboutPage = () => {
  return (
    <div>
      {/* Reusable Header */}
      <Header />

      {/* Page Title */}
      <section className="page-title">
        <h2>About Me</h2>
      </section>

      {/* About Content */}
      <section className="page-content">
        <p>
          I’m a passionate researcher and engineer working across a variety of
          fields including AI/ML, Digital Health, Earth Observation, and Quantum
          Computing. This portfolio showcases my work and contributions to
          various sectors over the years.
        </p>
        <p>
          Feel free to explore my projects and reach out through the contact
          page!
        </p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
