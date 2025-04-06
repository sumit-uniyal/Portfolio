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
      <div>
        {PERSONAL_PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              {/* Technologies */}
              {Array.isArray(project.technologies) ? (
                <p className="text-sm text-stone-300">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
              ) : (
                <p className="text-sm text-stone-300">{project.technologies}</p>
              )}

              {/* GitHub and Live Links */}
              <div className="mt-2 text-sm text-stone-300">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
