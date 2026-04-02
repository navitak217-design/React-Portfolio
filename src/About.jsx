import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>

      <p className="about-description">
        I am a passionate Frontend Developer skilled in HTML, CSS, JavaScript,
        Bootstrap, Tailwind CSS and React. I enjoy building modern and responsive
        websites with clean design and great user experience.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <h3>💻 Frontend Development</h3>
          <p>
            I build responsive and modern websites using React, Tailwind CSS
            and JavaScript.
          </p>
        </div>

        <div className="about-card">
          <h3>🚀 Projects</h3>
          <p>
            I have worked on projects like Grammar Hub, BookNest (MERN Stack)
            and Medic AI.
          </p>
        </div>

        <div className="about-card">
          <h3>📚 Learning</h3>
          <p>
            I am always learning new technologies to improve my development
            skills.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;