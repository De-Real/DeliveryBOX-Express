import { useReducer, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./AddDelivery.module.css";

const AddDelivery = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  function proccessValues(state, action) {
    if (action.type === "CLEAR_ALL") {
      setFormIsValid(false);
      return {
        id: Math.random(),
        from: "",
        to: "",
        deliveryType: "",
        date: "",
        description: "",
      };
    }
    let tempObj = { ...state };

    if (action.type === "description" && action.value.length > 360) {
      return tempObj;
    }

    if (action.type !== "description" && action.value.length > 60) {
      return tempObj;
    }

    tempObj = { ...tempObj, [action.type]: action.value };
    if (
      tempObj.from.length > 3 &&
      tempObj.to.length > 3 &&
      tempObj.deliveryType.length > 3 &&
      tempObj.date.length > 3
    ) {
      setFormIsValid(true);
    }
    console.log(tempObj);
    return tempObj;
  }

  const [state, dispatchState] = useReducer(proccessValues, {
    id: Math.random(),
    from: "",
    to: "",
    deliveryType: "",
    date: "",
    description: "",
  });

  const dispatchValues = (value, valueType) => {
    dispatchState({ type: valueType, value: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatchState({ type: "CLEAR_ALL" });
  };

  return (
    <div className={classes["add-form"]}>
      <form className={classes.form}>
        <Input
          placeholder="Send from city"
          id="from"
          onChange={(event) => dispatchValues(event.target.value, "from")}
          text="Delivery from"
          value={state.from}
        />
        {/* add icon of the arrow */}
        <Input
          placeholder="Send to city"
          id="to"
          onChange={(event) => dispatchValues(event.target.value, "to")}
          text="Delivery to"
          value={state.to}
        />
        <Input
          placeholder="e.g Gift, Book etc."
          id="delivery-type"
          onChange={(event) =>
            dispatchValues(event.target.value, "deliveryType")
          }
          text={"Type of the delivery"}
          value={state.deliveryType}
        />
        <Input
          type="date"
          id="date"
          text="Dispatch date"
          onChange={(event) => dispatchValues(event.target.value, "date")}
          value={state.date}
        />
        <div className={classes["input-description"]}>
          <label htmlFor="description">
            {`Comment. Symbols: ${state.description.length}/360`}{" "}
          </label>
          <textarea
            value={state.description}
            placeholder="Comments to the delivery (not necessary)"
            id="description"
            onChange={(event) =>
              dispatchValues(event.target.value, "description")
            }
          ></textarea>
        </div>
        {/* 1. add pulse button when form is correct  */}
        {/* 2.end button */}
        <Button isValid={formIsValid} onClick={onSubmitHandler}>
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default AddDelivery;
