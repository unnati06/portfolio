import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
// import img from '../assets/projects/pr'

export const HERO_CONTENT = `I am a dedicated and results-driven full-stack developer passionate about building efficient, scalable, and user-centric web applications. Proficient in front-end technologies like React.js, and well-versed in back-end development with Node.js, MongoDB, Redis, WebRTC, I thrive on crafting seamless solutions that bridge design and functionality. With a strong focus on problem-solving and innovation, my goal is to create impactful digital experiences that empower businesses and delight users.

`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With hands-on industry experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Socket.io, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - September 2024",
    role: "FullStack Developer Intern",
    company: "Bhramos Technologies",
    description: `Engineered a dynamic e-commerce platform utilizing the MERN stack, resulting in a 50% increase in online sales and 
    a 20% decrease in bounce rate, ultimately improving user experience and driving revenue growth.
    Collaborated with cross-functional teams to conduct A/B testing on various website features, identifying key areas for optimization that resulted in a 40% improvement in conversion rates and a 30% increase in overall site traffic.`,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB", "Rest API"],
  },
  {
    year: "October 2023 - February 2024",
    role: "FullStack Developer Intern",
    company: "Datablare",
    description: `Collaborated with cross-functional teams to optimize website responsiveness and load times, leading to a 20% increase in overall site traffic and user engagement metrics. Developed a cutting-edge front-end architecture utilizing React.js, surpassing expectations by improving user interface efficiency by an outstanding 35%, resulting in increased user satisfaction and engagement.`,
    technologies: ["Javascript", "React.js", "Node.js", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title:"AI powered Real-Time Collaborative Code Editor",
    image: project3,
    description:"Built an interactive, AI-enhanced code editor with real-time collaborative features, enabling seamless multi-user coding sessions. Optimized synchronization efficiency, reducing latency by 40%, and enhanced developer productivity by 30% through intelligent code suggestions and seamless room-based sharing.",
    technologies:["React.js", "Node.js","Socket.io","Codemirror","Redis"],
    githubLink:"https://collaborative-code-editor-black.vercel.app/",
  },
  {
    title: "WEBRTC Based video calling website (Zencall)",
    image: project1,
    description:
      "Developed a feature-rich video calling platform using WebRTC, incorporating scheduling and recording functionalities. Enhanced virtual communication efficiency, improved user experience, and boosted user retention by 25% through seamless connectivity, high-quality streaming, and intuitive interface design.",
    technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Cloudinary"],
    githubLink:"https://zencall-1.onrender.com",
  },
  {
    title: "Job Tracking Website",
    image: project2,
    description:
      "Developed a dynamic job tracking website using React.js, Node.js, Express, and MongoDB, enabling seamless job application management. Enhanced user experience and engagement by 40% through intuitive UI, real-time updates, and optimized performance, streamlining job tracking for professionals.",
    technologies: ["Javascript", "Reactjs", "NodeJs", "MongoDB", "Express.js"],
    githubLink:"https://trackit-1mxs.onrender.com",
  },
  {
    title:"Real Time Location Tracker",
    image:project2,
    description:"Created a real time location tracker using node js which can help users track a given location in real-time",
    technologies:["Node js", "ejs","javascript"],
    githubLink:"https://real-time-tracker-b0zv.onrender.com"
  },
  {
    title:"NodeJS CLI for Cryptocurrency Prices",
    image:project4,
    description:"A simple, lightweight command-line tool to fetch real-time cryptocurrency prices using public APIs. Easily check Crypto rates in seconds. Perfect for developers and crypto enthusiasts. Check it out using the github link below",
    technologies:["Javascript", "NodeJs"],
    githubLink:"https://github.com/unnati06/Nodejs-CLI-for-crypto",
  }
 
];

export const CONTACT = {
  address: "unnatisrivastava0603@gmail.com",
  phoneNo: "https://www.linkedin.com/in/unnatisrivastava/",
  email: "https://github.com/unnati06",
};