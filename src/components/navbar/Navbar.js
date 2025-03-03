import React from 'react'
import logo from "../../assets/SoundWavelogo.png"
import "./Navbar.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

const Navbar = () => {

  const cart = useSelector((state) => (state.cart.cartData));
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  const logOutUser = () => {
    toast.success("Logout Sucessful!")
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <div className='navbarContainer'>
      <div className='navbar'>

        <div className='logo'>
          <img src={logo} alt=''></img>
        </div>


        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>

        <div className='icons'>
          <sup>{cart.length}</sup>
          <Link to='/cart'><ShoppingCartOutlinedIcon sx={{ fontSize: "26px" }} /></Link>
        </div>

        {
          isLoggedIn == "true" ? <Link to='/#'><button onClick={logOutUser} className='logoutbtn' >Logout</button></Link> : <div className='authBtns'>
          <Link to='/signup'><button>Sign Up</button></Link>
          <Link to='/login'><button  >Login</button></Link>
        </div>
        }
        

      </div>
    </div>
  )
}

export default Navbar

