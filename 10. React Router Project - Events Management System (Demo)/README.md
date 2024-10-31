# React Router Project - Events Management System (Demo)

This React project demonstrates routing techniques using `react-router-dom`, providing a foundation for navigating between various pages in a React application. The demo is structured around an events management system, showcasing how to set up routes for viewing event listings, details, and forms for potential event creation and editing. The backend for this project is implemented in Node.js.

## Features

- **Event Listing Page**: Displays a list of events with navigation to each event’s details.
- **Event Details Page**: Allows users to view more detailed information about a specific event.
- **New Event Page**: A form page intended for creating a new event (for demo purposes).
- **Edit Event Page**: A page for editing existing event information (for demo purposes).
- **React Router**: Demonstrates nested and dynamic routing for structured navigation across different event pages.

## Project Structure

```plaintext
/backend                             # Backend folder with Node.js server files
│   app.js                            # Node.js backend server file
│   package.json                      # Backend dependencies and scripts
│
/src
│   App.jsx                           # Main application component with route setup
│   index.css                         # Global CSS
│   main.jsx                          # Entry point for rendering the app
│
├───assets                            # Project assets (images, logos)
│       events-logo.png
│       meetup.jpg
│
├───components
│   │   Header.jsx                    # Navigation header for the app
│   │   ImagePicker.jsx               # Image selection component
│   │
│   ├───Events
│   │       EditEvent.jsx             # Component for editing event details (demo only)
│   │       EventDetails.jsx          # Component for viewing event details
│   │       EventForm.jsx             # Form component for event creation/editing (demo only)
│   │       EventItem.jsx             # Renders individual event items in the list
│   │       Events.jsx                # Main component to display a list of events
│   │       EventsIntroSection.jsx    # Introductory section for events
│   │       FindEventSection.jsx      # Search functionality for events (demo only)
│   │       NewEvent.jsx              # Component for adding a new event (demo only)
│   │       NewEventsSection.jsx      # Section for newly added events (demo only)
│   │
│   └───UI
│           ErrorBlock.jsx            # Displays error messages
│           LoadingIndicator.jsx      # Spinner for loading states
│           Modal.jsx                 # Modal component for confirmations
│
└───utils
        http.js                       # Utility functions for HTTP requests

## Installation and Setup

To set up the project, first clone the repository and navigate to the project directory. Install the frontend dependencies with `npm install`, then start the development server using `npm run dev`. For the backend, open a new terminal, navigate to the `backend` folder, install backend dependencies with `npm install`, and start the backend server with `node app.js`. The app will now be accessible at `localhost:3000`, with the backend running separately to handle API requests.
