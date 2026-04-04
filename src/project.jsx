import React from "react";
import { FaGithub } from "react-icons/fa";
import gh from "./images/gh.png";
import medic from "./images/medic.png";
import booknest from "./images/booknest.png";
const Projects = () => {
  const projects = [
    {
      title:  "Grammar Hub",
      desc: "A web app to help users improve their grammar skills with interactive exercises and lessons.",
      img: gh,
      github: "https://github.com/navitak217-design/web2",
    },
    {
     title: "BookNest (MERN Stack)",
      desc: "A full-stack book management web application built using MongoDB, Express, React and Node.js where users can explore and manage books.",
      img: booknest,
      github: "https://github.com/navitak217-design/Booknest",
    },
    {
     
  title: "Medic AI Website",
  desc: "A medical education website with an AI chatbot that provides health information and helps users learn medical topics.",
  img: medic,
  github: "https://github.com/navitak217-design/Medic-AI/",

    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md 
            transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;