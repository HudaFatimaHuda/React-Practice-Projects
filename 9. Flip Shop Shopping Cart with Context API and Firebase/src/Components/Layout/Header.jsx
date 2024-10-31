import {Fragment, useContext} from 'react';
import CartContext from '../../Store/cart-context'
import styles from './Header.module.css'
import homeImg from '../../img/home.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
 
  return <Fragment>
    <header className = {styles.header}>
      <h1>Flip Shop</h1>
      <HeaderCartButton onClick = {props.onShowCart}/>
    </header>
    <div className = {styles['main-image']}>
      <img src={homeImg} alt="background image"/>
    </div>
  </Fragment>

}

export default Header;
