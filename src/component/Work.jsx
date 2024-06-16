import React from "react";

// Import images (adjust paths as needed)
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";

const projects = [
  {
    id: 1,
    img: project1,
    title: "Lorem Ipsum Dolor 01",
    date: "April 2022",
    alt: "A macintosh on a yellow background.",
  },
  {
    id: 2,
    img: project2,
    title: "Lorem Ipsum Dolor 02",
    date: "April 2022",
    alt: "On a Blue background, a Wacom and a mouse.",
  },
  {
    id: 3,
    img: project3,
    title: "Lorem Ipsum Dolor 03",
    date: "April 2022",
    alt: "A Cassette tape on a mellow apricot background.",
  },
  {
    id: 4,
    img: project4,
    title: "Lorem Ipsum Dolor 04",
    date: "April 2022",
    alt: "Blue digital watch on a dark liver background.",
  },
  {
    id: 5,
    img: project5,
    title: "Lorem Ipsum Dolor 05",
    date: "April 2022",
    alt: "On a dark liver background, Airport luggage car carrying a luggage.",
  },
  {
    id: 6,
    img: project6,
    title: "Lorem Ipsum Dolor 06",
    date: "April 2022",
    alt: "On a yellow background, a digital watch and a glass.",
  },
  {
    id: 7,
    img: project7,
    title: "Lorem Ipsum Dolor 07",
    date: "April 2022",
    alt: "A fujifilm instant camera on a dark electric blue background.",
  },
];

const ProjectCard = ({ project }) => (
  <a href="#" className="project-card">
    <figure className="card-banner">
      <img src={project.img} className="w-100" alt={project.alt} />
    </figure>
    <div className="card-content">
      <h3 className="h4 card-title">{project.title}</h3>
      <time className="publish-date" dateTime="2022-04">
        {project.date}
      </time>
    </div>
  </a>
);

const Work = () => {
  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Works</p>
            <h2 className="h3 section-title">
              See My Works Which Will Amaze You!
            </h2>
            <p className="section-text">
              We develop the best quality website that serves for the long-term.
              Well-documented, clean, easy and elegant interface helps any
              non-technical clients.
            </p>
          </div>
        </li>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
        <li>
          <button className="load-more">Load more work</button>
        </li>
      </ul>
    </section>
  );
};

export default Work;
