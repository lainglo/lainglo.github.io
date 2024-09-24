import React from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div>
      <Header />
      <section className="page-title">
        {title && <h2>{title}</h2>}
        {subtitle && <p>{subtitle}</p>}
      </section>

      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
