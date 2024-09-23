import React from "react";
import "../styles/global.css";
import Header from "../../components/header";

const PortfolioPage = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Page Title */}
      <section className="page-title">
        <h2>My Portfolio</h2>
        <p>
          Here are some of the projects I’ve worked on, spanning AI/ML, Quantum
          Computing, Earth Observation, and Digital Health.
        </p>
      </section>

      {/* Portfolio Grid Section */}
      <section className="portfolio-grid">
        <div className="portfolio-item">
          {/* Project 1 */}
          <img src="https://picsum.photos/200/300" alt="Project 1" />
          <h3>Project 1: AI for Healthcare</h3>
          <p>
            Leveraging artificial intelligence to improve diagnostics and
            treatment recommendations in healthcare. This project focused on
            predictive modeling and diagnostic support systems.
          </p>
          <a href="/portfolio/project-1" className="view-project-link">
            View Details
          </a>
        </div>

        <div className="portfolio-item">
          {/* Project 2 */}
          <img src="https://picsum.photos/200/300" alt="Project 2" />
          <h3>Project 2: Earth Observation Data Analysis</h3>
          <p>
            Analyzing satellite data using machine learning algorithms to
            monitor environmental changes and predict trends for better
            decision-making.
          </p>
          <a href="/portfolio/project-2" className="view-project-link">
            View Details
          </a>
        </div>

        <div className="portfolio-item">
          {/* Project 3 */}
          <img src="https://picsum.photos/200/300" alt="Project 3" />
          <h3>Project 3: Quantum Computing Research</h3>
          <p>
            A research initiative exploring quantum algorithms and their
            potential applications in solving computational problems. This
            includes work on quantum optimization and cryptography.
          </p>
          <a href="/portfolio/project-3" className="view-project-link">
            View Details
          </a>
        </div>

        <div className="portfolio-item">
          {/* Project 4 */}
          <img src="https://picsum.photos/200/300" alt="Project 4" />
          <h3>Project 4: Natural Language Processing (NLP)</h3>
          <p>
            Delivering various NLP solutions, including sentiment analysis,
            language translation, and text summarization using deep learning
            models.
          </p>
          <a href="/portfolio/project-4" className="view-project-link">
            View Details
          </a>
        </div>
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

export default PortfolioPage;
