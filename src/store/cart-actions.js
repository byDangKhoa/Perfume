import { createAsyncThunk } from '@reduxjs/toolkit'

const getData = createAsyncThunk('cart/getData', async function () {
  const res = await fetch(
    'https://react-http-request-9084f-default-rtdb.asia-southeast1.firebasedatabase.app/perfume.json'
  )
  if (!res.ok) {
    throw Error('failed')
  }
  const data = await res.json()
  return {
    items: data?.items || [],
    totalAmount: data?.totalAmount || 0,
  }
})
const sendData = createAsyncThunk('cart/sendData', async function (cart) {
  const res = await fetch(
    'https://react-http-request-9084f-default-rtdb.asia-southeast1.firebasedatabase.app/perfume.json',
    {
      method: 'PUT',
      body: JSON.stringify({
        items: cart.items,
        totalAmount: cart.totalAmount,
      }),
    }
  )
  if (!res.ok) {
    throw Error('failed')
  }
})
