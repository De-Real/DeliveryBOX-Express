import { useReducer } from "react";
import ModalContext from "./modal-context";

let defaultValue = {
  isOpened: false,
};

const modalReducer = (state, action) => {
  if (action.type === "OPEN") {
    console.log("ctx-modal", action.item);
    return { isOpened: true, item: action.item };
  } else return { isOpened: false, item: [] };
};

const ModalProvider = (props) => {
  const [modalState, dispatchModalState] = useReducer(
    modalReducer,
    defaultValue
  );

  const openModalWindow = (item) => {
    dispatchModalState({ type: "OPEN", item: item });
  };
  const closeModalWindow = () => {
    dispatchModalState({ type: "CLOSE" });
  };
  const modalEditContext = {
    ...modalState,
    openModal: openModalWindow,
    closeModal: closeModalWindow,
  };

  return (
    <ModalContext.Provider value={modalEditContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
