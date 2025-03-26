import React from 'react'
import About from './About/About'
import Hero from './Hero/Hero'
import Tokenomics from './Tokenomics/Tokenomics'
import Process from './Process/Process'
import Roadmap from './Roadmap/Roadmap'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Tokenomics/>
        <Process/>
        <Roadmap/>
        <Footer/>
    </div>
  )
}

export default Home