import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};

    for (let param of query.entries()) {
      //['salad', '1']
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutCancel={this.checkoutCancelHandler}
          onCheckoutContinue={this.checkoutContinueHandler}
        />
      </div>
    );
  }
}

export default Checkout;
