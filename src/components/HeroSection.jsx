import React from 'react';
import { motion } from 'framer-motion';
import {ReactTyped as Typed} from 'react-typed';

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#1d1d2b] via-[#2a2a40] to-[#1d1d2b] overflow-hidden"
    >
      {/* Cyberpunk Glow Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500 opacity-50 rounded-full filter blur-3xl"
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
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-50 rounded-full filter blur-3xl"
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

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl max-w-2xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl font-extrabold text-white mb-4"
        >
          Welcome to{" "}
          <span className="text-pink-500 neon-glow">IMELDA BRAND LAB</span>
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
          className="text-xl text-indigo-300"
        />

        <p className="mt-4 text-lg text-gray-300">
          Your trusted partner in brand consultancy and career transformation.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg neon-glow-button"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
