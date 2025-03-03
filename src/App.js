import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Cart from './pages/cart/Cart'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import Admin from './admin/Admin'
import Shop from './pages/shop/Shop'
import SingleProduct from './pages/single/SingleProduct'
import AllP from './pages/allP/AllP'
import AllS from './pages/allS/AllS'
import MainCheckout from './pages/maincheckout/MainCheckout'
import Payment from './components/checkout/payment/Payment'
import Review from './components/checkout/review/Review'
import Order from './pages/orders/Order'
import CancelOrder from './components/cancelorder/CancelOrder'
import PlaceOrder from './components/checkout/placeorder/PlaceOrder'
import EditProduct from './admin/editproduct/EditProduct'
import AddProduct from './admin/addproduct/AddProduct'
import AdminLogin from './admin/adminlogin/AdminLogin'

const App = () => {

  // localStorage.setItem("adminLogin" , false);
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");  
  // const isAdminLogin = localStorage.getItem("adminLogin");

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={isLoggedIn == "true" ? <Contact /> : <Login/> } />
        <Route path='/cart' element={isLoggedIn == "true" ? <Cart /> : <Login/>} />
        <Route path='/checkout' element={isLoggedIn == "true" ? <MainCheckout /> : <Login /> } />
        {/* <Route path='/checkout/paymentdetails' element={<Payment />} /> */}
        <Route path='/checkout/revieworder' element={<Review />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/cancelorder' element={<CancelOrder />} />
        {/* <Route path='/placeorder' element={<PlaceOrder />} /> */}
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='/allproduct/:id' element={<AllP />} />
        <Route path='/shopproduct/:id' element={<AllS />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/addproduct' element={<AddProduct />} />
        <Route path='/editproduct/:id' element={<EditProduct />} />
        <Route path='/myorders' element={<Order />} />
      </Routes>
    </>
  )
}

export default App