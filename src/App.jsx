import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Scrollup from "./components/scrollup/Scrollup"
import About from "./pages/about/About"
import Contact from "./pages/contacts/Contact"
import Home from "./pages/home/Home"
import Projects from "./pages/portfolio/Projects"
import Qualifications from "./pages/qualifications/Qualifications"
import Services from "./pages/services/Services"
import Skills from "./pages/skills/Skills"


function App() {

  return (
    <>
      <Header />

      <main className="main">

        
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  )
}

export default App
