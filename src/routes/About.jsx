import React from 'react'
import Navbar from '../components/Navbar' 
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import Resume from '../components/Resume'


const About = () => {
  return (
    <div>
    <Navbar />  
    <HeroImg2 heading="ABOUT." text="I'm a friendly Front-End Developer." />
    <AboutContent />
    <Resume />
    <Footer />
    </div>
  )
}

export default About
