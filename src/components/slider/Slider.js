import React, { useState } from 'react'
import "./Slider.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Slider = () => {

    const [count, setCount] = useState(0)

    let images = [
        { img: "https://cdn.pixabay.com/photo/2018/11/02/05/17/headphones-3789598_640.jpg" },
        { img: "https://purepng.com/public/uploads/large/purepng.com-headphoneelectronicsheadset-headphone-941524670894v2zxb.png" },
        { img: "https://cdn.pixabay.com/photo/2022/11/23/19/51/sound-7612799_1280.jpg" },
    ]

    const previous = () => {
        setCount(count - 1)
        if(count == 0)
        {
            setCount(2);
        }
    }

    const next = () => {
        setCount(count + 1)
        if(count > 1)
        {
            setCount(0);
        }
    }

    const navigate = useNavigate();

    const gotoShopPage = () => {
        navigate("/shop")
    }

    return (
        <div>
            <div className='slider-container'>
                <div className='slider'>
                    <div className='info-box'>
                        <p>OUR PRODUCTS <br /> ARE GREAT</p>
                        <button onClick={gotoShopPage}>View Products</button>
                    </div>
                    <div className='slider-box'>
                        <img src={images[count].img} alt='' />
                    </div>
                    <ArrowBackIosNewIcon sx={{ position: "absolute", top: "41%", left: "3%", fontSize: "40px", cursor: "pointer", }} onClick={previous} />
                    <ArrowForwardIosIcon sx={{ position: "absolute", top: "41%", right: "3%", fontSize: "40px", cursor: "pointer" }} onClick={next} />
                </div>
            </div>
        </div>
    )
}

export default Slider