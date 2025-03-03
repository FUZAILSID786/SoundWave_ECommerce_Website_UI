import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './AllSingleProduct.css'
import { useParams } from 'react-router-dom';


const AllSingleProduct = () => {
    const [value, setValue] = React.useState(4);
    const [allsingleData, setallSigleData] = useState({});

    const params = useParams();

    const getallProductD = async () => {
      const fetchallD = await fetch(`/addallproduct/${params.id}` , {
        method : "GET", 
        headers :{
          "Content-Type" : "application/json"
        }   
      });

      const sallData = await fetchallD.json();
      setallSigleData(sallData);
    }


    useEffect(() => {
      getallProductD();
    },[])

  return (
    <div className='all-main-single-product-container'>
        <div className='all-single-product-container'>
            <div className='all-single-image-product'>
                <img src={allsingleData.AllSelectedImage} alt=''></img>
            </div>
            <div className='all-single-text-info-product'>
                <p className='all-firstTitle'>{allsingleData.allTitle}</p>
                <p className='all-secondTitle'>{allsingleData.allTitle}</p>
      <Rating name="read-only" id='all-rating-star' value={value} readOnly />
      <p className='all-priceparagraph'>$ {allsingleData.allPrice}/<sup className='super-tag'>Per Product</sup></p>
      <p className='all-desc-para'>{allsingleData.allDescription} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor odio, id mollis ante fringilla ac. Maecenas eget nisi felis. Proin id ex ac felis molestie congue. Fusce ut eleifend ligula, nec tincidunt turpis.</p>
      <div className='all-quantity-div'>
        <p>Quantity : </p>
        <button id='all-minus_btn'>-</button>
        <button id='all-count_btn'>1</button>
        <button id='all-plus_btn'>+</button>
      </div>
      <div className='all-addtocart-buynowbtns'>
        <button id='all-buynowbtn'>BUY NOW</button>
        <button id='all-addtocartbtn'>ADD TO CART</button>
      </div>
            </div>
        </div>
    </div>
  )
}

export default AllSingleProduct