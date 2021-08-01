import React from "react"
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {

	if(props.items.length === 0) {
		return <p className="expenses-list__fallback">No expenses found</p>
	} else {

		return <ul className="expenses-list">{props.items.map((e) => (
			
			<ExpenseItem
				key={e.id}
				title={e.title}
				amount={e.amount}
				date={e.date}
			/>))}</ul>
	}
}

export default ExpensesList