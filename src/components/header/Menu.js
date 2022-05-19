import React from "react";
import Logo from "../logo";
import Search from "../search";
import Nav from "../navigation/nav";

export const Menu = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <Search />
      </div>

      <nav className="futa">
        <Nav />
        <div className="btn">
          <button type="submit" value="Submit">
            Connect Wallet
          </button>
        </div>
      </nav>
    </div>
  );
};
