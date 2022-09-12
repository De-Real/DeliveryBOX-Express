import { useContext, useReducer, useState } from "react";
import ListContext from "../../store/list-context";
import ReactDOM from "react-dom";
import Button from "../UI/Buttons/Button";
import Cart from "../UI/Carts/Cart";
import Input from "../UI/Input";
import classes from "./EditModal.module.css";
import ModalContext from "../../store/modal-context";

const EditModal = (props) => {
  const modalContext = useContext(ModalContext);

  const [formIsValid, setFormIsValid] = useState(true);

  function proccessValues(state, action) {
    if (action.type === "CLEAR_ALL") {
      setFormIsValid(false);
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
      from.length > 3 &&
      to.length > 3 &&
      deliveryType.length > 3 &&
      sendDate.length > 3
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
    return tempObj;
  }

  console.log("modal", modalContext.item);

  const {
    dateCreation,
    deliveryDate,
    id,
    status,
    sendDate,
    ...restProperties
  } = modalContext.item;
  const [state, dispatchState] = useReducer(proccessValues, {
    ...restProperties,
    sendDate: sendDate.split(".").reverse().join("-"),
  });

  const formatDate = (date) => {
    const sendDate = date.split("-").reverse().join(".");
    let deliveryDate = new Date();
    deliveryDate.setDate(
      new Date(date).getDate() + ((Math.random() * 100) % 3)
    );

    console.log(deliveryDate);
    console.log(
      "delDate",
      new Date(new Date(deliveryDate) - new Date(date)).getDay()
    );
    let status = "packaging";
    const day = new Date(new Date(deliveryDate) - new Date(date)).getDay();
    if (day === 0) {
      status = "delivered";
    } else if (day === 1) {
      status = "delivering";
    }

    return {
      deliveryDate: deliveryDate.toLocaleString().split(",")[0],
      sendDate: sendDate,
      status: status,
    };
  };

  const dispatchValues = (value, valueType) => {
    dispatchState({ type: valueType, value: value });
  };

  const listContext = useContext(ListContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatchState({ type: "CLEAR_ALL" });
    //  let dateObj = formatDate(state.sendDate);

    listContext.addItem({
      ...state,
      // ...dateObj,
      // dateCreation: new Date().toLocaleString(),
    });
  };

  const onCancelHandler = () => {
    modalContext.closeModal();
  };

  if (!modalContext.isOpened) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={classes["wrapper-modal"]}>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <Cart>
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
              <Button isValid={true} isCancel={true} onClick={onCancelHandler}>
                Cancel
              </Button>
            </div>
          </form>
        </Cart>
      </div>
    </div>,
    document.getElementById("edit-modal")
  );
};

export default EditModal;
