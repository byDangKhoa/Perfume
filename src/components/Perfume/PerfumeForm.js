import { useState } from 'react'
import classes from './PerfumeForm.module.scss'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

const PerfumeForm = (props) => {
  const [addIsValid, setAddIsValid] = useState(true)
  const [amountInput, setAmountInput] = useState(null)
  const dispatch = useDispatch()
  const onInputHandler = (e) => {
    setAmountInput(e.target.value)
  }
  const onAddHandler = function (e) {
    e.preventDefault()
    setAddIsValid(true)
    if (
      amountInput.trim().length === 0 ||
      +amountInput < 1 ||
      +amountInput > 10
    ) {
      setAddIsValid(false)
      return
    }
    dispatch(
      cartActions.addItemHandler({
        id: props.id,
        amount: +amountInput,
        price: props.price,
        name: props.name,
      })
    )
  }

  // const addAmountToCartHandler = (amount) => {
  // ctxCart.onAddItemHandler({
  //   id: props.id,
  //   amount: amount,
  //   price: props.price,
  //   name: props.name,
  // })
  // }
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
