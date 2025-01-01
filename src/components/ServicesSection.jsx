import React from 'react'
import { FaBriefcase, FaLaptop, FaPencilAlt, FaChartLine, FaCogs, FaBullhorn, FaLinkedin, FaPenNib, FaBuilding, FaLightbulb, FaFileAlt, FaFeatherAlt, FaHandsHelping } from "react-icons/fa";

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
]
const ServicesSection = () => {
  return (
    <div id='services' className='max-w-7xl mx-auto px-6 py-20 bg-gray-100'>
        <h2 className='text-4xl font-bold text-center mb-10'>Our Services</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {services.map((service,index)=>(
                <motion.div>
                    
                </motion.div>
            ))}

        </div>

    </div>
  )
}

export default ServicesSection