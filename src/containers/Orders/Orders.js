import React from "react";
import axios from "../../axios-orders";
import Order from "../../components/Order/Order";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        console.log(fetchedOrders);
        this.setState({
          orders: fetchedOrders,
          loading: false,
        });
      })
      .catch((err) => this.setState({ loading: false }));
  }
  render() {
    let ordersUI = this.state.orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        totalPrice={+order.price}
      />
    ));
    return <div>{ordersUI}</div>;
  }
}

export default WithErrorHandler(Orders, axios);
