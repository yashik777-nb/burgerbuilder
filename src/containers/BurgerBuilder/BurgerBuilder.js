import React from "react";
import axios from "../../axios-orders";

import Auxillary from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceRemoved = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceRemoved;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState(updatedIngredients) {
    const sum = Object.keys(updatedIngredients)
      .map((ingredientKey) => updatedIngredients[ingredientKey])
      .reduce((sum, val) => sum + val, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  purchaseHandler = (e) => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = (e) => {
    this.setState({ purchasing: false });
  };

  purchasseContinueHandler = (e) => {
    // alert("Continue");
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Yash",
    //     address: {
    //       street: "Test Street",
    //       zipCode: "123456",
    //       country: "Test Cuntry",
    //     },
    //     email: "test@test.com",
    //   },
    //   deliveryMethod: "fastest",
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then((res) => this.setState({ loading: false, purchasing: false }))
    //   .catch((err) => this.setState({ loading: false, purchasing: false }));
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((res) => this.setState({ ingredients: res.data }))
      .catch((err) => this.setState({ error: true }));
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let orderSummary = null;

    // While Ingredients are Loading
    let burger = this.state.error ? (
      <p style={{ textAlign: "center" }}>Ingredients cannot be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Auxillary>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            purchaseable={this.state.purchaseable}
            price={this.state.totalPrice}
            purchaseHandler={this.purchaseHandler}
          />
        </Auxillary>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinue={this.purchasseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Auxillary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxillary>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
