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
  <div className={Classes.BuildControls}>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        removed={() => props.ingredientRemoved(control.type)}
        added={() => props.ingredientAdded(control.type)}
        disbaled={props.disbaled[control.type]}
      />
    ))}
  </div>
);

export default buildControls;
