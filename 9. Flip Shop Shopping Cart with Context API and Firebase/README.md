# Flip Shop: Shopping Cart with Context API and Firebase

This React project simulates a shopping cart system where users can browse items, add them to a cart, view the cart with updated totals, and remove items as needed. The project uses Firebase as a backend to store and retrieve item data and leverages the Context API for managing cart state globally.

## Features

- **Global State Management with Context API**: Handles cart items and total amount across the app.
- **Firebase Integration**: Fetches item data from Firebase Realtime Database.
- **Cart Management**: Allows adding/removing items and updating item quantities, with a real-time cart total.
- **Error Handling and Loading Indicators**: Displays messages during data fetching or errors.
- **Responsive UI**: A consistent user experience across devices.

## Project Structure

```plaintext
/public
/src
├── Components
│   ├── Cart                      # Cart components for displaying items and handling add/remove
│   ├── Layout                    # Layout components like the Header and navigation
│   ├── List                      # List components for displaying available items
│   │   └── ListItem              # Subcomponent for each individual list item
│   └── UI                        # Shared UI components like Modal and Card
├── img                           # Folder for images used in the app
└── Store                         # Context API setup for managing cart state
