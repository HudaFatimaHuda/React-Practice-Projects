# Styling in React - Course Goal Tracker

This React project demonstrates different styling techniques within a React application, focusing on modular, reusable, and conditional styling. The main feature is a course goal tracker where users can add new goals, view a list of goals, and delete individual goals by clicking on them.

## Features

- **Add New Goals**: Users can input a new course goal through a form at the top of the page.
- **Display Goal List**: A styled list displays each added goal below the form.
- **Delete Goals**: Goals are deleted from the list when clicked, allowing users to manage their course goals dynamically.
- **Dynamic Input Styling**: The input field is highlighted when active and shows a red background if invalid (empty on submission).

## Project Structure

```plaintext
/src
│   App.css                        # Global styles for the app
│   App.js                         # Main app component that renders the form and goal list
│   index.css                      # Global CSS reset and base styles
│   index.js                       # Entry point for rendering the app
│
└───components
    ├───CourseGoals
    │   ├───CourseGoalItem
    │   │       CourseGoalItem.css # Styles for individual goal items
    │   │       CourseGoalItem.js  # Component for rendering individual course goals with deletion functionality
    │   │
    │   ├───CourseGoalList
    │   │       CourseGoalList.css # Styles for the list of course goals
    │   │       CourseGoalList.js  # Component for rendering the list of course goals
    │   │
    │   └───CourseInput
    │           CourseInput.jsx    # Form component for adding new goals
    │           CourseInput.module.css # CSS Module for conditional styling of input field
    │
    └───UI
        └───Button
                Button.js          # Reusable button component
                Button.module.css   # CSS Module for Button component styling
