import { useReducer } from "react";
import ListContext from "./list-context";

const defaultState = {
  items: [
    {
      dateCreation: "05.09.2022, 14:21:38",
      deliveryDate: "11.12.2026",
      deliveryType: "stuff",
      description: "Be careful while unpackaging. Don't drop! ",
      from: "Kyiv",
      id: 0.7759079782974504,
      sendDate: "10.09.2022",
      status: "delivering",
      to: "Ternopil",
    },
    {
      dateCreation: "06.09.2022, 22:22:22",
      deliveryDate: "07.09.2022",
      deliveryType: "vaze",
      description: "Express delivery. Don't drop! ",
      from: "Kyiv",
      id: 0.77523939782974503,
      sendDate: "06.09.2022",
      status: "delivered",
      to: "Gaicin",
    },
    {
      dateCreation: "06.09.2022, 09:24:01",
      deliveryDate: "09.09.2025",
      deliveryType: "laptop",
      description: "Don't drop! ",
      from: "Kharkiv",
      id: 0.73333239782974503,
      sendDate: "07.09.2022",
      status: "delivering",
      to: "Rivne",
    },
  ],
};

const listReducer = (state, action) => {
  if (action.type === "ADD") {
    return { items: [action.value, ...state.items] };
  }
  if (action.type === "REMOVE") {
    return {
      items: state.items.filter((item) => {
        console.log("I done");
        if (item.id === action.id) return false;
        return true;
      }),
    };
  }
};

const ListProvider = (props) => {
  const [listState, dispatchListAction] = useReducer(listReducer, defaultState);

  const addItemHandler = (item) => {
    console.log("item", item);
    dispatchListAction({ type: "ADD", value: item });
  };

  const removeItemHandler = (id) => {
    dispatchListAction({ type: "REMOVE", id: id });
  };

  const editItemHandler = (id) => {
    dispatchListAction({ type: "EDIT", id: id });
  };

  const deliveryContext = {
    items: listState.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    editItem: editItemHandler,
  };

  return (
    <ListContext.Provider value={deliveryContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
