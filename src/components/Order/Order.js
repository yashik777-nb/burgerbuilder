import React from "react";

import classes from "./Order.module.css";

const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  let i = 0;
  const ingredientsUI = ingredients.map((ig) => {
    i++;
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={i}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsUI}</p>
      <p>
        Price:{" "}
        <strong>USD {Number.parseFloat(props.totalPrice.toFixed(2))}</strong>
      </p>
    </div>
  );
};

export default Order;
