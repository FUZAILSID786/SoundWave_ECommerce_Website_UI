import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux'
import './CartSection.css'
import { useNavigate } from 'react-router-dom';
import { removeCartItem } from '../../features/CartSlice';

const CartSection = () => {

    const cart = useSelector((state) => (state.cart.cartData));
    const cart_price = useSelector((state) => (state.cart.cartTotalPrice));
    const cart_quantity = useSelector((state) => (state.cart.quantity));
    const cart_total_price = useSelector((state) => state.cart.cartTotal);

    const navigate = useNavigate();
    const continueShopping = () => {
        navigate("/")
    }

    const totalAmount = () => {
        let my_tp = cart_price.length > 0 ? cart_price.reduce((accum, curVal) => {
            return accum + curVal
        }) : "";
    }

    useEffect(() => {
        totalAmount()
    }, [])

    const dispatch = useDispatch();
    const deleteCartItem = (index) => {
        dispatch(removeCartItem(index))
    }

    const navigateToCheckOut = () => {
        navigate("/checkout");
    };

    return (
        <>

            {
                cart.length > 0 ? <div className='c-section-container'>
                    <div className='c-section'>
                        <div className='c-header'>
                            <p>PRODUCTS</p>
                            <p>PRICE</p>
                            <p>Quantity</p>
                            <p>DELETE</p>
                        </div>
                    </div>
                    {
                        cart.map((ele , index) => {
                            return (
                                <>
                                    <div className='cart-data-details-cont'>
                                        <div className='cart-data-details'>
                                            <div className='cart-data-first-div'>
                                                <img src={ele.img} alt='' />
                                                <p className='image-inside-title'>{ele.t}</p>
                                            </div>
                                            <div className='cart-data-second-div'>
                                                <p>$ {ele.p*ele.qty}</p>
                                            </div>
                                            <div className='cart-data-third-div'>
                                                {/* <button id='first_btn'>-</button> */}
                                                <button id='center_btn'>{ele.qty}</button>
                                                {/* <button id='last_btn'>+</button> */}
                                            </div>
                                            <div className='cart-data-fourth-div'>
                                                < DeleteIcon 
                                                sx={{color : "#2596be"}}
                                                onClick = {()=>deleteCartItem(index)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className='cart_price_container'>
                        <div className='cartprice'>
                            <p>Total Price : <span className='ppp'> ${cart_total_price}</span></p>
                            <button onClick={navigateToCheckOut}>CheckOut</button>
                        </div>
                    </div>
                </div> : <div className='emptyCart'><h1>Your Cart is Empty</h1><div className='continue-shopping'><button onClick={continueShopping}>Continue Shopping </button></div> </div>
            }



        </>
    )
}

export default CartSection