import { cartActions } from "./cart-slice";
import { cartToggleActions } from "./ui-slice";

export const sendCartData = (cart) => {
  // since this is the action creator,
  // it should return something like this: return {type: "", payload: "..."}
  // in our reducers, we are not doing something like this because it is done by redux toolkit
  // but if we are not using toolkit, we need this

  // for now we do not need to create a function that returns an object
  // we can return a function, that we can do in js
  // a function can return a function
  return async (dispatch) => {
    dispatch(
      cartToggleActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-practice-23bf2-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT", //instead of post we will write put, because put will over ride the data
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed....");
      }
      // const responseData = await response.json();
    };

    try {
      await sendRequest();
      dispatch(
        cartToggleActions.showNotification({
          status: "success",
          title: "Success!!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartToggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-practice-23bf2-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not load data....");
      }
      const responseData = await response.json();
      return responseData;
    };

    try {
      const cartData = await fetchData();
      // if we need, we will restructure our data here
      dispatch(cartActions.replaceCart({
        items: cartData.items || [], 
        totalQuantity: cartData.totalQuantity || 0
      }));
    } catch (error) {
      dispatch(
        cartToggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
