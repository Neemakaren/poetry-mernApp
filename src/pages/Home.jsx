import React from 'react'
import PageLoader from '../components/PageLoader'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Hero3 from '../components/Hero3'
import Rough from '../components/Rough'

const Home = () => {
  return (
    <>
    {/* <Rough /> */}
      <Hero />
      <About />
      <Projects />
      <Footer />
      {/* <Hero2 /> */}
      {/* <Hero3 /> */}
    </>
  )
}

export default Home