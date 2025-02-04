import Header from "./components/header/Header"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
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
      </main>
    </>
  )
}

export default App
