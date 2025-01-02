import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      link: "mailto:contact@yourdomain.com",
    },
    {
      icon: <FaPhone />,
      label: "Call",
      link: "tel:+1234567890",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      link: "https://wa.me/1234567890?text=Hi%20there!%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    },
  ];

  const developerInfo = {
    name: "Developed by John Doe",
    link: "https://github.com/johndoe",
  };

  const socialLinks = [
    { icon: <FaFacebook />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
  ];

  const faqs = [
    {
      question: "What is Social Media Auditing?",
      answer: "Social media auditing involves analyzing your accounts to evaluate performance and improve your online presence.",
    },
    {
      question: "How does LinkedIn Optimization work?",
      answer: "We optimize your LinkedIn profile to enhance visibility and attract professional opportunities.",
    },
    {
      question: "What is included in Content Strategy services?",
      answer: "Our content strategy includes planning, creating, and distributing content to align with your goals.",
    },
    {
      question: "What is Empowerment Coaching?",
      answer: "Empowerment coaching helps you achieve personal and professional growth by focusing on your strengths and aspirations.",
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-12 relative">
      {/* Floating Glowing Shapes */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[300px] h-[300px] bg-pink-500 rounded-full opacity-20 top-10 left-10 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full opacity-10 bottom-10 right-10 filter blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Contact Us Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-6">
            Reach out to us via email, phone, or WhatsApp.
          </p>
          <div className="space-y-4">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center text-gray-300 hover:text-pink-400"
              >
                <span className="text-2xl mr-3">{contact.icon}</span>
                <span>{contact.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Developer Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Developer</h2>
          <p className="text-gray-400 mb-4">
            This website was developed with passion and care by:
          </p>
          <motion.a
            href={developerInfo.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-pink-400 text-lg font-semibold"
          >
            {developerInfo.name}
          </motion.a>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <p className="text-gray-400 mb-6">
            Stay connected with us on social media.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-300 hover:text-indigo-400 text-3xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
