import classes from "./DisplayList.module.css";

import { useState, useContext } from "react";
import Cart from "../../UI/Carts/Cart";
import Form from "../Form/Form";
import DisplayItems from "./DisplayItems";
import EditModal from "../../Modals/EditModal";
import ModalContext from "../../../store/modal-context";

const DisplayList = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const onSelectHandler = (value) => {
    setSelectedOption(value);
  };

  const modalContext = useContext(ModalContext);

  return (
    <>
      <Cart className={classes["items-block"]}>
        <div className={classes["items-wrapper"]}>
          <Form value={selectedOption} onSelect={onSelectHandler} />
          <DisplayItems filterParametr={selectedOption} />
        </div>
      </Cart>
      {modalContext.isOpened && <EditModal />}
    </>
  );
};

export default DisplayList;
