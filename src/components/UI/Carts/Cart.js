import classes from "./Cart.module.css";

const Cart = (props) => {
  const cls = `${classes.cart}`;
  return <div className={cls}>{props.children}</div>;
};

export default Cart;