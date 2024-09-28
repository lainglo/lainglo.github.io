import React from "react";
import { Link } from "gatsby";

interface BackLinkProps {
  to: string;
  text: string;
}

const BackLink: React.FC<BackLinkProps> = ({ to, text }) => {
  return (
    <div className="text-center mt-4">
      <Link to={to} className="back-link text-blue-600 hover:underline">
        {text}
      </Link>
    </div>
  );
};

export default BackLink;
