import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Auxillary from "../../../hoc/Auxillary";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  return (
    <Auxillary>
      <Backdrop show={true} />
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxillary>
  );
};

export default SideDrawer;
