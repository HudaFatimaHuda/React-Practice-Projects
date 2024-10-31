# E-commerce Cart App with Redux and Firebase

This React project demonstrates a shopping cart application using Redux for state management and Firebase as the backend. Users can add items to the cart, view the cart total, and save the cart state to Firebase. The app calculates the total cost, provides notifications, and persists the cart state to the backend.

## Features

- **Cart Management**: Add and remove items from the cart, with quantities and total prices managed by Redux.
- **Cart State Persistence**: The cart state is saved to Firebase, and changes to the cart trigger automatic updates.
- **Notifications**: Real-time notifications for data loading, saving, and errors.
- **Redux Slices**: Organized state management with two Redux slices:
  - `cartSlice`: Manages cart items, quantities, and totals.
  - `uiSlice`: Manages UI state for showing/hiding the cart and notifications.

## Project Structure

```plaintext
/src
│   App.js                      # Main app component with useEffect for data synchronization
│   index.css                   # Global styles
│   index.js                    # Entry point for rendering the app
│   
├───components
│   ├───Cart
│   │       Cart.js             # Main cart component for displaying items and total
│   │       Cart.module.css     # CSS Module for styling Cart
│   │       CartButton.js       # Button to toggle cart visibility
│   │       CartButton.module.css
│   │       CartItem.js         # Individual cart item with quantity controls
│   │       CartItem.module.css
│   │       
│   ├───Layout
│   │       Layout.js           # Layout component for wrapping main content
│   │       MainHeader.js       # Main header with cart button
│   │       MainHeader.module.css
│   │       
│   ├───Shop
│   │       ProductItem.js      # Individual product component with add-to-cart functionality
│   │       ProductItem.module.css
│   │       Products.js         # Component displaying all products
│   │       Products.module.css
│   │
│   └───UI
│           Card.js             # Reusable card component for layout consistency
│           Card.module.css
│           Notification.js     # Component for displaying notifications
│           Notification.module.css
│
└───store
        cart-actions.js         # Async actions for fetching and sending cart data
        cart-slice.js           # Redux slice for managing cart state
        ui-slice.js             # Redux slice for managing UI state like cart visibility and notifications
        cart-redux.js           # Redux store configuration combining slices
