import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer'>
            <div className='text-info-div'>
                <h1>Visit Our Website, Enjoy Shopping</h1>
                <p>Thank You for choosing SoundWave-Where shopping is made easy.</p>
            </div>
            <div className='input-div'>
                <input placeholder='Enter Email'/>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default Footer