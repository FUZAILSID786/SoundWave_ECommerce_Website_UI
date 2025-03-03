import React, { useState } from 'react'
import "./ContactInfo.css"
import { toast } from 'react-toastify';

const ContactInfo = () => {

    const [contactState, setContactState] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    let name, value;
    const handleChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setContactState({...contactState, [name]: value });
    }

    const sendMessage = async () => {
        const { fullName, email, subject, message } = contactState;
        if (!fullName || !email || !subject || !message) {
            toast.error("Please Fill Out All The Fields!")
        }else if(!validateEmail(email)){
            toast.error("Invalid Email Address!");
        }
        else {
            const response = await fetch("/contactdetails", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    fullName,
                    email,
                    subject,
                    message
                })
            });
            if(response){
                toast.success("Message Sent Successfully!")
                setContactState({
                fullName: "",
                email: "",
                subject: "",
                message: ""
                })
            }
        }
    }

    const validateEmail = (input) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(input);
    };

    return (
        <>
            <div className='contact-info-container'>
                <div className='conact-info'>
                    <div className='contact-first-info-div'>
                        <h1 className='contact_det'>Contact Details</h1>
                        <div className='infodetails'>
                            <p className='address phone'><b>Phone</b> : 02226174631</p>
                            <p className='address'><b>Address</b> : 152, Ttc Indl Area, Millennium Business Park, Sector-3, Mahape, Navi Mumbai</p>
                            <p className='address'><b>State</b> : Maharashtra</p>
                            <p className='address'><b>Zip Code</b> : 400701</p>
                            <p className='address'><b>Email</b> : xyz123@gmail.com</p>
                        </div>
                    </div>
                    <div className='contact-second-info-div'>
                        <div className='contact_form'>
                            <div className='contact_input'>
                                <form action=''>
                                    <div className='first_two_inputs'>
                                        <input type='text' placeholder='Enter Full Name' name='fullName' value={contactState.fullName} onChange={handleChange}></input>
                                        <input type='email' placeholder='Enter Your Email' name='email' value={contactState.email} onChange={handleChange}></input>
                                    </div>
                                    <div className='Subject_info'>
                                        <input type='text' placeholder='Enter the Subject' name='subject' value={contactState.subject} onChange={handleChange}></input>
                                    </div>
                                    <div className='message_box'>
                                        <textarea name='message' placeholder='Enter Your Message' id='' rows="10" cols="10" value={contactState.message} onChange={handleChange}></textarea>
                                    </div>
                                    <div className='contact_btn_div'>
                                        <button type='button' onClick={sendMessage}>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo
