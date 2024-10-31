import React, {useState} from "react";
import "./ExpensesList.css";
import ExpenseComponent from "./ExpenseComponent";

const ExpensesList = props => {

  const createExpense = (expense) => {return <ExpenseComponent title = {expense.title} amount={expense.amount} date ={expense.date} key={expense.id}/>}
    /*if no expense found */
  if (props.expenses.length ===0){
    return <h2 className = "expenses-list__fallback">No expense found.</h2>
  }
  /*if expense found */
  return(
    <ul className = "expenses-list">
      {props.expenses.map(createExpense)}
    </ul>
  )
}

export default ExpensesList;
