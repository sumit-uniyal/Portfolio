import React from 'react';
import { PERSONAL_PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const PersonalProjects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Personal Projects
      </motion.h2>

      {/* Grid layout with 3 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {PERSONAL_PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#1a1a1a] rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full h-40 object-cover"
            />

            {/* Project Title & Description */}
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-stone-400 mb-3">{project.description}</p>

            {/* Technologies */}
            {Array.isArray(project.technologies) ? (
              <p className="text-xs text-stone-300 mb-2">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
            ) : (
              <p className="text-xs text-stone-300 mb-2">{project.technologies}</p>
            )}

            {/* GitHub and Live Links */}
            <div className="text-xs text-stone-300 space-y-1">
              {project.github && (
                <p>
                  <strong>GitHub:</strong>{' '}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    {project.github}
                  </a>
                </p>
              )}
              {project.live && (
                <p>
                  <strong>Live:</strong>{' '}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    {project.live}
                  </a>
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
