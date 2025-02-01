import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Feature from './Feature'
import Faq from './Faq'
import Contactus from './Contactus'
import SignIn from './SignIn'
import SignUp from './SignUp'
import AboutUs from './AboutUs'

const Homepage = () => {
  return (
    <div>
        <Hero />
        {/* <Feature /> */}
        <AboutUs />
        <Faq />
        <Contactus/>
        <Footer />
    </div>
  )
}

export default Homepage