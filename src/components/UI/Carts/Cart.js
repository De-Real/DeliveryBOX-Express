import classes from "./Cart.module.css";

const Cart = (props) => {
	let cls = `${classes.cart}`;
	if(props.notation){
		cls += ` ${classes[props.notation]}`
	}
  return <div className={cls}>{props.children}</div>;
};

export default Cart;
