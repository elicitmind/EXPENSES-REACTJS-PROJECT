import React from 'react'
import Expenses from "./components/Expenses/Expenses"
import expensesData from "./components/Expenses/expensesData"

function App() {


    return (
        <div>
            <h2> NOW WE SHALL BEGIN</h2>
            <Expenses {...expensesData} />
        </div>
    );
}

export default App;
