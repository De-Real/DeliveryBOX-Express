import classes from "./Button.module.css";

const Button = (props) => {
  const cls = `${classes["button-30"]} ${props.isCancel ? classes.cancel : ""}`;
  return (
    <button
      disabled={!props.isValid}
      type={props.type || "submit"}
      className={cls}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
