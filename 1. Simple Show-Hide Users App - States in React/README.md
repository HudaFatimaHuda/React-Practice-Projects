# Simple Show/Hide Users App

This is a simple React application that demonstrates how to toggle visibility of content. The app displays a list of dummy users with a button to show or hide the user list.

## Features

- **User List Display**: Renders a list of dummy users.
- **Show/Hide Toggle**: A button toggles between showing and hiding the user list.
- **Reusable User Component**: Each user is rendered as a list item using the `User` component.

## Project Structure

```plaintext
/src
│   App.js                      # Main app component that renders Users component
│   index.css                   # Global styles
│   index.js                    # Entry point for rendering the app
│   
└───components
    │   User.js                 # Individual user item component
    │   User.module.css         # CSS Module for styling the User component
    │   Users.js                # Users list component with toggle functionality
    │   Users.module.css        # CSS Module for styling the Users component
