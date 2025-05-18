import React, { useState, useEffect } from "react";
import AOS from 'aos';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";



const Contact = () => {
    useEffect(() => {
            AOS.init({ duration: 1000, easing: 'ease-out', once: true });
          }, []);

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
            <div className="relative h-screen bg-[url('/src/assets/contactbg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>

    <section className="  text-white py-10 px-4 text-center" id="contact">
        <div className="relative z-10 text-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8">GET IN TOUCH</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-3 rounded-md bg-transparent border-2 border-orange-400 outline-none sm:col-span-1"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Mail"
          required
          className="p-3 rounded-md bg-transparent border-2 border-orange-400 outline-none sm:col-span-1"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          required
          className="p-3 rounded-md bg-transparent border-2 border-orange-400 outline-none sm:col-span-2"
        ></textarea>

        <button
          type="submit"
          className="sm:col-span-2 mt-4 border-2 border-orange-400 py-2 px-8 rounded-md font-semibold hover:bg-orange-500 transition"
        >
          SEND
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a href="https://www.linkedin.com/in/amrutha-gopalakrishnan-91b85b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Amrutha-Gopalakrishnan" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_ams_.16?utm_source=qr&igsh=YzI0YXlmcXI4djRl" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaInstagram />
        </a>
        {/* <a href="mailto:amruthagopal16@gmail.com" className="hover:scale-110 transition-transform">
          <FaEnvelope />
        </a> */}
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=amruthagopal16@gmail.com&su=Hello&body=I%20am%20interested%20in%20your%20work."
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition-transform"
>
  <FaEnvelope />
</a>

      </div>

     <ul className="flex gap-10 text-white justify-center items-center font-medium text-sm mt-40">
            <li className="cursor-pointer hover:text-purple-400"><a href='#home'>Home</a></li>
            <li className="cursor-pointer hover:text-purple-400"><a href='#about'>About</a></li>
            <li className="cursor-pointer hover:text-purple-400"><a href='#skills'>Skills</a></li>
            <li className="cursor-pointer hover:text-purple-400"><a href='#projects'>Projects</a></li>
            <li className="cursor-pointer hover:text-purple-400"><a href='#education'>Education</a></li>
            <li className="cursor-pointer hover:text-purple-400"><a href='#contact'>Contact</a></li>
            <li>
                  <a href="https://github.com/Amrutha-Gopalakrishnan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-xl hover:text-purple-400" />
          </a>
            </li>
          </ul>
        


      <p className="text-white mt-8 text-sm">
        © 2025 <strong>AMRUTHA.</strong> All rights reserved.
      </p>

     </div>
    </section>
    </div>
  );
};

export default Contact;
