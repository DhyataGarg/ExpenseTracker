import React, { useState } from "react";
import "./Expenses.css";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  let totalExpenses = 0;

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const wholeYearExpenses = (expense) => {
    if (expense.currency === "$") {
      totalExpenses += expense.amount * 75.09;
    } else {
      totalExpenses += expense.amount;
    }
  };

  for (const expense of filteredExpenses) {
    wholeYearExpenses(expense);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <h3 className="total-expenses">
          Total expense for {filteredYear} is $
          {(totalExpenses / 75.09).toFixed(2)} (Rs.
          {totalExpenses.toFixed(2)})
        </h3>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
