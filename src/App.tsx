// import { Award } from "lucide-react"
import About from "./components/HomePage/About/About"
import Awards from "./components/HomePage/Awards/Awards"
import Hero from "./components/HomePage/Hero/Hero"
import Navbar from "./components/HomePage/Navbar/Navbar"
import Metrics from "./components/HomePage/MetricsBlock/MetricsBlock.tsx"
import Services from "./components/HomePage/Services/Services.tsx"
import RecentWorks from "./components/HomePage/RecentWorks/RecentWorks.tsx"
import Footer from "./components/HomePage/Footer/Footer.tsx"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <About />
      <Metrics />
      <Services />
      <RecentWorks />
      <Footer />
    </>
  )
}

export default App