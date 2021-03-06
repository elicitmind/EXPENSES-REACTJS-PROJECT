import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userEntry, setUserEntry] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // setUserEntry(({
    //   ...userEntry,
    //   enteredTitle: event.target.value,
    // }));
    // setUserEntry((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // setUserEntry({
    //   ...userEntry,
    //   enteredAmount: event.target.value,
    // });
    // setUserEntry((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // setUserEntry({
    //   ...userEntry,
    //   enteredDate: event.target.value,
    // });
    // setUserEntry((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
    setEnteredDate(event.target.value);
  };

  const checkAndLogHandler = (event) => {
    // console.log(userEntry);
    console.log(enteredTitle);
    console.log(enteredAmount);
    console.log(enteredDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expensesData);
    props.onSaveExpenseData(expensesData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onCancelForm()
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls" onClick={checkAndLogHandler}>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
            // required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
            // required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancelForm}>Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
