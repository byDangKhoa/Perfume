import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart.js'
import showCartSlice from './ui'

const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: showCartSlice.reducer },
})
export default store
