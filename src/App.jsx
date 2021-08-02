import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import initialExpenses from "./components/Expenses/initialExpenses";
import NewExpense from "./components/NewExpense/NewExpense";



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
      <h2> KR34TOR DAWID ALISTEREK ZD</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
