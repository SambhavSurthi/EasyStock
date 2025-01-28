import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Feature from './Feature'
import Faq from './Faq'
import Contactus from './Contactus'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Homepage = () => {
  return (
    <div>
        <Hero />
        <Feature />
        <Faq />
        <Contactus/>
        <Footer />
    </div>
  )
}

export default Homepage