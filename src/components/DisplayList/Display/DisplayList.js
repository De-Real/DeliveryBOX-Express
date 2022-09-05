import classes from "./DisplayList.module.css";

import { useState } from "react";
import Cart from "../../UI/Carts/Cart";
import Form from "../Form/Form";
import DisplayItems from "./DisplayItems";

const DisplayList = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const onSelectHandler = (value) => {
    setSelectedOption(value);
  };

  return (
    <Cart className={classes["items-block"]}>
      <Form value={selectedOption} onSelect={onSelectHandler} />
      <DisplayItems />
    </Cart>
  );
};

export default DisplayList;
