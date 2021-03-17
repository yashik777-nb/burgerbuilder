import React from "react";
import PropTypes from "prop-types";
import Classes from "./BurgerIngredient.module.css";

class BurgerIngredient extends React.Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={Classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={Classes.BreadTop}>
            <div className={Classes.Seed1}></div>
            <div className={Classes.Seed2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={Classes.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={Classes.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={Classes.Salad}></div>;
        break;
      case "bacon":
        ingredient = <div className={Classes.Bacon}></div>;
        break;
      default:
        break;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
