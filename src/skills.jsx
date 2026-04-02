import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind",
      img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node JS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-3">My Skills</h2>
      <p className="text-gray-600 mb-10">
        Technologies I work with
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md 
            transform transition duration-300 
            hover:scale-110 hover:shadow-2xl cursor-pointer"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 mx-auto mb-3"
            />
            <h3 className="font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;