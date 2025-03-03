import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CheckOutNavbar from '../checkoutnavbar/CheckOutNavbar';
import { Container, Paper } from '@mui/material';
import "./Payment.css"

const Payment = () => {

  const [paymentInputValues , setPaymentInputValues] = useState({
    nameOfCard : "",
    cardNumber : Number,
    expiryDate : Number,
    CVV : Number,
  });

  let name , value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setPaymentInputValues({...paymentInputValues , [name] : value});
  }

  const navigate = useNavigate();

  const gotoPlaceOrder = () => {
    const {nameOfCard , cardNumber , expiryDate , CVV} = paymentInputValues;

    if(cardNumber.length != 16){
      toast.error("Card Number Invalid")
    }
    else if(cardNumber && expiryDate && CVV && nameOfCard){
      toast.success("Payment Details Added!")
      navigate("/checkout/revieworder")
    }
    else{
      toast.error("Please Don't Leave Any Field Blank!")
    }
  }

  const backtoSAddress = () => {
    navigate("/checkout")
  }

  return (
    <>
    <CheckOutNavbar />
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 } , backgroundColor : "#edf1f4" , border:"none" ,boxShadow : "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
          <Typography component="h1" variant="h4" align="center" sx={{fontFamily : "Poppins", fontWeight : ""}} className='checkout-heading'>
            Payment Details
          </Typography>
        </Paper>
      </Container>
    <div className='payment-container'>
      <div className='payment-det'>
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name='nameOfCard'
            value={paymentInputValues.nameOfCard}
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name='cardNumber'
            type='number'
            value={paymentInputValues.cardNumber}
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            type='number'
            name='expiryDate'
            value={paymentInputValues.expiryDate}
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            type='number'
            name='CVV'
            value={paymentInputValues.CVV}
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
    <button onClick={backtoSAddress} className='backbtn'>BACK</button>
    <button onClick={gotoPlaceOrder} className='nxtbtn'>NEXT</button>
      </div>
    </div>
    </>
  )
}

export default Payment