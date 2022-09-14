import bargains from "../../assets/bargains.jpg";
import classes from "./Background.module.css";
const Background = (props) => {
  return (
    <div className="wrapper">
      <div className={classes["wrapper-background"]}>
        <img src={bargains} alt="bargains"></img>
      </div>
      <div> {props.children} </div>
    </div>
  );
};

export default Background;
