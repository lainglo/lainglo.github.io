import React from "react";
import Layout from "../../components/layout";
import "../styles/global.css";

const HomePage = () => {
  return (
    <Layout>
      {/* Image Section */}
      <section className="home-image">
        <img src="https://picsum.photos/1200/600" alt="Random Placeholder" />
      </section>
    </Layout>
  );
};

export default HomePage;
