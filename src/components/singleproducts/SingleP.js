import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import {useDispatch } from 'react-redux'
import './SingleP.css'
import { useNavigate, useParams } from 'react-router-dom';
import { add_TO_CART , cart_total_price, cartTotal, qtt } from '../../features/CartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleP = () => {
    const [value, setValue] = React.useState(4);
    const [singleData, setSigleData] = useState({});
    const [quantity, setQuantity] = useState(1);
    // const [aData, setAllData] = useState({});
    // const [sData, setSData] = useState({});

    const params = useParams();

    const getProductD = async () => {
      const fetchD = await fetch(`/addproduct/${params.id}` , {
        method : "GET", 
        headers :{
          "Content-Type" : "application/json"
        }   
      });

      const sData = await fetchD.json();
      setSigleData(sData);
    }

    useEffect(() => {
      getProductD();
    },[])

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedIn = window.localStorage.getItem("isLoggedIn"); 
    const addtocart = (image , title , price , qty) => {
      let cData = {img : image , t : title , p : price , qty:qty}
      if(isLoggedIn == "true"){
      dispatch(add_TO_CART(cData))
      dispatch(cart_total_price(cData.p))
      dispatch(qtt(quantity))
      dispatch(cartTotal(cData.p*quantity))
      toast.success("Product Added to Cart!")
      navigate("/cart")
    }else{
      navigate("/login")
      toast.error("Please Login First!")
    }
  }
    const decrement = () => {
      setQuantity(quantity-1);
      if(quantity == 1){
        setQuantity(1);
        toast.error("Atleast Buy One Product!")
      }
    }

    const increment = () => {
      setQuantity(quantity+1);
    }

    const buyNow = (image , title , price , qty) => {
      let directly_buy_now_data = {img : image , t : title , p : price , qty:qty}
      if(isLoggedIn == "true"){
      dispatch(add_TO_CART(directly_buy_now_data))
      dispatch(cart_total_price(directly_buy_now_data.p));
      dispatch(qtt(quantity));
      dispatch(cartTotal(directly_buy_now_data.p*quantity));
      navigate("/checkout")
    }else{
      navigate("/login")
      toast.error("Please Login First!")
    }
  }
  

  return (
    <div className='main-single-product-container'>
        <div className='single-product-container'>
            <div className='single-image-product'>
                <img src={singleData.selectedImage} alt=''></img>
            </div>
            <div className='single-text-info-product'>
                <p className='firstTitle'>{singleData.title}</p>
                <p className='secondTitle'>{singleData.title}</p>
      <Rating name="read-only" id='rating-star' value={value} readOnly />
      <p className='priceparagraph'>$ {singleData.price}/<sup className='super-tag'>Per Product</sup></p>
      <p className='desc-para'>{singleData.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor odio, id mollis ante fringilla ac. Maecenas eget nisi felis. Proin id ex ac felis molestie congue. Fusce ut eleifend ligula, nec tincidunt turpis.</p>
      <div className='quantity-div'>
        <p>Quantity : </p>
        <button id='minus_btn' onClick={decrement}>-</button>
        <button id='count_btn'>{quantity}</button>
        <button id='plus_btn' onClick={increment}>+</button>
      </div>
      <div className='addtocart-buynowbtns'>
        <button id='buynowbtn'  onClick={() => buyNow(singleData.selectedImage , singleData.title, singleData.price, quantity)}>BUY NOW</button>

        <button id='addtocartbtn' onClick={() => addtocart(singleData.selectedImage , singleData.title, singleData.price, quantity)}>ADD TO CART</button>
      </div>
            </div>
        </div>
    </div>
  )
}

export default SingleP