//Importa páginas

import { Header } from "./components/Header"
import { BackToTop } from "./components/BackToTop"
import { About } from "./components/Sections/About"
import { Contact } from "./components/Sections/Contact"
import { Footer } from "./components/Sections/Footer"
import { Hero } from "./components/Sections/Hero"
import { Projects } from "./components/Sections/Projects"
import { Skills } from "./components/Sections/Skills"

function App() {


  return (
    <>
      <Header />
      <Hero />
      <main className="pt-32">
        <section id="about-me">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
