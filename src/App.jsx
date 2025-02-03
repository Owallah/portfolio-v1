import Header from "./components/header/Header"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import Skills from "./pages/skills/Skills"


function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App
