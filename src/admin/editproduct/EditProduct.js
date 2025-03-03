import React, { useEffect , useState } from 'react'
import "./EditProduct.css"
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
// import { useState } from 'react';

const EditProduct = () => {

    const { id } = useParams();

    const[retrieveData , setRetrieveData] = useState([]);

    const getData = async () => {
        const getSingleProduct = await fetch(`/addproduct/${id}`)
        const response = await getSingleProduct.json();
        setRetrieveData(response);
    }

    useEffect(()=>{
        getData();
    },[])

    const [addProductData, setAddProductData] = useState({
        title: "",
        description: "",
        price: Number
    });
    
    const[selectedImage , setSelectedImage] = useState("");

    let name, value;
    const handleChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setRetrieveData({ ...retrieveData, [name]: value });
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

    const navigate = useNavigate();
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            const response = await fetch(`/addproduct/${id}`, {
                method:"PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(retrieveData)
            })
            if(response.ok)
            {
                toast.success("Product Updated Successfully!");
                navigate("/admin")
            }else
            {
                toast.error("Failed to Update Product!")
            }
        }


  return (
    <>
    <div className='addProductContainer'>
            <div className='addProduct'>
                <div className='add'>
                    <p>Edit Product</p>
                    <div className='formContainer'>
                        <form onSubmit={handleSubmit}>
                            <div className='inputArea'>
                                <input type='text' placeholder='Add Title' name="title" value={retrieveData.title} onChange={handleChange} />
                                <input type='text' placeholder='Add Description' name="description" value={retrieveData.description} onChange={handleChange} />
                                <input type='number' placeholder='Add Price' name="price" id='price' value={retrieveData.price} onChange={handleChange} />
                            </div>
                            <div className='upload-box-container'>
                                <div class="upload-box" onclick="document.getElementById('fileInput').click();" >
                                    <input type="file" id="file-upload" name='selectedImage' accept="image/*" onChange={handleBase64}/>
                                    <p>Click or Drag an Image to Upload</p>
                                </div>
                            </div>
                            <div className='addBtnContainer'>
                                <div className='addBtn'>
                                    <button onSubmit={handleSubmit}>Update Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditProduct
