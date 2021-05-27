import CartContext from './CartContext'
import React, { useReducer } from 'react'

const initCart = {
  items: [],
  totalAmount: 0,
}
const cartReducer = function (cart, action) {
  switch (action.type) {
    case 'ADD':
      let updatedAddItems
      const updateAddTotalAmount =
        +cart.totalAmount + action.item.price * +action.item.amount
      //xac dinh item duoc add
      const selectedItemIndex = cart.items.findIndex(
        (item) => item.name === action.item.name
      )
      const selectedItem = cart.items[selectedItemIndex]
      // neu item da co trong cart
      if (selectedItem) {
        const updateItem = {
          ...selectedItem,
          amount: +selectedItem.amount + +action.item.amount,
        }
        updatedAddItems = [...cart.items]
        updatedAddItems[selectedItemIndex] = updateItem
        return { items: updatedAddItems, totalAmount: updateAddTotalAmount }
      }
      //neu item chua co trong  cart
      else updatedAddItems = [...cart.items, action.item]

      return { items: updatedAddItems, totalAmount: updateAddTotalAmount }
    case 'REMOVE':
      const existingCartItemIndex = cart.items.findIndex(
        (item) => item.id === action.id
      )
      const existingItem = cart.items[existingCartItemIndex]
      const updatedTotalAmount = +cart.totalAmount - existingItem.price
      let updatedItems
      if (existingItem.amount === 1) {
        updatedItems = cart.items.filter((item) => item.id !== action.id)
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        }
        updatedItems = [...cart.items]
        updatedItems[existingCartItemIndex] = updatedItem
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    case 'RESET':
      return initCart
    default:
      return initCart
  }
}
const CartContextProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, initCart)
  const onAddItemHandler = (item) => {
    dispatchCart({ type: 'ADD', item: item })
  }
  const onRemoveItemHandler = (id) => {
    dispatchCart({ type: 'REMOVE', id: id })
  }
  const onResetItemHandler = () => {
    dispatchCart({ type: 'RESET' })
  }
  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    onAddItemHandler: onAddItemHandler,
    onRemoveItemHandler: onRemoveItemHandler,
    onResetItemHandler: onResetItemHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartContextProvider
