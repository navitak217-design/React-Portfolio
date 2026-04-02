import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_t3t3dee",
      "template_iqdo7hi",
      e.target,
      "-w7rlsi2dSGzxsUud"
    ).then(
      () => {
        alert("Message Sent Successfully!");
      },
      () => {
        alert("Failed to send message");
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 shadow-xl">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact Me</h2>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* Left Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

          <div className="space-y-5 text-gray-700">
            <p className="flex items-center gap-4">
              <FaEnvelope className="text-indigo-600 text-3xl" />
              navitak217@gmail.com
            </p>

            <p className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-indigo-600 text-3xl" />
              Pakistan
            </p>

            <p className="flex items-center gap-4">
              <FaGithub className="text-indigo-600 text-3xl" />
              github.com/navitak217-design
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <form onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded"
              required
            ></textarea>

            <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-500">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;