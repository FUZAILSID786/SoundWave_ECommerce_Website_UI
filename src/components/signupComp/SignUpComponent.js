import React, { useState } from 'react'
import "./SignUpComponent.css"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {

  const[signupState , setSignUpState] = useState({
    fname : "",
    lname : "",
    email : "",
    password : ""
  });

  const createUser = async() => {
    const {fname , lname , email , password} = signupState;
        if (!fname || !lname || !email || !password) {
            toast.error("Please Fill Out All The Fields!");
        }
        else if(!validateEmail(email)){
            toast.error("Invalid Email Address!");
        }
        else if(password.length < 8){
          toast.error("Password Must be Atleast 8 Characters")
        }
        else {
            const response = await fetch("/register", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                  fname,
                  lname,
                  email,
                  password
                })
            });
            if(response){
                toast.success("User Created Successfully!")
                setSignUpState({
                  fname: "",
                  lname: "",
                  email: "",
                  password: ""
                })
                navigate("/login");
            }
        }
  }

  let name , value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setSignUpState({...signupState , [name] : value});
  }

  const validateEmail = (input) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(input);
  };

  const navigate = useNavigate();
  const goToLogIn = () => {
    navigate("/login")
  }


  return (
    <>
      <div className='signup_page_container'>
        <div className='signup_page'>
          <div className='welcome_to_signup'>
            <div className='welcome_to_signup_innerdiv'>
              <h2>Welcome To Sign Up</h2>
              <p>Already Have An Account?</p>
              <button onClick={goToLogIn}>SIGN IN</button>
            </div>
          </div>
          <div className='signup_form_div'>
            <div className='sinup_form_inner_div'>
              <h2>Create An Account</h2>
              <div className='signup_inputs'>
                <input style={{ marginTop: "1.5rem" }} type='text' name='fname' placeholder='Enter Your First Name' value={signupState.fname} onChange={handleChange} />
                <input type='text'name='lname' placeholder='Enter Your Last Name' value={signupState.lname} onChange={handleChange} />
                <input type='email' name='email' placeholder='Enter Your Email Id' value={signupState.email} onChange={handleChange}/>
                <input type='password' name='password' placeholder='Enter Password' value={signupState.password} onChange={handleChange} />
                <button type='button' onClick={createUser} >SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpComponent
