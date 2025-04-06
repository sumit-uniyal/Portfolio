import React from 'react';
import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';
import pythonLogo from '../assets/python.png';
import { IoLogoJavascript } from "react-icons/io";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* MongoDB */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>

        {/* Express Placeholder */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <p className="text-8xl text-neutral-500 pb-6">ex</p>
        </motion.div>

        {/* React */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        
        {/* PHP */}
        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <FaPhp className="text-7xl text-blue-500" />
        </motion.div> */}

        {/* Python (Proper Sizing Fix) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 flex justify-center items-center"
        >
           <img src={pythonLogo} alt="Python Logo" className="h-18 w-auto" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
