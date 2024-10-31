# User Management Form Application

This React project features a simple form at the top where users can input their name and age. Upon clicking the "Add User" button, the new user is added to a list displayed below the form. Each entry includes delete functionality, allowing users to be removed from the list dynamically.

## Features

- **User Input Form**: A form that collects a user's name and age, with basic validation.
- **Error Handling**: Alerts for invalid input, such as missing name or age less than 1.
- **User List**: Displays a list of added users with name and age.
- **Delete Functionality**: Users can be removed from the list individually.

## Project Structure

- **App Component**: The main component that manages the state of the entire application.
- **Form Component**: Handles user input, validation, and data submission.
- **Users Component**: Displays a list of users and handles user deletion.
- **UI Components**: Card and Button components for a structured UI.
- **Alert Component**: Displays error messages in case of invalid inputs.

### File Structure

```plaintext
/src
├── Components
│   ├── FormComponent
│   │   ├── Form.js           # Form component for input handling and validation
│   │   └── Form.module.css    # Styling for the Form component
│   ├── Users
│   │   ├── Users.js           # Users component to render the user list
│   │   └── Users.module.css    # Styling for the Users component
│   ├── UI
│   │   ├── Card.js            # Card wrapper component
│   │   └── Button.js          # Button component for form submission
└── App.js                      # Main application component
