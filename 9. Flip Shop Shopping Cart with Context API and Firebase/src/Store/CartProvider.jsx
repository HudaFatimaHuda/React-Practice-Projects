import {useReducer} from 'react';
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    let updatedTotalAmount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]

    let updatedItems;

    if(existingCartItem){
      updatedTotalAmount = state.totalAmount;
      const updatedItem = {...existingCartItem}
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else{
      updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
      updatedItems = state.items.concat(action.item);
    }
    return {items: updatedItems, totalAmount: updatedTotalAmount}
  }

  if(action.type === 'REMOVE'){
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
    const existingCartItem = state.items[existingCartItemIndex]
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    const updatedItems = state.items.filter(item => item.id !== action.id);
    return {items: updatedItems, totalAmount: updatedTotalAmount}
  }

  return defaultCartState
}



  const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    //these are the function to support the cart context provider
    const addItemToCartHandler = item => {
      dispatchCartAction({type: 'ADD', item: item})
    }
    const removeItemFromCartHandler = id => {
      dispatchCartAction({type: 'REMOVE', id: id})
    }

    // cart context helper context
    // that is simple an object
    const  cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler
    }

    return(<CartContext.Provider value = {cartContext}>
      {props.children}
    </CartContext.Provider>)
  }

  export default CartProvider;
