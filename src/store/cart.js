import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItemHandler: function (state, action) {
      const newItem = action.payload
      state.totalAmount = state.totalAmount + +newItem.price * +newItem.amount
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: +newItem.price,
          amount: +newItem.amount,
        })
      }
      if (existingItem) {
        existingItem.amount = +existingItem.amount + 1
      }
    },
    removeItemHandler: function (state, action) {
      const removeItem = action.payload
      state.totalAmount = state.totalAmount - removeItem.price
      const existingItem = state.items.find((item) => item.id === removeItem.id)
      if (existingItem.amount !== 1) {
        existingItem.amount = existingItem.amount - 1
      } else {
        state.items = state.items.filter((item) => item.id !== removeItem.id)
      }
    },
    resetItemHandler(state) {
      return state
    },
  },
})
export const cartActions = cartSlice.actions
export default cartSlice
