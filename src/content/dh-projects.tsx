import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const projectData = [
  {
    title: "Health Patient Registration System (HPRS)",
    date: "Late 2018",
    technologies: ["docker", "kubernetes", "bash"],
    bulletPoints: [
      "Dockerized the development environment for the project",
      "Analysed all the different components of the system",
      "Very Basic introduction to Kubernetes",
    ],
    description: (
      <>
        <p>
          The HPRS is a very matured and widely used system in South African
          public healthcare facilities. I only worked on this project for a few
          weeks. In this time, I was able to dockerize the development
          environment and get the entire system running on my local machine.
          This was not trivial as there were about 8 containers by the end of
          the exercise. Along the way, I became a de facto system analyst and
          took time to learn about each aspect of the system, such as the data
          sync and{" "}
          <Link to="https://openpixpdq.sourceforge.net/">
            PIX- PDQ (an HL7 standard for querying patient data)
          </Link>
          .
        </p>
        <StaticImage
          src={"../images/kubernetes-dashboard.png"}
          alt="Kubernetes Dashboard"
          className="project-image w-full my-4"
          placeholder="blurred"
          layout="fixed"
          width={800}
          height={400}
        />
        <p>
          I also had a brief introduction to Kubernetes and learned some basics
          thanks to edX. I found a tool to convert my docker files to kubernetes
          pods, and I tried to deploy these onto my local minikube instance.
        </p>
      </>
    ),
    imageUrl: "https://health-interop.meraka.csir.co.za/images/photos.jpg",
  },
];
