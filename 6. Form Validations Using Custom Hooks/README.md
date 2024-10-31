# Form Validation with Custom Hooks

This React project demonstrates form validation using custom hooks, showcasing different levels of complexity in form inputs. There are three components, each with a different number of input fields, demonstrating single, double, and triple input validation setups. The project uses two custom hooks (`useInput` and `input-hook`) to handle validation, one using `useState` and the other using `useReducer`.

## Features

- **Custom Hook Validation**: Two hooks provide input validation: `useInput` (using `useState`) and `input-hook` (using `useReducer`).
- **Component Variety**: Three components demonstrate validation for forms with varying input counts.
- **Real-Time Feedback**: Each input field provides immediate validation feedback.
- **Dynamic Form Control**: The "Submit" button is only enabled when all fields in the form are valid.

## Project Structure

- **App Component**: Renders the forms based on different validation requirements.
- **SingleInput Component**: A simple form with a single input field.
- **BasicForm Component**: A form with two input fields, showing basic validation.
- **TripleInputForm Component**: A form with three inputs, each with validation.
- **useInput Hook**: Custom hook using `useState` for handling input validation.
- **input-hook Reducer Hook**: Custom hook using `useReducer` for managing input state and validation.

### File Structure

```plaintext
/src
├── components
│   ├── SingleInput.js          # Single input form component
│   ├── BasicForm.js            # Two-input form component with basic validation
│   ├── TripleInputForm.js      # Three-input form component with extended validation
├── hooks
│   ├── use-input.js            # Custom hook using useState for validation
│   └── input-hook.js           # Custom hook using useReducer for validation
└── App.js                      # Main application component
