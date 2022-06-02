import React from "react";
import "./popup.scss";
import cross from "../../ui/cross.svg";
import { useDispatch } from "react-redux";
import { renderPopUp } from "../../state/actions";
export const Popup = () => {
  const dispatch = useDispatch();
  return (
    <div className="wallet">
      <img
        onClick={() => {
          dispatch(renderPopUp(false));
        }}
        src={cross}
        alt="cross"
      />
      <h1>Connect Your Wallet</h1>
      <p>
        Choose one of available wallet providers or create a new wallet. What is
        a wallet?
      </p>

      <div className="wallet-btn">
        <button>MetaMask</button>
        <button>WalletConnect</button>
        <button>Phantom</button>
        <button>Venly</button>
        <button>Show more options</button>
      </div>
    </div>
  );
};
