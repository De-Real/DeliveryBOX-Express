import { useState } from "react";
import classes from "./DetailedItem.module.css";

const DetailedItem = ({
  type,
  sendDate,
  deliveryDate,
  description,
  status,
}) => {
  const [isMore, setIsMore] = useState(false);

  const seeMoreDetails = () => {
    setIsMore((isMore) => !isMore);
  };

  return (
    <div className={classes["item__more"]}>
      {isMore && (
        <div className={classes["additional-info"]}>
          <div>
            <p>Delivery type</p>
            <p>{type}</p>
          </div>
          <div>
            <p>Sending date</p> <p>{sendDate}</p>
          </div>
          <div>
            <p>Delivery date</p> <p>{deliveryDate}</p>
          </div>
          <div>
            <p className={` ${classes.status} ${classes[status]}`}>Status</p>{" "}
            <p>{status}</p>
          </div>
          {description.length > 0 ? (
            <div className="description">Description: {description}</div>
          ) : (
            ""
          )}
        </div>
      )}
      <button onClick={seeMoreDetails} className={classes["item__more-btn"]}>
        See {isMore ? "less" : "more"} details
      </button>
    </div>
  );
};

export default DetailedItem;
