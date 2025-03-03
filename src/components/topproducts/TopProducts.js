import React, { useEffect, useState } from 'react'
import myJsonData from "../topSearchesData/TopSearchesData.json"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import "./TopProducts.css"
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router-dom';

const TopProducts = () => {

    const [productData , setProductData] = useState([])
    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();

    const getData = async () => {
        const res = await fetch("/addproduct", {
            method: "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const productD = await res.json();
        setProductData(productD);

        if(productD){
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    },[])

    const getSingleProductId = (id) => {
        console.log(id)
        navigate(`/singleproduct/${id}`)
    }

    return (
        <>
        {loading ? <Loader /> : <div>
    <div className='mainHeadingDiv'>
                <div className='headingD'>
                    <h1>TOP PRODUCTS</h1>
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
                    {productData.map((products, index) => (
                        <Grid xs={2} sm={1} md={4} key={index} className='allbox'>
                            <div className='overlay'>
                                <div className='overlay-info' onClick={() => {getSingleProductId(products._id)}}>
                                    <p>Tittle : {products.title} </p>
                                    <p>Price : ${products.price} </p>
                                    <p>Description : {products.description} </p>
                                </div>
                            </div>
                            <img src={products.selectedImage} alt='' />
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

export default TopProducts