import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux'; 
import { cartToggleActions } from './store/display-cart';
import Notification from './components/UI/Notification';

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
    const sendCartData = async () => {
      dispatch(cartToggleActions.showNotification({
        status: 'pending', 
        title: 'sending...',
        message: 'Sending cart data!', 
      })); 
      const response = await fetch('https://redux-practice-23bf2-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT', //instead of post we will write put, because put will over ride the data 
      body: JSON.stringify(cart)
    }); 
    if(!response.ok){
      throw new Error('Sending cart data failed....')
    }

    // const responseData = await response.json(); 
    
    dispatch(cartToggleActions.showNotification({
      status: 'success', 
      title: 'Success!!',
      message: 'Sent cart data successfully!', 
    })); 
    }

    if(isInitial){
      isInitial =false; 
      return
    }

    sendCartData().catch(error =>{
      dispatch(cartToggleActions.showNotification({
        status: 'error', 
        title: 'Error!',
        message: 'Sending cart data failed!', 
      })); 
    })
  }, [cart, dispatch]);

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
