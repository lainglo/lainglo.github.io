import React from "react";
import PortfolioGrid from "../components/portfolioGrid";
import Layout from "../components/layout";
import "../styles/global.css";

const Games = () => {
  const gamePortfolio = [
    {
      title: "Game 1",
      description: "A brief description of Game 1.",
      link: "/game-1",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Game 2",
      description: "A brief description of Game 2.",
      link: "/game-2",
      imageSrc: "https://picsum.photos/300/200",
    },
    // Add more items as needed
  ];
  const subtitle = "Welcome to the games page!";

  return (
    <Layout title="Games Page" subtitle={subtitle}>
      {/* Portfolio Grid Section */}
      <PortfolioGrid items={gamePortfolio} />
    </Layout>
  );
};

export default Games;
