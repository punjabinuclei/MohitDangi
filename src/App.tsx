// import { Award } from "lucide-react"
import About from "./components/HomePage/About/About"
import Awards from "./components/HomePage/Awards/Awards"
import Hero from "./components/HomePage/Hero/Hero"
import Navbar from "./components/HomePage/Navbar/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <About/>
    </>
  )
}

export default App