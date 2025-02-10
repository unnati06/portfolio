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
    <div className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <ul className="flex space-x-8 hover:cursor-pointer">
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("experience")}>Experience</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("skills")}>Skills</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
           <a href="www.linkedin.com/in/unnatisrivastava" target="_blank" rel="noopener noreferrer">
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