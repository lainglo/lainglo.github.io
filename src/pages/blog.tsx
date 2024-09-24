import React from "react";
import PortfolioGrid from "../components/portfolioGrid";
import Layout from "../components/layout";
import "../styles/global.css";

const Blog = () => {
  const blogPortfolio = [
    {
      title: "Blog 1",
      description: "A brief description of Blog 1.",
      link: "/blog-1",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Blog 2",
      description: "A brief description of Blog 2.",
      link: "/blog-2",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Blog 3",
      description: "A brief description of Blog 3.",
      link: "/blog-3",
      imageSrc: "https://picsum.photos/300/200",
    },
    {
      title: "Blog 4",
      description: "A brief description of Blog 4.",
      link: "/blog-4",
      imageSrc: "https://picsum.photos/300/200",
    },
    // Add more items as needed
  ];
  const subtitle = "Welcome to the blog page!";
  return (
    <Layout title="Blog Page" subtitle={subtitle}>
      {/* Portfolio Grid Section */}
      <PortfolioGrid items={blogPortfolio} />
    </Layout>
  );
};

export default Blog;
