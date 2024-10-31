import { configureStore } from "@reduxjs/toolkit";
import displayCartReducer from "./ui-slice";
import cartItemReducer from "./cart-slice";


const store = configureStore({reducer: {toggleCart: displayCartReducer, cartItems: cartItemReducer}});

export default store; 
