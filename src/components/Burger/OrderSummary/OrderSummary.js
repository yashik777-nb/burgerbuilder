import React from "react";
import Auxillary from "../../../hoc/Auxillary/Auxillary";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  render() {
    let ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingredientKey) => (
        <li key={ingredientKey}>
          <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>:{" "}
          {this.props.ingredients[ingredientKey]}
        </li>
      )
    );
    return (
      <Auxillary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout!</p>
        <Button buttonType="Danger" click={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button buttonType="Success" click={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Auxillary>
    );
  }
}

export default OrderSummary;
