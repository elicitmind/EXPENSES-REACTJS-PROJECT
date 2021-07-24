import Expenses from "./components/Expenses"
import expensesData from "./components/expensesData"

function App() {


    return (
        <div>
            <h2> NOW WE SHALL BEGIN</h2>
            <Expenses {...expensesData} />
        </div>
    );
}

export default App;
