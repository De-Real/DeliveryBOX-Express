import classes from "./Cart.module.css";
import React from "react";

const Cart = (props) => {
  let cls = `${classes.cart}`;
  if (props.notation) {
    cls += ` ${classes[props.notation]}`;
  }
  return <div className={cls}>{props.children}</div>;
};

export default React.memo(Cart);