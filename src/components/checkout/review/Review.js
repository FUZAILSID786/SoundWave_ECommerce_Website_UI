import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckOutNavbar from '../checkoutnavbar/CheckOutNavbar';
import { Container, Paper } from '@mui/material';
import "./Review.css"
import { toast } from 'react-toastify';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];


export default function Review() {

  const [products, setProducts] = useState([])
  const cart = useSelector((state) => (state.cart.cartData));
  const shippingOwner = useSelector((state) => state.checkout.checkOutShippingData);
  const cart_total_price = useSelector((state) => state.cart.cartTotal)
  const nameandAddress = useSelector((state) => state.checkout.checkOutNameAndAddress)

  useEffect(() => {
    setProducts(cart);
  }, [])

  const navigate = useNavigate();
  const placeOrder = () => {
    navigate("/placeorder")
    toast.success("Order Placed Successfully!")
  }

  return (
    <>
      <CheckOutNavbar />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 }, backgroundColor: "#edf1f4", border: "none", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <Typography component="h1" variant="h4" align="center" sx={{ fontFamily: "Poppins", fontWeight: "" }} className='checkout-heading'>
            Order Summary
          </Typography>
        </Paper>
      </Container>
      <div className='review-main-container'>
        <div className='just-review'>
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Order summary
            </Typography>
            <List disablePadding>
              {products.map((product) => (
                <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                  <ListItemText primary={product.name} secondary={product.desc} />
                  <Typography variant="body2">{product.price}</Typography>
                </ListItem>
              ))}
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  $ {cart_total_price}
                </Typography>
              </ListItem>
            </List>
            <Grid container spacing={2}>
              {
                nameandAddress.map((ele) => {
                  return (
                    <>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                          Shipping
                        </Typography>
                        <Typography gutterBottom>{ele.firstName + ele.lastName}</Typography>
                        <Typography gutterBottom>{ele.address}</Typography>
                      </Grid>
                    </>
                  )
                })
              }
              <Grid item container direction="column" xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Payment details
                </Typography>
                <Grid container>
                  {products.map((payment) => (
                    <React.Fragment key={payment.t}>
                      <Grid item xs={3}>
                        <Typography gutterBottom sx={{ fontSize: "13px", fontFamily: "Poppins" }} >${payment.p}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom sx={{ fontSize: "13px", fontFamily: "Poppins" }}>{payment.t}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <img style={{ height: "30px" }} src={payment.img} />
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <button onClick={placeOrder} className='place'>Place Order</button>
          </React.Fragment>
        </div>
      </div>
    </>
  );
}