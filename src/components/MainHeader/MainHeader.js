import React from "react";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <h1>Expense Tracker</h1>
    </header>
  );
};

export default MainHeader;
