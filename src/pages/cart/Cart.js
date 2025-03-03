import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CartHeader from '../../components/cartheader/CartHeader'
import CartSection from '../../components/cartsection/CartSection'
import Footer from '../../components/footer/Footer'

const Cart = () => {
  return (
    <div>
    <Navbar />
    <CartHeader />
    <CartSection />
    <Footer />
    </div>
  )
}

export default Cart