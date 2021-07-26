import React from "react";
import Expenses from "./components/Expenses/Expenses";
import expensesData from "./components/Expenses/expensesData";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const addExpenseHandler = (expense) => {
    expensesData.push(expense);
    console.log(expensesData);
  };

  return (
    <div>
      <h2> NOW WE SHALL BEGIN</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses {...expensesData} />
    </div>
  );
}

export default App;
