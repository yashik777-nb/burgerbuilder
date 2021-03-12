import React from "react";

import Auxillary from "../../hoc/Auxillary";
import LayoutCSS from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Auxillary className={LayoutCSS.Content}>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main>{props.children}</main>
    </Auxillary>
  );
};

export default Layout;
