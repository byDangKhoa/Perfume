import './App.css'
import Header from './components/Layout/Header'
import React, { Fragment } from 'react'
import Perfume from './components/Perfume/Perfume'
import Cart from './components/Cart/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { getCartData, sendCartData } from './store/cart-actions'
import { useEffect } from 'react'
let isInitial = true
function App() {
  const showCart = useSelector((state) => state.ui.showCart)
  const getCart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch])
  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    } else {
      dispatch(sendCartData(getCart))
    }
  }, [getCart, dispatch])
  return (
    <Fragment>
      {showCart === true && <Cart />}
      <Header />
      <main>
        <Perfume />
      </main>
    </Fragment>
  )
}

export default App
