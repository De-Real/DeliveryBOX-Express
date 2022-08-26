import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      disabled={!props.isValid}
      type={props.type || "submit"}
      className={`${classes["button-30"]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
