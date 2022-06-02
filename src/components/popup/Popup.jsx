import React from "react";
import "./popup.scss";
import cross from "../../ui/cross.svg";
import dog from "../../ui/dog.png";
import velny from "../../ui/velny.png";
import wallet from "../../ui/wallet.png";
import phantom from "../../ui/phantom.png";
import { useDispatch } from "react-redux";
import { renderPopUp } from "../../state/actions";
export const Popup = () => {
  const dispatch = useDispatch();
  return (
    <div className="popup-wrapper">
      <div className="wallet">
        <img
          className="cross"
          onClick={() => {
            dispatch(renderPopUp(false));
          }}
          src={cross}
          alt="cross"
        />
        <h1>Connect Your Wallet</h1>
        <p>
          Choose one of available wallet providers or create a new wallet. What
          is a wallet?
        </p>

        <div className="wallet-btn">
          <button>
            <img src={dog} alt="dog" />
            MetaMask
          </button>
          <button>
            <img src={wallet} alt="dog" />
            WalletConnect
          </button>
          <button>
            <img src={phantom} alt="dog" />
            Phantom
          </button>
          <button>
            <img src={velny} alt="dog" />
            Venly
          </button>
          <button>Show more options</button>
        </div>
      </div>
    </div>
  );
};
