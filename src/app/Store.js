import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/CartSlice'
import CheckOutReducer from '../features/CheckOutSlice'

export const store = configureStore({
  reducer: { cart : cartReducer , checkout : CheckOutReducer },
})