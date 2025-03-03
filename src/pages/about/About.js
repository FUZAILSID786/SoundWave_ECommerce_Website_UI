import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import AboutHeader from '../../components/aboutheader/AboutHeader'
import AboutHeroSection from '../../components/aboutherosection/AboutHeroSection'
import AboutExtraInfo from '../../components/aboutextrainfo/AboutExtraInfo'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    <>
    <Navbar />
    <AboutHeader />
    <AboutHeroSection />
    <AboutExtraInfo />
    <Footer />
    </>
  )
}

export default About