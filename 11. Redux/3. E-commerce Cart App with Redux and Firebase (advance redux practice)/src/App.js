import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux'; 
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true; 
// use Effect is running when the component is rendered for the first time 
// this is over writing the previous cart state with the empty array 
// to avoid this we will use a variable outside the component 
// the component will be re-render but the variable will not 
// so we can use use this to avoid request to backend for the first time 

function App() {
  const isShown = useSelector(state => state.toggleCart.isShown)
  // useSelector will automatically subscribe to the store 
  // when the data is updated in the store for example when any item id added or removed from cart 
  // this will notify this component i,e app component, 
  // since the dependency of the useEffect will he changed, it will reevaluate the use effect and backend data will be updated 
  const cart = useSelector(state => state.cartItems)

  const dispatch = useDispatch(); //for notifications 
  const notification = useSelector(state => state.toggleCart.notification)

  useEffect(() => {

    if(isInitial){
      isInitial =false; 
      return
    }

    if(cart.changed){
      dispatch(sendCartData({
        totalQuantity: cart.totalQuantity, 
        items: cart.items
      }
        ))
    }

  }, [cart, dispatch]);

  // need a another effect because of dependency  
  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch]) //redux will make sure this dispatch will never change 

  return (
    <>
    {notification && <Notification
      status= {notification.status}
      title = {notification.title}
      message = {notification.message}
    />}
      <Layout>
      {isShown && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
