import React from "react";
import { motion } from "framer-motion";

const TheMergerSection = () => {
  const cohorts = [
    {
      title: "April Cohort",
      description: "Your future self will thank you for acting fast. And hey, if you wait too long, you might just have to settle for FOMO. 😜",
      link: "https://forms.gle/example1", // Replace with actual Google Form link
    },
    {
      title: "August Cohort",
      description: "This offer is hotter than your morning coffee ☕ and it's slipping away fast! Don't let it pass you by",
      link: "https://forms.gle/example2", // Replace with actual Google Form link
    },
    {
      title: "December Cohort",
      description: "Don't be the one hearing about this deal after it's gone! 😱 Time's ticking, and the clock’s almost out. ⏰",
      link: "https://forms.gle/example3", // Replace with actual Google Form link
    },
  ];

  return (
    <div
      id="merger"
      className="relative max-w-7xl mx-auto px-6 py-20 text-center bg-black overflow-hidden text-white"
    >
      {/* Background Layers */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500 opacity-30 rounded-full filter blur-3xl"
            animate={{
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 360],
            }}
            transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 opacity-30 rounded-full filter blur-3xl"
            animate={{
          scale: [1.2, 0.8, 1.2],
          rotate: [0, -360],
            }}
            transition={{
          duration: 12,
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
          className="text-5xl font-extrabold neon-glow mb-10"
        >
          The Merger
        </motion.h2>
        <p className="text-lg text-gray-300 mb-6">
        The Merger Program is designed to create brands that thrive in the digital space, with a primary focus on LinkedIn. Through this program, participants gain the skills and resources needed to stand out, achieve visibility, and make a lasting impact in their fields.
        </p>
        <p className="text-lg text-gray-300 mb-6">
        By the end of the program, participants transform into powerhouses, equipped to navigate the digital landscape with confidence and expertise.
        </p>
        
  
        <div className="grid md:grid-cols-3 gap-8">
          {cohorts.map((cohort, index) => (
            <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 text-left"
            >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="text-2xl font-bold text-white mb-4"
          >
            {cohort.title}
          </motion.h3>
          <p className="text-gray-300 mb-6">{cohort.description}</p>

          {/* Book Now Button */}
            <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "blue",
                boxShadow: "0px 4px 15px rgba(0, 150, 255, 0.8)",
              }}
              href={cohort.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
            >
              Book Now
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TheMergerSection;
