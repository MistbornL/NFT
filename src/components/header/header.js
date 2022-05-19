import React from "react";

import "./index.css";
import "../../pages/index.css";
import Middle from "./middle_head/middle";
import { Menu } from "./Menu";

const Header = () => {
  return (
    <header style={{ width: "100%", height: "739px" }}>
      <Menu />
      <Middle />
    </header>
  );
};

export default Header;
