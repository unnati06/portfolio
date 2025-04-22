import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">My Projects.</motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.8 }} 
            whileHover={{
              scale: 1.05, 
              boxShadow: "0px 0px 20px rgba(147, 51, 234, 0.5)", 
              backgroundColor: "#000"  // Changes background to pure black on hover
            }}
            className="w-fit bg-neutral-900 cursor-pointer p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Project Image */}
            {/* <img 
              src={project.image} 
              className="w-full h-40 object-cover rounded-md mb-4" 
              alt={project.title} 
            /> */}

            {/* Project Title */}
            <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>

            {/* Project Description */}
            <p className="mb-4 text-neutral-400 text-sm">{project.description}</p>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-purple-800 text-white px-2 py-1 text-xs font-medium rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Github Link */}
            <div className="mt-4 flex justify-end">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition"
              >
                <FaGithub className="text-xl" />
                View Github
              </a>
              </div>
          </motion.div>
        ))}
    </div>
    </div>
  )
}

export default Projects
