import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

const checkOutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes Well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button buttonType="Danger" click={props.onCheckoutCancel}>
        CANCEL
      </Button>
      <Button buttonType="Success" click={props.onCheckoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkOutSummary;
