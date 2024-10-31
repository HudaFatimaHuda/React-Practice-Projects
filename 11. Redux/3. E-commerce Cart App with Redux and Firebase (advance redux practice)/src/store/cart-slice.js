import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  // totalAmount: 0,
  totalQuantity: 0,
  changed: false,
};

const cartItems = createSlice({
  name: "cartItems",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
        state.totalQuantity = action.payload.totalQuantity
        state.items = action.payload.items
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      // state.changed = true; 
      if (!existingCartItem) {
        // normally we should not do this --> mutating the existing state
        // but redux will make a brand new state snap shot for us
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingCartItem.quantity++;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingCartItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true; 
      if (existingCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingCartItem.quantity--;
        existingCartItem.totalPrice =
        existingCartItem.totalPrice - existingCartItem.price;
      }
    },
  },
});


export default cartItems.reducer;
export const cartActions = cartItems.actions;
