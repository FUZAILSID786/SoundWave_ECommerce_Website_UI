import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./ViewProducts.css"
import { useEffect } from 'react';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const columns = [
    { id: 'image', label: 'Product Image', minWidth: 170 },
    {
        id: 'product_title',
        label: 'Title',
        minWidth: 170,
    },
    {
        id: 'product_description',
        label: 'Description',
        minWidth: 170,
    },
    {
        id: 'product_price',
        label: 'Price',
        minWidth: 170,
    },
    {
        id: 'edit_delete',
        label: 'Edit & Delete',
        minWidth: 170,
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ViewProducts() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [productData , setProductData] = useState([])
    const [productAllData , setAllProductData] = useState([])
    const [productShopData , setShopProductData] = useState([])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const getData = async () => {
        const res = await fetch("/addproduct", {
            method: "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const productD = await res.json();
        setProductData(productD);
    }

    const handleProductDelete = async (productId) => {
        const response = await fetch(`/addproduct/${productId}` , {
            method:"DELETE",
            
            
        });
        if(response.ok){
            toast.success("Product Deleted Successfully!");
        }else{
            toast.error("Product Not Deleted!");  
        }
    }

    const getAllData = async () => {
        const res = await fetch("/addallproduct", {
            method: "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const productD = await res.json();
        setAllProductData(productD);
    }

    const getShopData = async () => {
        const res = await fetch("/addshopproduct", {
            method: "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const productD = await res.json();
        setShopProductData(productD);
    }

    useEffect(() => {
        getData();
        getAllData();
        getShopData();
    },[])

    const navigate = useNavigate();
    const handleProductEdit = (id) => {
        navigate(`/editproduct/${id}`)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
        {/* Top Products */}
            <div className='view_product_table_container'>
                <h1 className='view_products_heading'>Top Products</h1><br/>
                <div className='view_products_table'>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        productData.map((products)=>{
                                            return(
                                                <>
                                                <TableRow>
                                                    <TableCell><img style={{height:"50px"}} src={products.selectedImage}></img></TableCell>
                                                    <TableCell>{products.title} </TableCell>
                                                    <TableCell>{products.description} </TableCell>
                                                    <TableCell>$ {products.price} </TableCell>
                                                    <TableCell><EditIcon sx={{fontSize:"30px", cursor:"pointer"}} onClick={()=>handleProductEdit(products._id)} /> <DeleteIcon sx={{marginLeft:"2rem", fontSize:"30px", cursor:"pointer"}} onClick={() => handleProductDelete(products._id)} /> </TableCell>
                                                </TableRow>
                                                </>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>


                        
                {/* All Product */}


            <div className='view_product_table_container'>
                <h1 className='view_products_heading'>All Products</h1><br/>
                <div className='view_products_table'>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        productAllData.map((products)=>{
                                            return(
                                                <>
                                                <TableRow>
                                                    <TableCell><img style={{height:"50px"}} src={products.AllSelectedImage}></img></TableCell>
                                                    <TableCell>{products.allTitle} </TableCell>
                                                    <TableCell>{products.allDescription} </TableCell>
                                                    <TableCell>$ {products.allPrice} </TableCell>
                                                    <TableCell><EditIcon sx={{fontSize:"30px", cursor:"pointer"}} /> <DeleteIcon sx={{marginLeft:"2rem", fontSize:"30px", cursor:"pointer"}} /> </TableCell>
                                                </TableRow>
                                                </>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>



            {/* Shop Product */}

            <div className='view_product_table_container'>
                <h1 className='view_products_heading'>Shop Products</h1><br/>
                <div className='view_products_table'>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        productShopData.map((products)=>{
                                            return(
                                                <>
                                                <TableRow>
                                                    <TableCell><img style={{height:"50px"}} src={products.shopSelectedImage}></img></TableCell>
                                                    <TableCell>{products.shopTitle} </TableCell>
                                                    <TableCell>{products.shopDescription} </TableCell>
                                                    <TableCell>$ {products.shopPrice} </TableCell>
                                                    <TableCell><EditIcon sx={{fontSize:"30px", cursor:"pointer"}}  /> <DeleteIcon sx={{marginLeft:"2rem", fontSize:"30px", cursor:"pointer"}} /> </TableCell>
                                                </TableRow>
                                                </>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>
        </>
    );
}
