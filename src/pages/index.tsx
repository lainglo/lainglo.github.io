import React from "react";
import Header from "../../components/header";
import "../styles/global.css";

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Image Section */}
      <section className="home-image">
        <img src="https://picsum.photos/1200/600" alt="Random Placeholder" />
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

export default HomePage;
