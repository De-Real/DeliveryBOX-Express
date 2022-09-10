import { useContext, useReducer, useState } from "react";
import ListContext from "../../store/list-context";
import AddDelivery from "../AddForm/AddDelivery";
import Button from "../UI/Buttons/Button";
import Cart from "../UI/Carts/Cart";
import Input from "../UI/Input";
import classes from "./EditModal.module.css";

const EditModal = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);

  function proccessValues(state, action) {
    if (action.type === "CLEAR_ALL") {
      setFormIsValid(false);
      // setIsOpen((curValue) => !curValue);
      return {
        id: Math.random(),
        from: "",
        to: "",
        deliveryType: "",
        sendDate: "",
        dateCreation: "",
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

    let { from, to, deliveryType, sendDate } = tempObj;
    if (
      tempObj.from.length > 3 &&
      tempObj.to.length > 3 &&
      tempObj.deliveryType.length > 3 &&
      tempObj.sendDate.length > 3
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
    return tempObj;
  }

  const [state, dispatchState] = useReducer(proccessValues, {
    id: Math.random(),
    from: "Kyiv",
    to: "Bila Tserkva",
    deliveryType: "book",
    sendDate: "2022-08-10",
    description: "553242",
    status: "packaging",
  });

  const dispatchValues = (value, valueType) => {
    dispatchState({ type: valueType, value: value });
  };

  //   const formatDate = (date) => {
  //     const sendDate = date.split("-").reverse().join(".");
  //     let deliveryDate = new Date();
  //     deliveryDate.setDate(
  //       new Date(date).getDate() + ((Math.random() * 100) % 3)
  //     );

  //     console.log(deliveryDate);
  //     console.log(
  //       "delDate",
  //       new Date(new Date(deliveryDate) - new Date(date)).getDay()
  //     );
  //     let status = "packaging";
  //     const day = new Date(new Date(deliveryDate) - new Date(date)).getDay();
  //     if (day === 0) {
  //       status = "delivered";
  //     } else if (day === 1) {
  //       status = "delivering";
  //     }

  //     return {
  //       deliveryDate: deliveryDate.toLocaleString().split(",")[0],
  //       sendDate: sendDate,
  //       status: status,
  //     };
  //   };

  const ctx = useContext(ListContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatchState({ type: "CLEAR_ALL" });
    //  let dateObj = formatDate(state.sendDate);

    ctx.addItem({
      ...state,
      // ...dateObj,
      // dateCreation: new Date().toLocaleString(),
    });
  };

  const onAddHandler = () => {
    console.log("work");
    // setIsOpen((curValue) => !curValue);
  };

  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <Cart >
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
              onChange={(event) =>
                dispatchValues(event.target.value, "sendDate")
              }
              value={state.sendDate}
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
            <div>
              <Button isValid={formIsValid} onClick={onSubmitHandler}>
                Confirm
              </Button>
              <Button isValid={true} isCancel={true} onClick={onAddHandler}>
                Close
              </Button>
            </div>
          </form>
        </Cart>
      </div>
    </>
  );
};

export default EditModal;
