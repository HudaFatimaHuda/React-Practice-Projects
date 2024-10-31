import classes from './CartButton.module.css';
import {cartToggleActions} from '../../store/ui-slice'; 
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cartItems.totalQuantity) 
  const dispatch = useDispatch(); 
  const toggleCart = () => {
      dispatch(cartToggleActions.toggle())
  }

  return (
    <button className={classes.button} onClick= {toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
