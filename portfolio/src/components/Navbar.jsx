import React , {useState}from 'react'
import {FaLinkedin, FaGithub, FaBars, FaTimes} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import nav_logo from '../assets/logo-port.png';
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
<nav className='mb-20 flex items-center justify-between py-4 relative'>
      {/* Desktop Navigation */}
      <div className='hidden md:flex flex-shrink-0 items-center'>
        <ul className="flex space-x-8 hover:cursor-pointer">
          {['home', 'Experience', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item} className="relative group">
              <span
                onClick={() => scrollToSection(item)}
                className="cursor-pointer capitalize"
              >
                {item}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl text-white z-50"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Social Icons - Desktop */}
      <div className='hidden md:flex m-8 items-center justify-center gap-4 text-2xl'>
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center md:hidden">
          <ul className="flex flex-col items-center space-y-8 text-xl">
            {['home', 'Experience', 'projects', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <span
                  onClick={() => {
                    scrollToSection(item);
                    setIsOpen(false);
                  }}
                  className="cursor-pointer capitalize hover:text-gray-300 transition-colors"
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-6 text-2xl mt-8">
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
      )}
    </nav>
  );
}

export default Navbar