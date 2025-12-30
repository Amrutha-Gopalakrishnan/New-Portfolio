import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const features = [
  "Fast response & communication",
  "Flexible collaboration",
  "Clean & scalable solutions",
  "Modern UI focused development",
  "End-to-end project support",
];

const Contact = () => {
  const [blink, setBlink] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "",
    message: "",
    access_key: "93f08afe-079b-4a20-b6be-2726b81e72b9",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // 🔴 Blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          type: "",
          message: "",
          access_key: formData.access_key,
        });
      } else {
        setStatus("Submission failed. Try again.");
      }
    } catch {
      setStatus("Network error. Please try later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative bg-black py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-24 overflow-hidden font-body"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00ff9d14,transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <motion.span
              animate={{ opacity: blink ? 1 : 0.35 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-sm text-green-400"
            >
              <motion.span
                animate={{ opacity: blink ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="h-2 w-2 bg-green-400 rounded-full"
              />
              CONTACT
            </motion.span>

            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Get in <br />
              <span className="text-gray-500">touch.</span>
            </h3>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <p className="text-lg sm:text-xl text-gray-400 font-medium max-w-lg">
                Interested in working together or discussing a new idea?
                I’m always open to meaningful conversations.
              </p>

              <ul className="space-y-4">
                {features.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-gray-300 font-medium"
                  >
                    <FaCheckCircle className="text-[#00ff9d]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex gap-6 text-2xl text-gray-600 pt-4 ">
                <a href="https://github.com/Amrutha-Gopalakrishnan" className="hover:text-[#00ff9d] transition">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/amrutha-gopalakrishnan-91b85b315/" className="hover:text-[#00ff9d] transition">
                  <FaLinkedin />
                </a>
                <a href="mailto:amruthagopal16@gmail.com" className="hover:text-[#00ff9d] transition">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com/_ams_.16/#" className="hover:text-[#00ff9d] transition">
                  <FaInstagram />
                </a>
              </div>
            </motion.div>

            {/* RIGHT – FORM */}
            
              <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="w-full bg-[#141414] rounded-full px-6 py-3 text-sm font-body text-white outline-none border border-white/5 focus:border-[#00ff9d]/40 transition"
                />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full bg-[#141414] rounded-full px-6 py-3 text-sm font-body text-white outline-none border border-white/5 focus:border-[#00ff9d]/40 transition"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full bg-[#141414] rounded-full px-6 py-3 text-sm font-body text-white outline-none border border-white/5 focus:border-[#00ff9d]/40 transition"
              />

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full bg-[#141414] rounded-full px-6 py-3 text-sm font-body text-gray-400 outline-none border border-white/5 focus:border-[#00ff9d]/40 transition"
              >
                <option value="">How can I help you?</option>
                <option value="Freelance">Freelance project</option>
                <option value="Full-time">Full-time role</option>
                <option value="Collaboration">Collaboration</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your message"
                required
                className="w-full bg-[#141414] rounded-2xl px-6 py-4 text-sm font-body text-white outline-none border border-white/5 focus:border-[#00ff9d]/40 transition resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-fit px-10 py-4 rounded-full bg-[#00ff9d] text-black font-heading font-extrabold tracking-wide hover:scale-105 hover:shadow-[0_0_40px_#00ff9d55] transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-sm text-[#00ff9d] pt-2">{status}</p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
