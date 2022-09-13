import EditModal from "../../Modals/EditModal";
import ButtonControl from "../../UI/Buttons/ButtonControl";
import DetailedItem from "./DetailedItem";
import classes from "./Item.module.css";
import ModalContext from "../../../store/modal-context";
import { useContext } from "react";

const Item = (props) => {
  const { item } = props;
  //   console.log(props);

  const modalContext = useContext(ModalContext);

  const onEdit = (item) => {
    //  console.log("item", item);
    return function () {
      modalContext.openModal(item);
    };
  };

  return (
    <>
      <li className={classes.item}>
        <div className={classes["item__date"]}>
          {item.dateCreation}
          {item.status === "delivered" ? <span>DELIVERED</span> : ""}
        </div>
        <div className={classes["item__locations"]}>
          <div className={classes["item__delivery"]}>
            <div className={classes["item__from"]}>{item.from}</div>
            <div className={classes["item__arrow"]}> </div>
            <div className={classes["item__to"]}>{item.to}</div>
          </div>
          <div className={classes["item__control"]}>
            <ButtonControl
              identifier="delete"
              onClick={props.onRemove.bind(null, item.id)}
            >
              Delete
            </ButtonControl>
            <ButtonControl
              identifier="edit"
              isDisabled={item.status === "delivered" ? true : false}
              onClick={onEdit(item)}
            >
              Edit
            </ButtonControl>
          </div>
        </div>

        <DetailedItem
          type={item.deliveryType}
          sendDate={item.sendDate}
          deliveryDate={item.deliveryDate}
          description={item.description}
          status={item.status}
        />
      </li>
    </>
  );
};

export default Item;
