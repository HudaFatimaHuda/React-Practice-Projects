import "./ExpenseComponent.css"
import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

function ExpenseComponent(props){
  console.log("Expense Component is called!!");
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {setTitle("Changed"); console.log(title);}

  return(
    <Card className = "expense-item">
      <ExpenseDate date = {props.date} />
      <div className = "expense-item__description">
        <h2>{props.title}</h2>
        <div className = "expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseComponent;
