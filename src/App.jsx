import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import initialExpenses from "./components/Expenses/initialExpenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Chart from "./components/Chart/Chart"


function App() {
  const [expensesData, setExpensesData] = useState(initialExpenses)

  const addExpenseHandler = (expense) => {
   setExpensesData(prevState => {
     return [expense, ...prevState]}
     )
   console.log(expensesData)

  };


  return (
    <div>
      <h2> NOW WE SHALL BEGIN</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Chart />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
