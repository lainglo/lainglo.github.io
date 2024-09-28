import React from "react";

// Define the type for portfolio items
interface ProjectProps {
  title: string;
  date?: string;
  technologies: string[] | undefined;
  bulletPoints: string[];
  description: React.ReactNode;
  imageUrl?: string;
  embeddedObject?: React.ReactNode; // You can embed objects like iframes, videos, etc.
}

// Component to render individual projects
const Project: React.FC<ProjectProps> = ({
  title,
  date,
  technologies = [],
  bulletPoints,
  description,
  imageUrl,
  embeddedObject,
}) => {
  return (
    <div className="project">
      <h3 className="project-title text-2xl font-semibold">{title}</h3>
      <p className="project-date text-gray-600 text-sm italic">{date}</p>

      {imageUrl && (
        <img src={imageUrl} alt={title} className="project-image w-full my-4" />
      )}

      {embeddedObject && (
        <div className="project-embed my-4">{embeddedObject}</div>
      )}

      <div className="mb-4 flex items-center justify-between">
        {" "}
        {/* Flex container for title and technologies */}
        <h4 className="text-xl font-semibold">Technologies & Tools</h4>
        <div className="flex space-x-2 mt-1">
          {" "}
          {/* Adjusted margin to align better */}
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4 border-t border-gray-300 pt-4">
        <h4 className="text-xl font-semibold">Key Points</h4>
        <ul className="project-points list-disc ml-5 mt-2 mb-4">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="project-description mb-8 px-4 md:px-8 border-t border-gray-300 pt-4">
        {description}
      </div>
    </div>
  );
};

export default Project;
