import React from "react";

const ModalContext = React.createContext({
  isOpened: false,
  item: {},
  openModal: () => {},
  closeModal: () => {},
});
export default ModalContext;
