import React, {useContext} from 'react';
import CartContext from '../../Store/cart-context'
import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = props => {
  const cartCtx = React.useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((current,item) => {return current + item.amount},0);

  return(<button className = {styles.button} onClick = {props.onClick}>
    <span className= {styles.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className= {styles.badge}>{numberOfCartItems}</span>
  </button>);
};






export default HeaderCartButton;
