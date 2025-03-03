import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Review from '../review/Review';
import Payment from '../payment/Payment';
import SAddress from '../saddress/SAddress';
import soundwavelogo from '../../../assets/SoundWavelogo.png'
import './Check.css'
import CheckOutNavbar from '../checkoutnavbar/CheckOutNavbar';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <SAddress/>;
//     case 1:
//       return <Payment />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);



  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <CheckOutNavbar />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 } , backgroundColor : "#edf1f4" , border:"none" ,boxShadow : "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
          <Typography component="h1" variant="h4" align="center" sx={{fontFamily : "Poppins", fontWeight : ""}} className='checkout-heading'>
            Checkout
          </Typography>
        </Paper>
      </Container>
    </React.Fragment>
  );
}