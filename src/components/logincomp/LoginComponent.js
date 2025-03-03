import React, { useState } from 'react'
import "./LoginComponent.css"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

  const[loginState , setLoginState] = useState({
    email : "",
    password : ""
  });

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const login = async() => {
    const {email , password} = loginState;
        if (!email || !password) {
            toast.error("Please Fill Out All The Fields!");
        }
        else if(!validateEmail(email)){
            toast.error("Invalid Email Address!");
        }
        else if(password.length < 8){
          toast.error("Password Must be Atleast 8 Characters")
        }
        else {
          const response = await fetch("/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              email,
              password
            })
          })
          const data = await response.json();
          if(data){
            window.localStorage.setItem("isLoggedIn" , true);
            window.localStorage.setItem("token" , data.data);
            // window.location.href = "/";
            navigate("/")
            toast.success("Login Successful!")
          }
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

  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/signup")
  }

  return (
    <>
      <div className='login_page_container'>
        <div className='login_page'>
          <div className='welcome_to_login'>
            <div className='welcome_to_login_innerdiv'>
              <h2>Welcome To Log In</h2>
              <p>Don't Have An Account?</p>
              <button onClick={goToSignUp}>SIGN UP</button>
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
    </>
  )
}

export default LoginComponent
