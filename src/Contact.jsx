import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "93f08afe-079b-4a20-b6be-2726b81e72b9",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", access_key: formData.access_key });
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="relative bg-[url('/src/assets/contactbg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <section className="relative z-10 text-white py-16 px-4 text-center" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold ">GET IN TOUCH</h2>

                <motion.div
                  className="h-1 bg-purple-500 rounded-full w-0 mb-10 justify-center mx-auto items-center"
                  initial={{ width: 0 }}
                  whileInView={{ width: 210 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
          

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-transparent border-2 border-orange-400 outline-none w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Mail"
              required
              className="p-3 rounded-md bg-transparent border-2 border-orange-400 outline-none w-full"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded-md bg-transparent border-2 border-orange-400 outline-none sm:col-span-2 w-full"
            ></textarea>

            <button
              type="submit"
              className="sm:col-span-2 mt-4 border-2 border-orange-400 py-2 px-8 rounded-md font-semibold hover:bg-orange-500 transition"
            >
              SEND
            </button>
          </form>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mt-10 text-2xl"
          >
            <a
              href="https://www.linkedin.com/in/amrutha-gopalakrishnan-91b85b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Amrutha-Gopalakrishnan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/_ams_.16?utm_source=qr&igsh=YzI0YXlmcXI4djRl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:amruthagopal16@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaEnvelope />
            </a>
          </motion.div>

          {/* NAVIGATION LINKS */}
          <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium mt-16">
            {["home", "about", "skills", "projects", "education","experience","certificate","achievements","publications", "contact"].map((section) => (
              <li key={section} className="hover:text-purple-400 cursor-pointer">
                <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs sm:text-sm">
            © 2025 <strong>AMRUTHA.</strong> All rights reserved.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
