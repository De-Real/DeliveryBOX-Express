import classes from "./ButtonControl.module.css";

const ButtonControl = (props) => {
  let identifier = props.identifier;
  let clss = `${classes.button} ${classes[identifier]}`;
  return (
    <button
      onClick={props.onClick}
      disabled={props.isDisabled}
      className={clss}
    >
      {props.children}
    </button>
  );
};

export default ButtonControl;
