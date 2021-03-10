import React from "react";

import Auxillary from "../../hoc/Auxillary";

import LayoutCSS from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Auxillary>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={LayoutCSS.Content}>{props.children}</main>
    </Auxillary>
  );
};

export default Layout;
