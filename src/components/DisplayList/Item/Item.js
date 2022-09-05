import ButtonControl from "../../UI/Buttons/ButtonControl";
import DetailedItem from "./DetailedItem";
import classes from "./Item.module.css";

const Item = (props) => {
  const item = props.item;
  console.log(item);
  return (
    <li className={classes.item}>
      <div className={classes["item__date"]}>
        {item.dateCreation}
        {item.status === "delivered" ? <span>DELIVERED</span> : ""}
      </div>
      <div className={classes["item__locations"]}>
        <div className={classes["item__delivery"]}>
          <div className={classes["item__from"]}>{item.from}</div>
          <div className={classes["item__arrow"]}> </div>
          <div className={classes["item__to"]}>{item.to}</div>
        </div>
        <div className={classes["item__control"]}>
          <ButtonControl identifier="delete"> Delete </ButtonControl>
          <ButtonControl identifier="edit"> Edit </ButtonControl>
        </div>
      </div>
      <DetailedItem
        type={item.deliveryType}
        sendDate={item.sendDate}
        deliveryDate={item.deliveryDate}
        description={item.description}
        status={item.status}
      />
    </li>
  );
};

export default Item;
