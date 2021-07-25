import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props) {
	console.log(props[0])
	return <Card className="expenses">
	<ExpenseItem
			title={props[0].title}
			amount={props[0].amount}
			date={props[0].date}
	/>
	<ExpenseItem
			title={props[1].title}
			amount={props[1].amount}
			date={props[1].date}
	/>
	<ExpenseItem
			title={props[2].title}
			amount={props[2].amount}
			date={props[2].date}
	/>
	<ExpenseItem
			title={props[3].title}
			amount={props[3].amount}
			date={props[3].date}
	/></Card>
}

export default Expenses