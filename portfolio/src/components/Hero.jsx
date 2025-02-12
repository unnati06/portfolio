import React from 'react'
import { HERO_CONTENT } from '../constants'
import profile_pic from "../assets/hero.png"
import { motion } from "framer-motion"


const container = (delay) =>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}
  },
})
const Hero = () => {


  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 items-center">
            
              <div className="flex flex-col items-center lg:items-start">
                <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                    HI, I'm Unnati Srivastava.
                </motion.h1>  
                <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent '>I am a FullStack Developer</motion.span>
                <motion.h2 variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</motion.h2>
              </div>
              <motion.a variants={container(1.5)}
              href="https://drive.google.com/file/d/1SKHfUiRHZ_mfi85rjFsEqGGLjdzkqEiv/view?usp=drive_link" // Replace with your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all"
             >
             See Resume
             </motion.a>
            </div>

            <div className="w-full lg:w-1/2 ">
             <div className="flex justify-center">
                <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src={profile_pic} alt="" />
             </div>
            </div>
        </div>
    </div>
  )
}

export default Hero