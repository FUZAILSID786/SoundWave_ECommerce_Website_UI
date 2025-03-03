import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { checkOutShippingData, nameandAddressFunction } from '../../../features/CheckOutSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "./SAddress.css"


const SAddress = () => {


  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: Number,
    country: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const { firstName, lastName, address } = inputValues;
    dispatch(checkOutShippingData(firstName, lastName, address))
  }, [])

  const cart_total_price = useSelector((state) => state.cart.cartTotal);
  const cart = useSelector((state) => (state.cart.cartData));
  let myProductName;

  cart.map((ele)=>{
    myProductName = ele.t;
  })

  const movetoNext = async () => {
    const { firstName, lastName, address, city, state, zip, country } = inputValues;
    if (firstName && lastName && address && city && state && zip && country) {
      // toast.success("Shipping Details Added!")
      // navigate("/checkout/paymentdetails")
      dispatch(nameandAddressFunction({firstName : firstName, lastName : lastName , address : address}));
      // let totalP = 200;
      // let myPName = "IPhone"
      try{
      const res = await fetch("/checkout" , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          items : [{
            name : myProductName,
            price : cart_total_price,
          }
          ]
        })
      })
      if(res){
      const data = await res.json();
      window.location = data.url;
      navigate("/placeOrder");
      }
    }catch(error){
      console.log("ERROR" , error);
    }
    } else {
      toast.error("Please Don't Leave Any Field Blank!")
    }
  }

  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setInputValues({ ...inputValues, [name]: value });
  }

  return (
    <>
      <div className='saddress-cont'>
        <div className='saddress-div'>
          <React.Fragment>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: "Poppins" }} >
              Shipping address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  value={inputValues.firstName}
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  sx={{ fontFamily: "Poppins" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  value={inputValues.lastName}
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  sx={{ fontFamily: "Poppins" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  value={inputValues.address}
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                  sx={{ fontFamily: "Poppins" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  value={inputValues.city}
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                  sx={{ fontFamily: "Poppins" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  value={inputValues.state}
                  fullWidth
                  variant="standard"
                  sx={{ fontFamily: "Poppins" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  value={inputValues.zip}
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                  sx={{ fontFamily: "Poppins" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  value={inputValues.country}
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                  sx={{ fontFamily: "Poppins" }}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </React.Fragment>
          <button onClick={movetoNext} className='movetonext'>NEXT</button>
        </div>
      </div>
    </>
  )
}

export default SAddress