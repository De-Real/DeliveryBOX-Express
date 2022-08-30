import bargains from "../../assets/bargains.jpg";
import classes from "./Background.module.css";
const Background = (props) => {
  return (
    <div className="wrapper">
      <div className={classes["wrapper-background"]}>
        <img className={classes.img1} src={bargains} alt="bargains"></img>
        <img className={classes.img2} src={bargains} alt="bargains"></img>
        <img className={classes.img3} src={bargains} alt="bargains"></img>
        <img className={classes.img4} src={bargains} alt="bargains"></img>
        <img className={classes.img5} src={bargains} alt="bargains"></img>
      </div>
      <div> {props.children} </div>
    </div>
  );
};

export default Background;
