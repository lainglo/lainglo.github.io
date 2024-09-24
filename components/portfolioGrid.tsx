import React from "react";
import PortfolioItem from "./portfolioItem";

interface PortfolioGridProps {
  items: {
    title: string;
    description: string;
    link: string;
    imageSrc: string;
  }[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <PortfolioItem
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;
