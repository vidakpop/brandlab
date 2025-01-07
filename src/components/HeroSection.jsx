import React from "react";
import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import main from '../assets/brand1.mp4';

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={main} // Replace with the path to your video
        autoPlay
        loop
        muted
      />

      {/* Cyberpunk Glow Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 opacity-30 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-30 rounded-full filter blur-3xl"
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 sm:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-6xl font-extrabold text-white mb-4"
        >
          Welcome to{" "}
          <span className="text-blue-500 neon-glow">IMELDA'S BRAND LAB</span>
        </motion.h1>

        <Typed
          strings={[
            "Empowering Brands",
            "Elevating Careers",
            "Transforming Lives",
          ]}
          typeSpeed={50}
          backSpeed={40}
          loop
          className="text-lg sm:text-xl text-[#ff6f61]"
        />

        <p className="mt-4 text-sm sm:text-lg text-gray-300">
          Your trusted partner in brand consultancy and career transformation.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue00 text-white font-semibold rounded-full shadow-lg neon-glow-button"
          onClick={() => document.getElementById('merger').scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
