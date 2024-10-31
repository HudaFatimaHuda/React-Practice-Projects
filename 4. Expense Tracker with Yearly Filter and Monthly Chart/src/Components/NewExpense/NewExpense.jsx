import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  /*states for handling the click of user*/
  const [isActive, setIsActive] = useState(true);
  const handleClick = event => {setIsActive(current => !current);};

  /*two way binding for handling the entered data from expense form*/
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
      <div className='new-expense'>
        {isActive ?
        (<button onClick = {handleClick}>Add New Expense</button>) :
        (<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onclickHandle = {handleClick}/>)
      }
      </div>
    );

}

export default NewExpense;
