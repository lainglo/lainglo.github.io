import React from "react";
import Layout from "../components/layout";
import PortfolioGrid from "../components/portfolioGrid";
import "../styles/global.css";

const PortfolioPage = () => {
  // Define the portfolio items as an array of objects
  const portfolioItems = [
    {
      title: "Project 1",
      description: "A brief description of Project 1.",
      link: "/project-1",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      link: "/project-2",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      link: "/project-3",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Project 4",
      description: "A brief description of Project 4.",
      link: "/project-4",
      imageSrc: "https://picsum.photos/300/200",
    },
  ];
  const subtitle =
    "Here are some of the projects I’ve worked on, spanning AI/ML, Quantum Computing, Earth Observation, and Digital Health.";
  return (
    <Layout title="My Portfolio" subtitle={subtitle}>
      {/* Portfolio Grid Section */}
      <PortfolioGrid items={portfolioItems} />
    </Layout>
  );
};

export default PortfolioPage;
