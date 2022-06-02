import React from "react";
import Logo from "../logo";
import Search from "../search";
import Nav from "../navigation/nav";
import { useDispatch } from "react-redux";
import { renderPopUp } from "../../state/actions";

export const Menu = () => {
  const dispatch = useDispatch();

  const handlePop = () => {
    dispatch(renderPopUp(true));
  };
  return (
    <div className="container">
      <div style={{ display: "contents", alignItems: "center" }}>
        <Logo />
        <Search />
      </div>

      <nav className="futa">
        <Nav />
        <div className="btn">
          <button onClick={handlePop} type="submit" value="Submit">
            Connect Wallet
          </button>
        </div>
      </nav>
    </div>
  );
};
