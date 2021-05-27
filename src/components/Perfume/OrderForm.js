import classes from './OrderForm.module.scss'
import useInput from '../hooks/useInput'
import React, { Fragment, useContext, useState } from 'react'
import CartContex from '../../Context/CartContext'
const OrderForm = function (props) {
  const [inputName, , onInputNameHandler, nameHasError] = useInput()
  const [inputPhone, , onInputPhoneHandler, phoneHasError] = useInput()
  const [inputAddress, , onInputAddressHandler, addressHasError] = useInput()
  const [inputEmail, , onInputEmailHandler, emailHasError] = useInput()
  const [isSubmiting, setIsSubmiting] = useState(true)
  const ctxCart = useContext(CartContex)

  const sendOrder = async function (data) {
    const res = await fetch(
      'https://react-http-request-9084f-default-rtdb.asia-southeast1.firebasedatabase.app/perfumecustomer.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    )
    if (!res.ok) {
      throw Error('Server not found')
    }
  }
  const onSubmitOrderHandler = function (e) {
    e.preventDefault()
    const loadedCusData = {
      item: ctxCart.items,
      user: {
        name: inputName,
        phone: inputPhone,
        address: inputAddress,
        email: inputEmail,
      },
    }
    sendOrder(loadedCusData)
    ctxCart.onResetItemHandler()
    setIsSubmiting(false)
  }

  return (
    <form onSubmit={onSubmitOrderHandler} className={classes.form} action=''>
      {isSubmiting ? (
        <div className={classes.control}>
          <div className={`${nameHasError ? classes.invalid : ''}`}>
            <label htmlFor='name'>Name</label>
            <input
              placeholder='Full Name'
              onChange={onInputNameHandler}
              id='name'
              type='text'
            />
          </div>
          <div className={`${phoneHasError ? classes.invalid : ''}`}>
            <label htmlFor='phone'>
              Phone<span className={classes.require}>(required)</span>{' '}
            </label>
            <input
              pattern='[0-9]*'
              placeholder='Phone Number'
              required
              onChange={onInputPhoneHandler}
              maxLength='11'
              minLength='9'
              id='phone'
              type='text'
            />
          </div>
          <div className={`${addressHasError ? classes.invalid : ''}`}>
            <label htmlFor='adr'>
              Address<span className={classes.require}>(required)</span>
            </label>
            <input
              placeholder='Address'
              required
              onChange={onInputAddressHandler}
              id='adr'
              type='text'
            />
          </div>
          <div className={`${emailHasError ? classes.invalid : ''}`}>
            <label htmlFor='email'>Email</label>
            <input
              placeholder='Email'
              onChange={onInputEmailHandler}
              type='email'
            />
          </div>
        </div>
      ) : (
        <Fragment>
          <p>Your order is successful :D </p>
        </Fragment>
      )}
      <div className={classes.actions}>
        {!isSubmiting && (
          <button type='button' onClick={props.onCloseHandler}>
            Cancel
          </button>
        )}
        {isSubmiting && <button className={classes.submit}>Confirm</button>}
      </div>
    </form>
  )
}
export default OrderForm
