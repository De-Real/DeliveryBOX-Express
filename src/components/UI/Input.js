import clss from "./Input.module.css";
import React from "react";

const Input = (props) => {
  console.log("I called" + props.text);
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

export default React.memo(Input);
