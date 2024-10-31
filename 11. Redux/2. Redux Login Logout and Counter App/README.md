# Redux Login/Logout and Counter App

This React application uses Redux to manage authentication and counter state, demonstrating state management across components. Users can log in or out and interact with a counter that supports incrementing, decrementing, and toggling the counter display. This project builds on a similar app that used the Context API, now re-implemented with Redux for more scalable state management.

## Features

- **Login/Logout with Redux**: Manages user authentication status in a global Redux state.
- **Counter with Toggle Display**:
  - **Increment**: Increment counter by 1.
  - **Increase**: Increment counter by 5.
  - **Decrement**: Decrement counter by 5.
  - **Toggle Display**: Show or hide the counter display.
- **Redux Toolkit**: Utilizes `@reduxjs/toolkit` to create slices for modular state management.

## Project Structure

```plaintext
/src
│   App.js                      # Main app component rendering based on Redux state
│   index.css                   # Global styles
│   index.js                    # Entry point for rendering the app
│   
├───components
│       Auth.js                 # Authentication form for login
│       Auth.module.css         # CSS Module for Auth styling
│       Counter.js              # Counter component with increment, decrement, and toggle
│       Counter.module.css      # CSS Module for Counter styling
│       Header.js               # Header component displaying navigation
│       Header.module.css       # CSS Module for Header styling
│       UserProfile.js          # User profile component shown when logged in
│       UserProfile.module.css  # CSS Module for UserProfile styling
│
└───store
        index.js                # Redux store setup with multiple slices
        with-redux.js           # Basic Redux setup for reference
