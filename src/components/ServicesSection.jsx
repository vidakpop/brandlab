import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaLaptop,
  FaPencilAlt,
  FaChartLine,
  FaCogs,
  FaBullhorn,
  FaLinkedin,
  FaPenNib,
  FaBuilding,
  FaLightbulb,
  FaFileAlt,
  FaFeatherAlt,
  FaHandsHelping,
} from "react-icons/fa";

const services = [
  { icon: <FaBullhorn />, title: "Social Media Audits, Management and Marketing" },
  { icon: <FaLinkedin />, title: "LinkedIn Optimization" },
  { icon: <FaPencilAlt />, title: "Content Strategy and Content Creation" },
  { icon: <FaBuilding />, title: "Organisational Communications Strategy" },
  { icon: <FaChartLine />, title: "Business Brand Development" },
  { icon: <FaLightbulb />, title: "Brand Strategy (Personal and Organizational)" },
  { icon: <FaFileAlt />, title: "Technical Writing" },
  { icon: <FaFeatherAlt />, title: "Copy and Ghost Writing" },
  { icon: <FaHandsHelping />, title: "Empowerment Coaching" },
];

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="relative max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-[#0097b2] via-[blue] to-[#003b6f] text-white"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-400 opacity-30 rounded-full filter blur-3xl"
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500 opacity-30 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [0, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center neon-glow mb-16"
      >
        Our Services
      </motion.h2>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 15px 30px rgba(255, 255, 255, 0.3)",
            }}
            className="relative bg-white/10 p-8 rounded-xl shadow-xl backdrop-blur-md border border-white/20 text-center"
          >
            <div className="text-6xl mb-6 text-[#ffdd57]">
              {service.icon}
            </div>
            <motion.h3
              whileHover={{ color: "#f43f5e" }}
              className="text-xl font-semibold mb-4"
            >
              {service.title}
            </motion.h3>
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-white opacity-10 rounded-xl z-10 hover:opacity-0 transition-all duration-500 ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
