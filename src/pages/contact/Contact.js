import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ContactHeader from '../../components/contactheader/ContactHeader'
import ContactInfo from '../../components/contactinfo/ContactInfo'
import Footer from "../../components/footer/Footer"

const Contact = () => {
  return (
    <>
    <Navbar />
    <ContactHeader />
    <ContactInfo />
    <Footer />
    </>
  )
}

export default Contact