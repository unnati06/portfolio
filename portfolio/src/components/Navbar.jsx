import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import nav_logo from '../assets/logo-port.png';
const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className='mb-20 flex items-center justify-between py-4 relative'>
        <div className='flex flex-shrink-0 items-center'>
          <ul className="flex space-x-8 hover:cursor-pointer">
          <li className="relative group">
         <span onClick={() => scrollToSection("home")} className="cursor-pointer">Home</span>
         <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
        </li>

        <li className="relative group">
  <span onClick={() => scrollToSection("Experience")} className="cursor-pointer">Experience</span>
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
</li>

<li className="relative group">
  <span onClick={() => scrollToSection("projects")} className="cursor-pointer">Projects</span>
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
</li>

<li className="relative group">
  <span onClick={() => scrollToSection("skills")} className="cursor-pointer">Skills</span>
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
</li>

<li className="relative group">
  <span onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact</span>
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
</li>

          </ul>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
           <a href="https://www.linkedin.com/in/unnatisrivastava/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/unnati06" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://x.com/UnnatiSriv06" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />
            </a>
          
        </div>
    </div>
  )
}

export default Navbar