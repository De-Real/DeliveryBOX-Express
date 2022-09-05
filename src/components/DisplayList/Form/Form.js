import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <select
      className={classes.selection}
      onChange={(e) => props.onSelect(e.target.value)}
      value={props.value}
    >
      <option value="all"> All </option>
      <option value="delivered"> Delivered </option>
      <option value="delivering"> Delivering </option>
      <option value="packaging"> Packaging </option>
    </select>
  );
};

export default Form;
