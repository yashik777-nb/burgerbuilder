import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Auxillary from "../../../hoc/Auxillary/Auxillary";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  let attachClasses = [classes.SideDrawer, classes.Close];
  if (props.open) attachClasses = [classes.SideDrawer, classes.Open];
  return (
    <Auxillary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachClasses.join(" ")}>
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
