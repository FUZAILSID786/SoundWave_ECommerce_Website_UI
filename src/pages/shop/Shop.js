import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ShopHeader from '../../components/shopheader/ShopHeader'
import ShopProducts from '../../components/shopproducts/ShopProducts'
import Footer from '../../components/footer/Footer'

const Shop = () => {
  return (
    <div>
    <Navbar />
    <ShopHeader />
    <ShopProducts />
    <Footer />
    </div>
  )
}

export default Shop