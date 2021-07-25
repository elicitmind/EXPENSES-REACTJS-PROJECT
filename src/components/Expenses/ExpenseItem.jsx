import React, {useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'


function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)
    const [amount, setAmount] = useState(props.amount)

    function clickHandler() {
        setTitle("ALISTER CROWLEY KURWA POTĘGA ZDECYDOWANIA")
        setAmount("PRZEZWYCIĘŻAM PRZESZKODY!!")
    }

    return (
        <Card className="expense-item">
        <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">€{amount}</div>
            </div>
            <button onClick={clickHandler}>++</button>
        </Card>
    );
}

export default ExpenseItem;
