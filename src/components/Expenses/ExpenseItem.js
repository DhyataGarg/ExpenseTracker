import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">
            {props.selectedCurrency === "$"
              ? "$" + (props.amount / 75.09).toFixed(2)
              : "Rs." + props.amount.toFixed(2)}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
