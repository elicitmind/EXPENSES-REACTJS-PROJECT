import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData)
    // console.log(props)
    props.onAddExpense(expenseData);
  };

  const handleFormAppear = () => {
    const [isClicked, setIsClicked = useState(false)]
  }

  return (
    <div className="new-expense">
      <button onClick={handleFormAppear}>New Expense</button>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
