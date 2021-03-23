import React from "react";
import axios from "../../../axios-orders";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Yash",
        address: {
          street: "Test Street",
          zipCode: "123456",
          country: "Test Cuntry",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => this.setState({ loading: false }));
  };

  render() {
    let form = null;
    if (this.state.loading) {
      form = <Spinner />;
    } else {
      form = (
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={classes.Input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={classes.Input}
          />
          <input
            type="text"
            name="street"
            placeholder="Your Street"
            className={classes.Input}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Your Postal Code"
            className={classes.Input}
          />
          <Button buttonType="Success" click={this.orderHandler}>
            ORDER
          </Button>
        </form>
      );
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
