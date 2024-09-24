import React from "react";
import Layout from "../components/layout";
import "../styles/global.css";

const AboutPage = () => {
  return (
    <Layout title="About Me">
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
    </Layout>
  );
};

export default AboutPage;
