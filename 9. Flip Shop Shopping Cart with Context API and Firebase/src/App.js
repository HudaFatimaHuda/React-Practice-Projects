import  {useState} from 'react'
import Header from  './Components/Layout/Header';
import Lists from './Components/List/Lists'
import Cart from './Components/Cart/Cart'
import CartProvider from './Store/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {setCartIsShown(true);};
  const hideCartHandler = () => {setCartIsShown(false);};

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart = {hideCartHandler} />}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Lists />
      </main>
    </CartProvider>
  );
}

export default App;
