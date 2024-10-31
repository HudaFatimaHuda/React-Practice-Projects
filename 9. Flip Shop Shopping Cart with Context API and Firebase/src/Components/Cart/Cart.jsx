import {useContext} from 'react'
import CartItem from './CartItem'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../Store/cart-context'

const Cart = props => {

  const CartCtx = useContext(CartContext)
  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`

  const hasItems = CartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    CartCtx.removeItem(id); 
  }

  const cartItemAddHandler = (item) => {
    CartCtx.addItem({...item, amount: 1})
  }

 const cartItem = (<ul className = {styles['cart-items']}>
      {CartCtx.items.map(item => (
        <CartItem key={item.id} name={item.name} amount = {item.amount} price = {item.price} onRemove = {cartItemRemoveHandler.bind(null,item.id)} onAdd = {cartItemAddHandler.bind(null,item)}/>
      ))}
    </ul>)

  return( <Modal onClick = {props.onCloseCart}>
    {cartItem}
    <div className = {styles.total}>
    <span>Total Amount</span>
    <span>{totalAmount}</span>
    </div>
    <div className = {styles.actions}>
      <button className = {styles['button--alt']} onClick = {props.onCloseCart}>Close</button>
      {hasItems && <button className = {styles.button}>Order</button>}
    </div>
    </Modal>)
}

export default Cart;
