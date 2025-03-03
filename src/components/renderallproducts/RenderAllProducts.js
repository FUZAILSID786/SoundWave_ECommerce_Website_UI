import React, { useEffect, useState } from 'react'
import AllProductsData from "../allproducts/AllProducts.json"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import "./RenderAllProducts.css"
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router-dom';

const RenderAllProducts = () => {

    const [allproductData , setallProductData] = useState([])
    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();

    const getAllData = async () => {
        const res = await fetch("/addallproduct", {
            method: "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const allproductD = await res.json();
        setallProductData(allproductD);

        if(allproductD){
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllData();
    },[])

    const getRenderAllProductDataId = (id) => {
        navigate(`/allproduct/${id}`)
    }

    return (
        <>

    {
        loading ? <Loader /> : <div>
             <div className='mainHeadingDiv'>
                <div className='headingD'>
                    <h1>All Products</h1>
                </div>
            </div>
            <div className='topproducts-container'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 14 }}
                    className='mainGrid'
                >
                    {allproductData.map((products, index) => (
                        <Grid xs={2} sm={4} md={4} key={index} className='allbox'>
                            <div className='overlay'>
                                <div className='overlay-info' onClick={() => {getRenderAllProductDataId(products._id)}}>
                                    <p>Tittle : {products.allTitle} </p>
                                    <p>Price : ${products.allPrice} </p>
                                    <p>Description : {products.allDescription} </p>
                                </div>
                            </div>
                            <img src={products.AllSelectedImage} alt='' />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            </div>
        </div>
    }

           
        </>
    )
}

export default RenderAllProducts