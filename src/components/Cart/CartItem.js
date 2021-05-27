import classes from './CartItem.module.scss'
const CartItem = (props) => {
  const price = `${props.price}kVND`
  return (
    <li key={props.id} className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onSubtract}>−</button>
        <button onClick={props.onPlus}>+</button>
      </div>
    </li>
  )
}
export default CartItem
