# Expense Tracker with Yearly Filter and Monthly Chart

This React project is an expense tracker where users can add new expenses, filter expenses by year, and view a chart displaying the monthly spending distribution for the selected year. This setup allows users to track expenses visually and add new entries dynamically.

## Features

- **Add New Expenses**: Users can add a new expense by clicking the "Add New Expense" button, which opens a form for entering the expense details.
- **Filter by Year**: A dropdown filter allows users to display expenses for a specific year.
- **Monthly Expense Chart**: Displays a bar chart where each bar represents a month and fills relative to the monthly expenses’ share of the total for that year.
- **Expense List**: Shows a list of expenses for the selected year, displaying details like title, amount, and date.

## Project Structure

```plaintext
/src
│   App.css                        # Global styles for the app
│   App.js                          # Main app component that manages state and renders core components
│   index.css                      # Global CSS reset and base styles
│   index.js                       # Entry point for rendering the app
│
└───Components
    ├───Charts
    │       Chart.css              # Styles for Chart component
    │       Chart.jsx              # Chart component that displays expense distribution by month
    │       ChartBar.css           # Styles for individual chart bars
    │       ChartBar.jsx           # ChartBar component that represents individual monthly expense bars
    │
    ├───Expenses
    │       ExpenseComponent.css   # Styles for individual expense item component
    │       ExpenseComponent.jsx   # Component for rendering individual expense items
    │       ExpenseDate.css        # Styles for displaying expense dates
    │       ExpenseDate.jsx        # Component for rendering date associated with each expense
    │       Expenses.css           # Styles for the Expenses component
    │       Expenses.jsx           # Component for managing and displaying filtered expenses
    │       ExpensesChart.jsx      # Renders chart based on filtered expenses
    │       ExpensesFilter.css     # Styles for year filter dropdown
    │       ExpensesFilter.jsx     # Component for selecting the year to filter expenses
    │       ExpensesList.css       # Styles for list of expenses
    │       ExpensesList.jsx       # Component for rendering the list of filtered expenses
    │
    ├───NewExpense
    │       ExpenseForm.css        # Styles for expense input form
    │       ExpenseForm.jsx        # Form component for adding a new expense
    │       NewExpense.css         # Styles for the new expense wrapper component
    │       NewExpense.jsx         # Component that toggles form visibility and handles new expense submissions
    │
    └───UI
            Card.css               # Styles for Card UI component
            Card.jsx               # Reusable Card component for consistent styling
