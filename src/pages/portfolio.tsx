import React from "react";
import Layout from "../components/layout";
import PortfolioGrid from "../components/portfolioGrid";
import "../styles/global.css";

const PortfolioPage = () => {
  // Define the portfolio items as an array of objects
  const portfolioItems = [
    {
      title: "Digital Health",
      description: "A brief description of Project 1.",
      link: "/portfolio/project-dh",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Earth Observation",
      description: "A brief description of Project 2.",
      link: "/project-eo",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Big Data Science",
      description: "A brief description of Project 3.",
      link: "/project-bds",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Cross Platform Development",
      description: "A brief description of Project 4.",
      link: "/project-cpd",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Natural Language Processing",
      description: "A brief description of Project 4.",
      link: "/project-nlp",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Epidemiology",
      description: "A brief description of Project 4.",
      link: "/project-epi",
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
