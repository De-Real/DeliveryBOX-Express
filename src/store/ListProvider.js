import { useReducer } from "react";
import ListContext from "./list-context";

const defaultState = {
  items: [],
};

const listReducer = (state, action) => {
  if (action.type === "ADD") {
    return { items: state.items.unshift(action.value) };
  }
};

const ListProvider = (props) => {
  const [listState, dispatchListAction] = useReducer(listReducer, defaultState);

  const addItemHandler = (item) => {
    dispatchListAction({ type: "ADD", value: item });
  };

  const removeItemHandler = () => {};

  const deleteItemHandler = () => {};

  const deliveryContext = {
    items: listState.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    deleteItem: deleteItemHandler,
  };

  return (
    <ListContext.Provider value={deliveryContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
