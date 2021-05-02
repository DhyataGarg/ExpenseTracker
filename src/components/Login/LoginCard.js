import LoginForm from "./LoginForm";
import classes from "./LoginCard.module.css";

const LoginCard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default LoginCard;
