import React, { useEffect, useState } from 'react'
import "./ShopProducts.css"
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router-dom';

const ShopProducts = () => {

    let priceFiltersData = [10, 20, 30, 40,50, 60];
    let companyF = ["pTron", "Sony" , "Mivi" , "JBL", "Nothing" , "Unix"];

    const [companyFilters, setCompanyFilters] = useState([]);
    const [filterData , setFilterData] = useState([]);

    const filteredChange = (event) => {
       let userSelected = +event.target.value;
       let filteredvalues = shopproductData.filter((data) => data.shopPrice > userSelected);
       setFilterData(filteredvalues);
    };


    const navigate = useNavigate();

    const getShopProductId = (id) => {
        navigate(`/shopproduct/${id}`)
    }

    const [shopproductData , setShopProductData] = useState([])
    const [loading , setLoading] = useState(true);

    const shopAllData = async () => {
        const response = await fetch("/addshopproduct", {
            method: "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const shopproductD = await response.json();
        setShopProductData(shopproductD);

        if(shopproductD){
            setLoading(false);
        }
    }

    // const handleChange = (e) => {
        
    // }

    useEffect(() => {
        shopAllData();
    },[])

    return (
        <>

        {
            loading ? <Loader /> : <div><div className='shop-products-main-container'>
            <div className='shop-container'>
                <div className='shop-filter-container'>
                    <h2>Products Filter</h2>
                    <div className='price-filter-container'>
                        <label for="pricefilter">Price Filters</label><br></br>
                        <select name="pricefilter" id="price" onChange={filteredChange}>
                            {
                                priceFiltersData.map((ele) => {
                                    return(
                                        <>
                                        <option value={ele}>Greater than {ele} </option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>

                </div>
                <div className='shop-products-container'>
                    {
                        filterData.map((products) => {
                            return (
                                <>
                                    <div>
                                        <div className='products-shop-boxes' onClick={()=>{getShopProductId(products._id)}}><img src={products.shopSelectedImage} />
                                            <div className='shop-description'>
                                                <p><b>Description :</b>{products.shopDescription}</p>
                                            </div>
                                            <div className='shop-price'>
                                                <p><b>Price :</b> ${products.shopPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div></div>
        }
</>
        
    )
}

export default ShopProducts