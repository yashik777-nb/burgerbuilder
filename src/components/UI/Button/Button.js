import React from "react";
import classes from "./Button.module.css";

const Button = (props) => (
  <button
    className={[classes.Button, classes[props.buttonType]].join(" ")}
    onClick={props.click}
  >
    {props.children}
  </button>
);

export default Button;
