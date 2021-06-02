import { createSlice } from '@reduxjs/toolkit'

const showCartSlice = createSlice({
  name: 'ui',
  initialState: { showCart: false },
  reducers: {
    onCloseHandler(state) {
      state.showCart = false
    },
    onShowHandler(state) {
      state.showCart = true
    },
  },
})
export const showCartActions = showCartSlice.actions
export default showCartSlice
