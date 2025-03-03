import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ResponsiveAppBar from '../adminnav/AdminNav';
import "./AdminLogin.css"

const AdminLogin = () => {

    const navigate = useNavigate();

    const[loginState , setLoginState] = useState({
        email : "",
        password : ""
      });

      const adminEmail = "admin123@gmail.com";
      const adminPassword = "Admin@123";
    
      const [isLoggedIn , setIsLoggedIn] = useState(false);
    
      const login = async() => {
        if(loginState.email == adminEmail && loginState.password == adminPassword)
        {
            toast.success("Admin Logged in Successfully!");
            navigate("/admin");
            // localStorage.setItem("adminLogin" , true)
            
        }
        else{
            toast.error("Invalid Credentials!")
        }
      }
    
      let name , value;
      const handleChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setLoginState({...loginState , [name] : value});
      }
    
      const validateEmail = (input) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(input);
      };

  return (
    <div>
    <ResponsiveAppBar/>
      <div className='login_page_container'>
        <div className='login_page'>
          <div className='welcome_to_login'>
            <div className='welcome_to_login_innerdiv'>
              <h2>Welcome To Admin</h2>
            </div>
          </div>
          <div className='login_form_div'>
            <div className='loginform_inner_div'>
              <h2>Login Account</h2>
              <div className='login_inputs'>
                <input type='email' name='email' placeholder='Enter Your Email Id' value={loginState.email} onChange={handleChange}/>
                <input type='password' name='password' placeholder='Enter Password' value={loginState.password} onChange={handleChange} />
                <button type='button' onClick={login} >SIGN IN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
