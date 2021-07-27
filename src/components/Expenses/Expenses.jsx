import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");


  const dropdownChangeHandler = (newFilter) => {
    setFilteredYear(newFilter);
    console.log(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onDropdownChange={dropdownChangeHandler}
        value={filteredYear}
      />
      {console.log(props.items)}
      {props.items.map((e) => (
        <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
      ))}
    </Card>
  );
}

export default Expenses;
