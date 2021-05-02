import React, { useState, useContext } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import LoginCard from "./components/Login/LoginCard";
import AuthContext from "./store/auth-context";
import MainHeader from "./components/MainHeader/MainHeader";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    currency: "$",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    currency: "$",
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    currency: "$",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    currency: "$",
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const authCtx = useContext(AuthContext);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // let i = 0;

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const onDeleteHandler = (expenseID) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== expenseID
      );
      return updatedExpenses;
    });
  };

  // const onEditHandler = (
  //   expenseID,
  //   newTitle,
  //   newCurrency,
  //   newAmount,
  //   newDate
  // ) => {
  //   while (expenseID !== expenses[i].id) {
  //     i++;
  //   }
  //   expenses[i].title = newTitle;
  //   expenses[i].date = newDate;
  //   expenses[i].currency = newCurrency;
  //   expenses[i].amount = newAmount;
  // };
  return (
    <div>
      {!authCtx.isLoggedIn ? (
        <LoginCard />
      ) : (
        <React.Fragment>
          <MainHeader />
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} onDelete={onDeleteHandler} />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
