import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredExpenses = props.items.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p> No expenses found.</p>
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((e) => (
  //     <ExpenseItem
  //       key={e.id}
  //       title={e.title}
  //       amount={e.amount}
  //       date={e.date}
  //     />
  //   ))
  // }

  

  const dropdownChangeHandler = (newFilter) => {
    setFilteredYear(newFilter);
  };




  return (
    <Card className="expenses">
      <ExpensesFilter
        onDropdownChange={dropdownChangeHandler}
        value={filteredYear}
      />
      {console.log(filteredExpenses)}
      {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
      {/* {expensesContent} */}
    </Card>)
  }

export default Expenses;
