import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import TopProducts from '../../components/topproducts/TopProducts'
import RenderAllProducts from '../../components/renderallproducts/RenderAllProducts'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider/>
      <TopProducts/>
      <RenderAllProducts/>
      <Footer/>
    </div>
  )
}

export default Home