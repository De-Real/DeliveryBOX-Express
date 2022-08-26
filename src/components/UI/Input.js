import clss from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={clss["input-block"]}>
      <label htmlFor={props.id}>{props.text}</label>
      <input
        type={props.type || "text"}
        //   className={classes}
        onChange={props.onChange}
        placeholder={props.placeholder || ""}
        id={props.id}
        value={props.value}
      ></input>
    </div>
  );
};

export default Input;
