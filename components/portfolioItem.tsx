import React from "react";
import { Link } from "gatsby";

interface PortfolioItemProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  link,
  imageSrc,
}) => {
  return (
    <Link to={link}>
      <div className="p-6 bg-gray-100 hover:bg-gray-200 shadow-md rounded-md transition">
        <img src={imageSrc} alt={title} className="rounded-md mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </Link>
  );
};

export default PortfolioItem;
