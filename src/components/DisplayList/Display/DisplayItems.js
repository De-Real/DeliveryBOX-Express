import { useContext } from "react";
import ListContext from "../../../store/list-context";
import Item from "../Item/Item";

const DisplayItems = (props) => {
  const ctx = useContext(ListContext);

  const list = ctx.items.map((item) => {
    return <Item key={item.id} item={item}></Item>;
  });

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default DisplayItems;
