import {useContext} from 'react'
import styles from './ListItem.module.css'
import ListForm from './ListForm'
import CartContext from '../../../Store/cart-context'

const ListItem = props => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price
    })
  }

  return(<li className = {styles.list}>
    <div>
      <h3>{props.name}</h3>
      <div className = {styles.description}> {props.description} </div>
      <div className = {styles.price}> {`$${props.price.toFixed(2)}`} </div>
    </div>

    <div>
      <p>Daraz Account</p>
      <button className = {styles.form_button} onClick = {addToCartHandler}>Add</button>  </div>
  </li>)
}

export default ListItem;
