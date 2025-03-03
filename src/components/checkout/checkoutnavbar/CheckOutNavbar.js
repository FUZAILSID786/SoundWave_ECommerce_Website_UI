import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import soundwavelogo from '../../../assets/SoundWavelogo.png'

const CheckOutNavbar = () => {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6"  noWrap className='maincheckoutnav'>
            <img className='checkoutlogo' src={soundwavelogo} alt='' />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default CheckOutNavbar
