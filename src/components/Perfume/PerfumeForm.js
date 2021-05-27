import { useContext, useState } from 'react'
import classes from './PerfumeForm.module.scss'
import CartContext from '../../Context/CartContext'

const PerfumeForm = (props) => {
  const [addIsValid, setAddIsValid] = useState(true)
  const [amountInput, setAmountInput] = useState('')
  const ctxCart = useContext(CartContext)
  const onInputHandler = (e) => {
    setAmountInput(e.target.value)
  }
  const onAddHandler = function (e) {
    e.preventDefault()
    setAddIsValid(true)
    if (
      amountInput.trim().length === 0 ||
      amountInput < 1 ||
      amountInput > 10
    ) {
      setAddIsValid(false)
      return
    }
    addAmountToCartHandler(+amountInput)
  }

  const addAmountToCartHandler = (amount) => {
    ctxCart.onAddItemHandler({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    })
  }
  return (
    <form onSubmit={onAddHandler} className={classes.form}>
      <div className={classes.input}>
        <label htmlFor={`amount${props.id}`}>Amount</label>
        <input
          value={+amountInput}
          onChange={onInputHandler}
          min='1'
          type='number'
          id={`amount${props.id}`}
        />
      </div>
      <button>+Add</button>
      {addIsValid === false && (
        <p className={classes.error}>Please enter the correct amount!</p>
      )}
    </form>
  )
}
export default PerfumeForm
