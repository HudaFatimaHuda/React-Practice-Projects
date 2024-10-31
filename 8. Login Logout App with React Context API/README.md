# Login/Logout App with React Context API

This React project demonstrates user authentication using the Context API, with login and logout functionality. It provides a simple login form, and upon successful login, updates the context to reflect the user’s authenticated state. Once logged in, the UI changes to display a welcome message and a logout button. This setup illustrates how to manage global state in React using context.

## Features

- **Login Form**: Users can log in with email and password validation.
- **Authentication Context**: Manages and shares authentication state across components.
- **Dynamic Navigation**: Shows login or logout options based on the user's authentication state.
- **Input Validation**: Uses reducers to manage email and password validation.
- **Persisted Login**: Authentication state is saved in `localStorage`, so the login status persists across page reloads.

## Project Structure

```plaintext
/src
│   App.js                      # Main app component rendering different pages based on auth state
│   index.css                   # Global CSS
│   index.js                    # Entry point for rendering the app
│
├───components
│   ├───Home
│   │       Home.js             # Home page component with logout button
│   │       Home.module.css     # CSS Module for styling the Home component
│   │
│   ├───Login
│   │       Login.js            # Login form with validation and form submission
│   │       Login.module.css    # CSS Module for styling the Login component
│   │
│   ├───MainHeader
│   │       MainHeader.js       # Main header with conditional navigation links
│   │       MainHeader.module.css # CSS Module for styling MainHeader component
│   │       Navigation.js       # Navigation links with conditional rendering based on auth status
│   │       Navigation.module.css # CSS Module for styling Navigation component
│   │
│   └───UI
│       ├───Button
│       │       Button.js       # Reusable button component
│       │       Button.module.css # CSS Module for Button component styling
│       │
│       ├───Card
│       │       Card.js         # Reusable card component
│       │       Card.module.css # CSS Module for Card component styling
│       │
│       └───Input
│               Input.jsx       # Input component with validation handling
│               Input.module.css # CSS Module for Input component styling
│
└───store
        auth-context.js          # Context file to manage authentication state and actions
