import React, { useState } from 'react'
import imageToBase64 from 'image-to-base64/browser';
import "./AddProduct.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveAppBar from '../adminnav/AdminNav';

const AddProduct = () => {
    const [addProductData, setAddProductData] = useState({
        title: "",
        description: "",
        price: Number
    });

    const [addAllProductData, setAddAllProductData] = useState({
        allTitle: "",
        allDescription: "",
        allPrice: Number
    });

    const [addshopProductData, setAddshopProductData] = useState({
        shopTitle: "",
        shopDescription: "",
        shopPrice: Number
    });

    const[selectedImage , setSelectedImage] = useState("");
    const[AllSelectedImage , setAllSelectedImage] = useState("");
    const[shopSelectedImage , setShopSelectedImage] = useState("");
    const navigate = useNavigate();

    let name, value;
    const handleChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setAddProductData({ ...addProductData, [name]: value });
    }

    const handleAllChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setAddAllProductData({ ...addAllProductData, [name]: value });
    }

    const handleShopChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setAddshopProductData({ ...addshopProductData, [name]: value });
    }

    const handleBase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setSelectedImage(reader.result)
        }
        reader.onerror = (err) => {
            console.log("Error : " , err);
        }
    }

    const handleAllBase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setAllSelectedImage(reader.result)
        }
        reader.onerror = (err) => {
            console.log("Error : " , err);
        }
    }

    const handleShopBase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setShopSelectedImage(reader.result)
        }
        reader.onerror = (err) => {
            console.log("Error : " , err);
        }
    }

    const addProduct = async (event) => {
        event.preventDefault();
        console.log("Button clicked");
        const { title, description, price } = addProductData;
        const res = await fetch("/addproduct",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title,
                description,
                price,
                selectedImage
            })
        });
        
        await res.json();

        if (title && description && price && selectedImage) {
            toast.success("Data Added Successfuly.");
            setAddProductData({title:"", description:"", price:""});
            setSelectedImage("");
            navigate("/");
        } else {
            toast.error("Please Don't Leave Any Field Empty");
        }

    }

    const addallProduct = async (event) => {
        event.preventDefault();
        console.log("Button clicked");
        const { allTitle, allDescription, allPrice } = addAllProductData;
        const response = await fetch("/addallproduct",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                allTitle,
                allDescription,
                allPrice,
                AllSelectedImage
            })
        });
        
        await response.json();

        if (allTitle && allDescription && allPrice && AllSelectedImage) {
            toast.error("Data Added Successfuly.");
            setAddAllProductData({allTitle:"", allDescription:"", allPrice:""});
            setAllSelectedImage("");
            navigate("/");
        } else {
            toast.error("Please Don't Leave Any Field Empty");
        }
    }

    const addSProduct = async (event) => {
        event.preventDefault();
        console.log("Button clicked");
        const { shopTitle, shopDescription, shopPrice } = addshopProductData;
        const response = await fetch("/addshopproduct",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                shopTitle,
                shopDescription,
                shopPrice,
                shopSelectedImage
            })
        });
        
        await response.json();

        if (shopTitle && shopDescription && shopPrice && shopSelectedImage) {
            toast.success("Data Added Successfuly.");
            setAddshopProductData({shopTitle:"", shopDescription:"", shopPrice:""});
            setShopSelectedImage("");
            navigate("/shop");
        } else {
            toast.error("Please Don't Leave Any Field Empty");
        }
    }

    return (
        <div>
        <ResponsiveAppBar/>
        <div className='addProductContainer'>
            <div className='addProduct'>
                <div className='add'>
                    <p>Add Product</p>
                    <div className='formContainer'>
                        <form>
                            <div className='inputArea'>
                                <input type='text' placeholder='Add Title' name="title" value={addProductData.title} onChange={handleChange} />
                                <input type='text' placeholder='Add Description' name="description" value={addProductData.description} onChange={handleChange} />
                                <input type='number' placeholder='Add Price' name="price" id='price' value={addProductData.price} onChange={handleChange} />
                            </div>
                            <div className='upload-box-container'>
                                <div class="upload-box" onclick="document.getElementById('fileInput').click();" >
                                    <input type="file" id="file-upload" name='selectedImage' accept="image/*" onChange={handleBase64}/>
                                    <p>Click or Drag an Image to Upload</p>
                                </div>
                            </div>
                            <div className='addBtnContainer'>
                                <div className='addBtn'>
                                    <button onClick={addProduct}>Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



        <div className='addallProductContainer'>
        <div className='addallProduct'>
            <div className='addall'>
                <p>Add All Product</p>
                <div className='formContainer'>
                    <form>
                        <div className='inputAreaall'>
                            <input type='text' placeholder='Add Title' name="allTitle" value={addAllProductData.allTitle} onChange={handleAllChange} />
                            <input type='text' placeholder='Add Description' name="allDescription" value={addAllProductData.allDescription} onChange={handleAllChange} />
                            <input type='number' placeholder='Add Price' name="allPrice" id='allprice' value={addAllProductData.allPrice} onChange={handleAllChange} />
                        </div>
                        <div className='upload-box-container'>
                            <div class="upload-box" onclick="document.getElementById('fileInput').click();" >
                                <input type="file" id="file-upload" name='AllSelectedImage' accept="image/*" onChange={handleAllBase64}/>
                                <p>Click or Drag an Image to Upload</p>
                            </div>
                        </div>
                        <div className='addBtnContainer'>
                            <div className='addBtn'>
                                <button onClick={addallProduct}>Add Product</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>



        <div className='addProductContainer'>
            <div className='addshopProduct'>
                <div className='addshopal'>
                    <p>Add Shop Product</p>
                    <div className='formContainer'>
                        <form>
                            <div className='inputAreashop'>
                                <input type='text' placeholder='Add Title' name="shopTitle" value={addshopProductData.shopTitle} onChange={handleShopChange} />
                                <input type='text' placeholder='Add Description' name="shopDescription" value={addshopProductData.shopDescription} onChange={handleShopChange} />
                                <input type='number' placeholder='Add Price' name="shopPrice" id='shopprice' value={addshopProductData.shopPrice} onChange={handleShopChange} />
                            </div>
                            <div className='upload-box-container'>
                                <div class="upload-box" onclick="document.getElementById('fileInput').click();" >
                                    <input type="file" id="file-upload" name='shopSelectedImage' accept="image/*" onChange={handleShopBase64}/>
                                    <p>Click or Drag an Image to Upload</p>
                                </div>
                            </div>
                            <div className='addBtnContainer'>
                                <div className='addBtn'>
                                    <button onClick={addSProduct}>Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        </div>

    )
}

export default AddProduct