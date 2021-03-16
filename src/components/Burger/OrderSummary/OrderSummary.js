import React from "react";
import Auxillary from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientKey) => (
      <li key={ingredientKey}>
        <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>:{" "}
        {props.ingredients[ingredientKey]}
      </li>
    )
  );
  return (
    <Auxillary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout!</p>
      <Button buttonType="Danger" click={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button buttonType="Success" click={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Auxillary>
  );
};

export default OrderSummary;
