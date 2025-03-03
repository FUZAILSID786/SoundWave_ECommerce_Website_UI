import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './SingleShopProduct.css'
import { useParams } from 'react-router-dom';


const SingleShopProduct = () => {
    const [value, setValue] = React.useState(4);
    const [singleshopData, setShopSigleData] = useState({});
    const params = useParams();

    const getShopProductD = async () => {
      const shopfetchD = await fetch(`/addshopproduct/${params.id}` , {
        method : "GET", 
        headers :{
          "Content-Type" : "application/json"
        }   
      });

      const ShopsData = await shopfetchD.json();
      setShopSigleData(ShopsData);
    }


    useEffect(() => {
      getShopProductD();
    },[])

  return (
    <div className='shop-main-single-product-container'>
        <div className='shop-single-product-container'>
            <div className='shop-single-image-product'>
                <img src={singleshopData.shopSelectedImage} alt=''></img>
            </div>
            <div className='shop-single-text-info-product'>
                <p className='shop-firstTitle'>{singleshopData.shopTitle}</p>
                <p className='shop-secondTitle'>{singleshopData.shopTitle}</p>
      <Rating name="read-only" id='shop-rating-star' value={value} readOnly />
      <p className='shop-priceparagraph'>$ {singleshopData.shopPrice}/<sup className='shop-super-tag'>Per Product</sup></p>
      <p className='shop-desc-para'>{singleshopData.shopDescription} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor odio, id mollis ante fringilla ac. Maecenas eget nisi felis. Proin id ex ac felis molestie congue. Fusce ut eleifend ligula, nec tincidunt turpis.</p>
      <div className='shop-quantity-div'>
        <p>Quantity : </p>
        <button id='shop-minus_btn'>-</button>
        <button id='shop-count_btn'>1</button>
        <button id='shop-plus_btn'>+</button>
      </div>
      <div className='shop-addtocart-buynowbtns'>
        <button id='shop-buynowbtn'>BUY NOW</button>
        <button id='shop-addtocartbtn'>ADD TO CART</button>
      </div>
            </div>
        </div>
    </div>
  )
}

export default SingleShopProduct