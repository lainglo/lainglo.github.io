import React from "react";
import Layout from "../../components/layout";
import Project from "../../components/project";
import { projectData } from "../../content/dh-projects";
import { Link } from "gatsby";
import BackLink from "../../components/backLink";

const DigitalHealth: React.FC = () => {
  return (
    <Layout>
      <div className="text-left p-8">
        <h1 className="text-4xl font-bold mb-4">Digital Health</h1>
        {/* Introduction */}
        <section className="mb-8">
          <p className="text-lg">
            I have been deeply involved in the Digital Health space, working on
            various research projects and software development initiatives aimed
            at improving healthcare systems. My focus has been on data
            governance, health data systems, and digital tools that enhance the
            quality of health services in under-resourced environments.
          </p>
        </section>
        {/* Projects Section */}
        <section className="projects mb-8">
          {projectData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              date={project.date}
              technologies={project.technologies}
              bulletPoints={project.bulletPoints}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </section>
        {/* Outcomes & Future Prospects */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Outcomes & Future Prospects
          </h2>
          <p className="text-lg">
            My contributions have led to significant improvements in the quality
            of healthcare data management and usage across several projects.
            Looking ahead, I am focused on integrating advanced machine learning
            models to enhance predictive analytics in healthcare systems. This
            includes leveraging AI to identify disease outbreaks and to
            personalize patient care through more accurate data insights.
          </p>
        </section>
        {/* Back to Portfolio Link */}
        <BackLink to="/portfolio" text="Back to Portfolio" />
      </div>
    </Layout>
  );
};

export default DigitalHealth;
