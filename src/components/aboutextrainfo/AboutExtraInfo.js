import React, { useState } from 'react'
import "./AboutExtraInfo.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AboutExtraInfo = () => {

    const [counterText , SetCounterText] = useState(0);

    let txt = [
        {text : "Welcome to SoundWave Electronics, your one-stop shop for Audio Products. Our mission is to provide a seamless and enjoyable shopping experience, offering a wide range of high-quality products at competitive prices."},

        {text : "Founded in 2001, we are committed to customer satisfaction, delivering convenience and reliability right to your doorstep. Our dedicated team works around the clock to ensure that you have access to the latest trends and top-notch service."},

        {text : "Thank you for choosing SoundWave Electronics—where shopping is made easy!"}
    ]



    const back = () => {
        SetCounterText(counterText - 1)
        if(counterText == 0){
            SetCounterText(2);
        }
    }

    const forward = () => {
        SetCounterText(counterText + 1)
        if(counterText > 1){
            SetCounterText(0);
        }
    }

    return (
        <div className='extra-info-container'>
            <div className='extra-info'>
                <ArrowBackIosIcon sx={{fontSize : "34px", cursor: "pointer"}} onClick = {back} />
                <p>{txt[counterText].text}</p>
                <ArrowForwardIosIcon sx={{fontSize : "34px", cursor: "pointer"}} onClick = {forward} />
            </div>
        </div>
    )
}

export default AboutExtraInfo