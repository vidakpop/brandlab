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
      link: "mailto:imeldamugambiconsultancy@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Call",
      link: "tel:+254793287076",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      link: "https://wa.me/254793287076?text=Hi%20there!%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    },
  ];

  const developerInfo = {
    name: "Developed by Cyberjiutsu",
    link: "https://github.com/vidakpop",
    icon: <FaGithub />,
  };
  const DeveloperLinks = [
    { icon: <FaGithub />, link: "https://github.com/vidakpop" },
    
    { icon: <FaPhone />, link: "tel:+254707091841" },
    { icon: <FaWhatsapp />, link: "https://wa.me/254707091841?text=Hi%20Cyberjiutsu!%20I%20would%20like%20to%20inquire%20about%20your%20services." },
     { icon: <FaEnvelope />, link: "mailto:cyberjiutsu@gmail.com" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/davis-ngetich-690b6521b" },
  ];
  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61552745588338&mibextid=ZbWKwL" },
    
    { icon: <FaInstagram />, link: "https://www.instagram.com/imelda_mugambi/profilecard/?igsh=MWNhOTc5NHN6OW5obA==" },
   
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/imelda-mugambi-digitalconsultant" },
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
      <div
            id='contact' className="absolute -z-10 inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full opacity-20 top-10 left-10 filter blur-3xl"
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
      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">FAQs</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <button
                className="w-full text-left text-gray-300 text-lg font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="float-right text-blue-400">
                  {activeFAQ === index ? "-" : "+"}
                </span>
              </button>
              {activeFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="mt-4 text-gray-400"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
     


      
      <div className="border-t border-gray-700 mt-12 pt-6 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
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
        {/* Contact Us Section */}
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
                className="flex items-center text-gray-300 hover:text-blue-400"
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
            className="text-blue-400 text-lg font-semibold mb-6"
          >
            {developerInfo.name}
          </motion.a>
          
          <div className="flex space-x-4 mb-4" >
            {DeveloperLinks.map((social, index) => (
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
          &copy; {new Date().getFullYear()} Cyberjiutsu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
