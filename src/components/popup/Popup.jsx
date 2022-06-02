import React from "react";
import "./popup.scss";
export const Popup = () => {
  return (
    <div className="wallet">
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
