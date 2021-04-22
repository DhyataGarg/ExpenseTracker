import React from "react";
import Chart from "./../Chart/Chart";
const ExpensesChart = (props) => {
  let INRamount = 0;
  const chartDatapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    if (expense.currency === "$") {
      INRamount = expense.amount * 75.09;
    } else {
      INRamount = expense.amount;
    }
    const expenseMonth = expense.date.getMonth();
    chartDatapoints[expenseMonth].value += INRamount;
  }

  return <Chart dataPoints={chartDatapoints} />;
};

export default ExpensesChart;
