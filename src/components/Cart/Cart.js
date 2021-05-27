import classes from './Cart.module.scss'
import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import ShowCart from '../../Context/ShowCart'
import CartContext from '../../Context/CartContext'
import CartItem from './CartItem'
import OrdeForm from '../Perfume/OrderForm'
const Cart = (props) => {
  const ctxShowCart = useContext(ShowCart)
  const ctxCart = useContext(CartContext)
  const displayCart = ctxCart.items.length > 0
  const [displayForm, setDisplayForm] = useState(false)
  const onPlusHandler = (item) => {
    ctxCart.onAddItemHandler({ ...item, amount: 1 })
  }
  const onSubtractHandler = (id) => {
    ctxCart.onRemoveItemHandler(id)
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctxCart.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onPlus={onPlusHandler.bind(null, item)}
          onSubtract={onSubtractHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  )
  const onCloseHandler = () => {
    ctxShowCart.setCartDisplay(false)
  }
  const onOrderHandler = function () {
    setDisplayForm(true)
    return
  }
  return (
    <Modal onModalClose={onCloseHandler} className={classes.item}>
      {cartItems}
      {ctxCart.items.length === 0 ? (
        <h2 className={classes.emty}>Your cart is emty</h2>
      ) : (
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{`${ctxCart.totalAmount}k VND`}</span>
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
