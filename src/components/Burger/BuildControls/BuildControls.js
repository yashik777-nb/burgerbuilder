import React from "react";
import Classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={Classes.BuildContols}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        removed={() => props.ingredientRemoved(control.type)}
        added={() => props.ingredientAdded(control.type)}
        disbaled={props.disabled[control.type]}
      />
    ))}
    <button
      className={Classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.purchaseHandler}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
