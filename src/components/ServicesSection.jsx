import React from "react";
import { motion } from "framer-motion";
import {
  
  FaBullhorn,
  FaLinkedin,
  FaPencilAlt,
  FaBuilding,
  FaChartLine,
  FaLightbulb,
  FaFileAlt,
  FaFeatherAlt,
  FaHandsHelping,
} from "react-icons/fa";
import { BsSignMergeRightFill } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { MdCrisisAlert,MdWorkspacePremium } from "react-icons/md";


const serviceCategories = [
  {
    category: "Digital Excellence",
    services: [
      {
        icon: <BsSignMergeRightFill />,
        title: "The Merger Program",
        description:
          "Our flagship program empowers professionals and businesses to build thriving brands, primarily on LinkedIn. Participants gain visibility, impact, and tools to position themselves as powerhouses in their fields. Includes post-program support like alumni networks and progress tracking.",
      },
      {
        icon: <FaBullhorn />,
        title: "Social Media Audits, Management, and Marketing",
        description:
          "Tailored audits to assess your current social media presence.Comprehensive management services to align platforms with your brand goals.",
      },
      {
        icon: <FaLinkedin />,
        title: "LinkedIn Optimization",
        description:
          "Personal and business profile optimization for visibility, connection building, and thought leadership.",
      },
    ],
  },
  {
    category: "Brand Strategy",
    services: [
      {
        icon: <FaChartLine />,
        title: "Personal and Business Brand Development",
        description:
          "Crafting cohesive brand identities that align with your goals, audience, and industry trends.",
      },
      {
        icon: <FaBuilding />,
        title: "Organizational Communications Strategy",
        description:
          "Comprehensive audits and strategies to enhance internal and external communication.Includes tailored communication frameworks and employee engagement strategies.",
      },
      {
        icon: <MdCrisisAlert />,
        title: "Reputation and Crisis Management",
        description:
          "Proactive reputation building and strategic solutions for handling PR challenges.",
      },
      {
        icon: <MdWorkspacePremium />,
        title: "Employee Branding Programs",
        description:
          "Equip your team with professional LinkedIn profiles and personal branding skills to reflect your company’s vision.",
      },
    ],
  },
  {
    category: "Content Excellence",
    services: [
      {
        icon: <FaPencilAlt />,
        title: "Content Strategy and Creation",
        description:
          "End-to-end content solutions, including blog posts, video scripts, and social media content tailored for your industry.",
      },
      {
        icon: <FaFeatherAlt />,
        title: "Copywriting and Ghostwriting",
        description:
          "Persuasive, professional, and results-driven writing for marketing campaigns, proposals, and executive communication.",
      },
      {
        icon: <FaFileAlt />,
        title: "Technical Writing",
        description:
          "Clear and impactful documentation, proposals, and specialized reports.",
      },
    ],
  },
  {
    category: "Empowerment & Coaching",
    services: [
      {
        icon: <FaHandsHelping />,
        title: "Leadership Development and Coaching",
        description:
          "Empower professionals with personalized coaching for visibility, confidence, and leadership.Focus on aligning personal growth with professional success.",
      },
      {
        icon: <GrWorkshop />,
        title: "Workshops and Training Programs",
        description:
          "Custom workshops on digital strategy, storytelling, social media etiquette, and personal branding for teams and organizations.",
      },
    ],
  },
  {
    category: "Market Intelligence Services",
    services: [
      {
        icon: <FaHandsHelping />,
        title: "Market Research and Trend Analysis",
        description:
          "Insights into industry trends and market shifts to inform branding and communication strategies.",
      },
      {
        icon: <FaHandsHelping />,
        title: "AI-Assisted Strategy Development",
        description:
          "Utilize AI-driven tools for data analysis, trend forecasting, and strategic planning.",
      },
    ],
  },
];

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="relative max-w-7xl mx-auto px-6 py-20 text-center bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white overflow-hidden"
    >
      {/* Background Animations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400 opacity-30 rounded-full filter blur-3xl"
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
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-30 rounded-full filter blur-3xl"
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
        className="text-5xl font-extrabold neon-glow mb-16"
      >
        Our Service Offerings
      </motion.h2>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <div key={index} className="mb-16">
          {/* Category Title */}
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            className="text-3xl font-bold text-[#ff6f61] mb-12"
          >
            {category.category}
          </motion.h3>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {category.services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 15px 30px rgba(0, 200, 255, 0.8)",
                }}
                className="bg-white/10 p-8 rounded-xl shadow-xl backdrop-blur-md border border-white/20 text-left hover:cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl text-[#00aaff]">{service.icon}</div>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                </div>
                <p className="text-sm text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
