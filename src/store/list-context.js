import React from "react";

const ListContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
});

export default ListContext;
