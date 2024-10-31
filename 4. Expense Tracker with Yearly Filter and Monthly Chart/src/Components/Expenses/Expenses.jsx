import React, {useState} from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';


function Expense(props){
  const [filteredYear,setFilteredYear] = useState("2021");
  const filterChangeHandler = selectedYear => {setFilteredYear(selectedYear)}

  const filteredExpenses = props.expenses.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear
  });

  return(
      <li>
        <Card className = "expenses">
          <ExpensesFilter onChangeFilter = {filterChangeHandler} selected = {filteredYear}/>
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList expenses = {filteredExpenses}/>
        </Card>
      </li>
  )
}

export default Expense;
