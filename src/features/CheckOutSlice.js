import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  checkOutShippingData : [],
  checkOutNameAndAddress : [],
  idValue : ""
}

export const CheckOutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    checkOutShippingData : (state , action) => {
        state.checkOutShippingData.push(action.payload);
    },
    nameandAddressFunction : (state , action) => {
        state.checkOutNameAndAddress.push(action.payload);
    },
    idValue : (state , action) => {
      state.idValue = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {checkOutShippingData , nameandAddressFunction, idValue} = CheckOutSlice.actions

export default CheckOutSlice.reducer