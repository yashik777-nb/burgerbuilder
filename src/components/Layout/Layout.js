import React from "react";
import Auxillary from "../../hoc/Auxillary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import LayoutCSS from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Auxillary>
      <div>
        <Toolbar />
        <SideDrawer />
      </div>
      <main className={LayoutCSS.Content}>{props.children}</main>
    </Auxillary>
  );
};

export default Layout;
