import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isAppearing, setIsAppearing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData)
    // console.log(props)
    props.onAddExpense(expenseData);
  };

  const handleFormAppearButton = () => {
    setIsAppearing(!isAppearing)
  }

  return (
    <div className="new-expense">
      {!isAppearing && <button onClick={handleFormAppearButton}>New Expense</button>}
      {isAppearing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={handleFormAppearButton} />}
    </div>
  );
}

export default NewExpense;
