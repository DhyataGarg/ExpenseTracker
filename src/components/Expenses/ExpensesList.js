import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          currency={expense.currency}
          date={expense.date}
          selectedCurrency={props.selectedCurrency}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
