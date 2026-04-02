import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      desc: "Creating modern and attractive website designs using HTML, CSS and Tailwind.",
      icon: "💻",
    },
    {
      title: "Frontend Development",
      desc: "Building responsive and interactive websites using JavaScript and React.",
      icon: "⚛️",
    },
    {
      title: "Responsive Design",
      desc: "Making websites mobile-friendly and responsive for all devices.",
      icon: "📱",
    },
    {
      title: "UI Improvement",
      desc: "Improving website user interface and user experience for better usability.",
      icon: "🎨",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-3">My Services</h2>
      <p className="text-gray-600 mb-10">
        Services I can provide as a Frontend Developer
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-md 
            transform transition duration-300 
            hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;