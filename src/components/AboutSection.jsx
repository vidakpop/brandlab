import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-20 text-center bg-black overflow-hidden"
    >
      {/* Background Glow Effects to make it futuristic */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-10 w-72 h-72 bg-blue-500 opacity-30 rounded-full filter blur-3xl"
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
          className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500 opacity-30 rounded-full filter blur-3xl"
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

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white neon-glow mb-6"
        >
          About Imelda's Brand Lab
        </motion.h2>

        <p className="text-lg text-gray-300 mb-6">
          Imelda is a passionate consultant dedicated to empowering individuals
          and businesses to achieve their fullest potential. With expertise in
          digital strategy, brand consulting, and content creation, Imelda has
          transformed countless brands and careers.
        </p>

        {/* Animated Stats Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-4xl font-bold text-pink-500 neon-glow">100+</h3>
            <p className="text-gray-300">Brands Empowered</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-4xl font-bold text-blue-500 neon-glow">150+</h3>
            <p className="text-gray-300">Careers Transformed</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-4xl font-bold text-blue-500 neon-glow">
              1 Year
            </h3>
            <p className="text-gray-300">Industry Experience</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
