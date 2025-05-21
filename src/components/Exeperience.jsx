import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';  // Import from react-icons

const Experience = () => {
  return (
    <div className="pb-10 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-bold"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-stone-700 pl-6">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-12 relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <FaBriefcase size={14} />
            </span>

            <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6">
              <p className="text-sm text-stone-400 mb-1">{experience.year}</p>
              <h3 className="text-xl font-semibold mb-1">
                {experience.role}
                <span className="text-sm font-normal text-stone-500 ml-2">
                  @ {experience.company}
                </span>
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
