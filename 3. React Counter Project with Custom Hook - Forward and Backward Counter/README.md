# React Counter Project with Custom Hook

This basic React project demonstrates how to use custom hooks by implementing a forward and backward counter. Both counters use the same custom hook (`useCounter`), illustrating code reusability and separation of logic in React applications.

## Features

- **Forward Counter**: Increments every second.
- **Backward Counter**: Decrements every second.
- **Custom Hook (`useCounter`)**: Manages the counter logic and timing, which is shared between both counters.
- **Reusable Card Component**: Used to style and display the counters.

## Project Structure

```plaintext
/src
│   App.js                      # Main app component that renders forward and backward counters
│   index.css                   # Global styles
│   index.js                    # Entry point for rendering the app
│
├───components
│       BackwardCounter.js      # Backward counter component using the custom hook
│       Card.js                 # Reusable Card component for consistent styling
│       Card.module.css         # CSS Module for Card component styling
│       ForwardCounter.js       # Forward counter component using the custom hook
│       
└───use-hooks
        use-counter.jsx         # Custom hook for managing the counter logic
