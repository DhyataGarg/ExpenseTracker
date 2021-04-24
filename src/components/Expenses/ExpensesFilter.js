import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const currencyChangeHandler = (event) => {
    props.onChangeCurrency(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__container">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <div className="expenses-filter__control">
          <label>Currency</label>
          <select onChange={currencyChangeHandler}>
            <option value="$">$</option>
            <option value="Rs.">Rs.</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
