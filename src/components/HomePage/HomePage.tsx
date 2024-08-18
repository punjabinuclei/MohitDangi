import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Awards from "./Awards/Awards"
import About from "./About/About"
import Metrics from "./MetricsBlock/MetricsBlock"
import Services from "./Services/Services"
import RecentWorks from "./RecentWorks/RecentWorks"
import transition from "../../../transitions"

const HomePage = () => {
    return (
        <>
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

export default transition(HomePage)