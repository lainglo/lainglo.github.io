import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/global.css";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow page-content">
        {title && (
          <section className="page-title">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </section>
        )}

        <main className="page-content">{children}</main>
      </div>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
