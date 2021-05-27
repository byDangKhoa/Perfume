import './App.css'
import Header from './components/Layout/Header'
import React, { useState } from 'react'
import Perfume from './components/Perfume/Perfume'
import Cart from './components/Cart/Cart'
import ShowCart from './Context/ShowCart'
import CartContextProvider from './Context/CartContextProvider'

function App() {
  const [cartDisplay, setCartDisplay] = useState(false)
  return (
    <CartContextProvider>
      <ShowCart.Provider
        value={{ cartDisplay: cartDisplay, setCartDisplay: setCartDisplay }}>
        {cartDisplay === true && <Cart />}
        <Header />
        <main>
          <Perfume />
        </main>
      </ShowCart.Provider>
    </CartContextProvider>
  )
}

export default App
