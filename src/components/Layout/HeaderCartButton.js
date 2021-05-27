import { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.scss'
import ShowCart from '../../Context/ShowCart'
import CartContext from '../../Context/CartContext'
const HeaderCartButton = () => {
  const ctxShowCart = useContext(ShowCart)
  const ctxCart = useContext(CartContext)
  const numberOfCartItem = ctxCart.items.reduce((acc, item) => {
    return acc + +item.amount
  }, 0)
  const onCartHandler = () => {
    return ctxShowCart.setCartDisplay(true)
  }
  const [btn, setBtn] = useState(false)
  const { items } = ctxCart
  const btnClass = `${classes.button} ${btn ? classes.bump : ''}`
  useEffect(() => {
    if (items === 0) {
      return
    }
    setBtn(true)
    const timer = setTimeout(() => {
      setBtn(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [items])
  return (
    <button onClick={onCartHandler} className={btnClass}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  )
}
export default HeaderCartButton
