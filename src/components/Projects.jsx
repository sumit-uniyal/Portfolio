import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Grid with 3 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#1a1a1a] rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-stone-400 mb-3">{project.description}</p>
            {Array.isArray(project.technologies) ? (
              <p className="text-xs text-stone-300">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
            ) : (
              <p className="text-xs text-stone-300">{project.technologies}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {PROJECTS.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-sm font-semibold bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
