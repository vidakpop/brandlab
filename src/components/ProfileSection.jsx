import React from 'react';
import { motion } from 'framer-motion';
import imelda from '../assets/imelda.jpg';

const ProfileSection = () => {
  return (
    <div
      id="profile"
      className="relative max-w-7xl mx-auto px-6 py-20 text-center bg-black overflow-hidden"
    >
      {/* Background Animated Glows */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-20 w-96 h-96 bg-blue-500 opacity-25 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500 opacity-25 rounded-full filter blur-3xl"
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
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white neon-glow mb-6"
        >
          Meet Imelda Mugambi
        </motion.h2>

        {/* Profile Image and Description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <img
            src={imelda}
            alt="Imelda Mugambi"
            className="w-40 h-40 rounded-full shadow-xl border-4 border-blue-500 neon-glow mb-6 md:mb-0"
          />
          <div className="text-left text-gray-300 space-y-4">
            <p>
            Imelda Mugambi, the Visionary behind Imelda's Brand Lab is a dynamic and driven individual with a passion for Branding and digital excellence.
            
            </p>
            <p>
            With experience in digital marketing, communication and public relations, Imelda has track record of helping individuals and businesses achieve digital excellence.
            </p>
            <p>
              Her unique blend of creativity, strategy, and mentorship sets her apart as
              a leader in the field. Whether it's building a personal brand, crafting
              compelling content, or designing impactful strategies, Imelda is committed
              to helping her clients shine.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            to='contact'
            className="px-8 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
         >
            Connect with Imelda
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
