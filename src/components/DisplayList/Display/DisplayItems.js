import { useContext } from "react";
import ListContext from "../../../store/list-context";
import Item from "../Item/Item";
import classes from "./DisplayItems.module.css";

const DisplayItems = (props) => {
  const ctx = useContext(ListContext);

  let contextItems = ctx.items;

  let filteredItems = ctx.items;
  console.log(props.filterParametr);
  if (props.filterParametr !== "all") {
    filteredItems = contextItems.filter((item) => {
      console.log(item.status, props.filterParametr);
      if (item.status !== props.filterParametr) return false;
      return true;
    });
  }
  console.log("FI", filteredItems);

  let items = filteredItems.map((item) => {
    return (
      <Item
        key={item.id}
        item={item}
        onRemove={ctx.removeItem}
        onEdit={ctx.editItem}
      ></Item>
    );
  });

  if (items.length === 0) {
    return <div className={classes.none}> No delivery at the list yet.</div>;
  }

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default DisplayItems;
