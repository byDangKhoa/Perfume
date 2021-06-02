import './App.css'
import Header from './components/Layout/Header'
import React, { useState, Fragment } from 'react'
import Perfume from './components/Perfume/Perfume'
import Cart from './components/Cart/Cart'
import { useSelector } from 'react-redux'
// import ShowCart from './Context/ShowCart'
// import CartContextProvider from './Context/CartContextProvider'

function App() {
  const showCart = useSelector((state) => state.ui.showCart)
  return (
    // <CartContextProvider>
    <Fragment>
      {showCart === true && <Cart />}
      <Header />
      <main>
        <Perfume />
      </main>
    </Fragment>
    // </CartContextProvider>
  )
}

export default App
