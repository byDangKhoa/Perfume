import './App.css'
import React, { Fragment } from 'react'
import Perfume from './components/Perfume/Perfume'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import ImportPerfume from './components/Perfume/ImportPerfume'
import BackgroundImg from './components/Layout/BackgroundImg'
import Navigator from './components/Layout/Navigator'
import { Route, Redirect, Switch } from 'react-router-dom'
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
      <Navigator />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/main'></Redirect>
        </Route>
        <Route exact path='/main'>
          <BackgroundImg />
          <Perfume />
          {showCart === true && <Cart />}
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/import'>
          <ImportPerfume />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default App
