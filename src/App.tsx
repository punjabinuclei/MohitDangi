import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./components/Common/Navbar/Navbar.tsx"
import HomePage from './components/HomePage/HomePage.tsx';
import OurWork from './components/OurWork/OurWork.tsx';
import Services from './components/Services/Services.tsx';
import About from './components/About/About.tsx';

import { AnimatePresence } from 'framer-motion';


const App = () => {
  const location = useLocation();


  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/OurWork' element={<OurWork />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </AnimatePresence>

    </>
  )
}

export default App