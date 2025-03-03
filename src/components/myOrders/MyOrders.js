import React from 'react'
import "./MyOrders.css"
import { useSelector } from 'react-redux'

const MyOrders = () => {
    const cart = useSelector((state) => (state.cart.cartData));
    const orderId = useSelector((state) => (state.checkout.idValue));
    const cart_quantity = useSelector((state) => (state.cart.quantity))
    return (
        <div className='orders_main_div'>
            <div className='order_main_box'>
                <div className='order_box'>
                    <div className='order_header_main'>
                        <div className='order_header'>
                            <div className='orderId'>
                                <p>Order Id</p>
                            </div>
                            <div className='orderstatus'>
                                <p>Status</p>
                            </div>
                            <div className='orderqty'>
                                <p>Quantity</p>
                            </div>
                            <div className='orderamount'>
                                <p>Amount</p>
                            </div>
                        </div>
                    </div>
                    <div className='my_orders_main'>
                        {
                            cart.length < 1 ? <h1 style={{textAlign:"Center" , marginTop : "6rem" }}>No Orders Yet</h1> : cart.map((ele) => {
                                return (
                                    <>
                                        <div className='mainmyorders'>
                                            <div className='myorderId'>
                                                <p> {orderId} </p>
                                            </div>
                                            <div className='myorderstatus'>
                                                <p>Processing</p>
                                            </div>
                                            <div className='myorderqty'>
                                                <p>{cart_quantity}</p>
                                            </div>
                                            <div className='myorderamount'>
                                                <p>$ {ele.p}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            }) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders
