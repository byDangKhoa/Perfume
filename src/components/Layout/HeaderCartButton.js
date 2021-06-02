import { useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.scss'
// import ShowCart from '../../Context/ShowCart'
// import CartContext from '../../Context/CartContext'
import { useSelector, useDispatch } from 'react-redux'
import { showCartActions } from '../../store/ui'
const HeaderCartButton = () => {
  const getCartItems = useSelector((state) => state.cart.items)
  const getCart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  // const ctxShowCart = useContext(ShowCart)
  // const ctxCart = useContext(CartContext)
  const numberOfCartItem = getCartItems.reduce((acc, item) => {
    console.log(item)
    return acc + item.amount
  }, 0)
  const onCartHandler = () => {
    // return ctxShowCart.setCartDisplay(true)
    dispatch(showCartActions.onShowHandler())
  }
  const [btn, setBtn] = useState(false)
  const { items } = getCart
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
