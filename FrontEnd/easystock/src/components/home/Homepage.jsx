import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Faq from './Faq'
import Contactus from './Contactus'
import AboutUs from './AboutUs'

const Homepage = () => {
  return (
    <div>
        <Hero />
        <AboutUs id="about" />
        <Faq id="faq" />
        <Contactus id="contact" />
        <Footer />
    </div>
  )
}

export default Homepage