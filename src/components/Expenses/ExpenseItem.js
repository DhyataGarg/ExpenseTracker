import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./../UI/Card";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExpenseItem = (props) => {
  const deleteExpenseHandler = () => {
    props.onDelete(props.id);
  };

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
          <FontAwesomeIcon
            icon={faTrash}
            className="fa-trash"
            onClick={deleteExpenseHandler}
          />
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
