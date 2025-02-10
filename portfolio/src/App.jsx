import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"

function App() {

  return (
    <>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-green-900 selection:text-cyan-950">
      <div className="fixed top-0 -z-10 h-full w-full">
       <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
       </div>
       <div className="container mx-auto px-8"> 
        <Navbar />
        <section id="home">
         <Hero />
         </section>
         <section id="projects">
    <Projects />
  </section>
  <section id="experience">
    <Experience />
  </section>
  <section id="skills">
    <Technologies />
  </section>
  <section id="contact">
    <Contact />
  </section>
       </div>
      
    </div>
    </>
  )
}

export default App
