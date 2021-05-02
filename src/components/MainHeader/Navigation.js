import React, { useContext } from "react";
import AuthConext from "./../../store/auth-context";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthConext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <button onClick={ctx.onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
