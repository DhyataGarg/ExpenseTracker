import { useContext, useReducer } from "react";
import classes from "./LoginForm.module.css";
import Button from "./../UI/Button/Button";
import AuthContext from "./../../store/auth-context";

const formReducer = (state, action) => {
  if (action.type === "SIGNUP") {
    return {
      ...state,
      isSignUp: true,
    };
  } else if (action.type === "LOGIN") {
    return {
      ...state,
      isSignUp: false,
    };
  }

  if (action.type === "ENTER_EMAIL") {
    return {
      ...state,
      email: action.value,
      isEmailValid: action.value.includes("@"),
      isFormValid: action.value.includes("@") && state.isPasswordValid,
    };
  } else if (action.type === "EMAIL_BLUR") {
    return {
      ...state,
      email: state.email,
      isEmailValid: state.isEmailValid,
    };
  }

  if (action.type === "ENTER_PASSWORD") {
    return {
      ...state,
      password: action.value,
      isPasswordValid: action.value.trim().length > 7,
      isFormValid: state.isSignUp
        ? state.isEmailValid && action.value.trim().length > 7
        : action.value.trim().length > 7,
    };
  } else if (action.type === "PASSWORD_BLUR") {
    return {
      ...state,
      password: state.password,
      isPasswordValid: state.isPasswordValid,
    };
  }

  if (action.type === "SUBMIT_FORM") {
    return { ...state, isButtonClicked: true };
  }

  return {
    email: "",
    isEmailValid: false,
    password: "",
    isPasswordValid: false,
    isFormValid: false,
  };
};

const defaultFormState = {
  isSignUp: false,
  email: "",
  isEmailValid: false,
  password: "",
  isPasswordValid: false,
  isFormValid: false,
  isButtonClicked: false,
};

const LoginForm = (props) => {
  const [formState, dispatchForm] = useReducer(formReducer, defaultFormState);

  const authCtx = useContext(AuthContext);

  const emailChangeHandler = (event) => {
    dispatchForm({ type: "ENTER_EMAIL", value: event.target.value });
  };

  const validateEmailHadler = () => {
    dispatchForm({ type: "EMAIL_BLUR" });
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({ type: "ENTER_PASSWORD", value: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchForm({ type: "PASSWORD_BLUR" });
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    dispatchForm({ type: "SIGNUP" });
  };

  const loginHandler = (event) => {
    event.preventDefault();
    dispatchForm({ type: "LOGIN" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formState.isFormValid) {
      authCtx.onLogin(formState.email, formState.password);
    }
    dispatchForm({ type: "SUBMIT_FORM" });
  };

  return (
    <form onSubmit={submitHandler}>
      {formState.isSignUp && (
        <div
          className={`${classes.control} ${
            !formState.isEmailValid &&
            formState.isButtonClicked &&
            classes.invalid
          }`}
        >
          <label htmlFor="loginID">E-Mail</label>
          <input
            autoCapitalize="off"
            autoCorrect="off"
            name="email"
            type="email"
            id="loginID"
            onChange={emailChangeHandler}
            onBlur={validateEmailHadler}
          />
        </div>
      )}

      <div className={classes.control}>
        <label htmlFor="loginID">Username</label>
        <input
          autoCapitalize="off"
          autoCorrect="off"
          name="username"
          type="text"
          id="username"
        />
      </div>

      <div
        className={`${classes.control} ${
          !formState.isPasswordValid &&
          formState.isButtonClicked &&
          classes.invalid
        }`}
      >
        <label htmlFor="loginPass">Password</label>
        <input
          autoCapitalize="off"
          autoCorrect="off"
          name="password"
          type="password"
          id="loginPass"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </div>

      <div className={classes.control}>
        <Button type="submit">Login</Button>
      </div>

      <div className={classes.control}>
        {!formState.isSignUp ? (
          <p>
            Don't have an account <nbsp />
            <a href="/" onClick={signUpHandler}>
              Sign Up
            </a>
          </p>
        ) : (
          <p>
            Already have an account <nbsp />
            <a href="/" onClick={loginHandler}>
              Login
            </a>
          </p>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
