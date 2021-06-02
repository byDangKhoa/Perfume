import classes from './Cart.module.scss'
import React, { useState } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import OrdeForm from '../Perfume/OrderForm'
import { useDispatch, useSelector } from 'react-redux'
import { showCartActions } from '../../store/ui'
import { cartActions } from '../../store/cart'
const Cart = (props) => {
  // const ctxShowCart = useContext(ShowCart)
  // const ctxCart = useContext(CartContext)
  const dispatch = useDispatch()
  const getCartItems = useSelector((state) => state.cart.items)
  const getCartTotalAmount = useSelector((state) => state.cart.totalAmount)
  const displayCart = getCartItems.length > 0
  const [displayForm, setDisplayForm] = useState(false)
  const onPlusHandler = (item) => {
    dispatch(cartActions.plusItemHandler(item))
  }
  const onSubtractHandler = (item) => {
    dispatch(cartActions.removeItemHandler(item))
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {getCartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onPlus={onPlusHandler.bind(null, item)}
          onSubtract={onSubtractHandler.bind(null, item)}
        />
      ))}
    </ul>
  )
  const onCloseHandler = () => {
    dispatch(showCartActions.onCloseHandler())
  }
  const onOrderHandler = function () {
    setDisplayForm(true)
    return
  }
  return (
    <Modal onModalClose={onCloseHandler} className={classes.item}>
      {cartItems}
      {getCartItems.length === 0 ? (
        <h2 className={classes.emty}>Your cart is emty</h2>
      ) : (
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{`${getCartTotalAmount}k VND`}</span>
        </div>
      )}
      {!displayForm && (
        <div className={classes.actions}>
          <button onClick={onCloseHandler} className={classes['button--alt']}>
            Close
          </button>
          {displayCart && (
            <button onClick={onOrderHandler} className={classes.button}>
              Order
            </button>
          )}
        </div>
      )}
      {displayForm && (
        <OrdeForm
          setDisplayForm={setDisplayForm}
          onCloseHandler={onCloseHandler}
        />
      )}
    </Modal>
  )
}
export default Cart
