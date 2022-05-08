import React from "react";
import Logo from "../../ui/logo.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={Logo}></img>
        <div className="footer-left-bottom">
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-title">
          <h1>Marketplace</h1>
        </div>
        <div className="raw">
          <p>Explore</p>
          <p>Collectibles</p>
          <p>All NFTs</p>
          <p>Virtual World</p>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-title">
          <h1>Marketplace</h1>
        </div>
        <div className="raw">
          <p>Explore</p>
          <p>Collectibles</p>
          <p>All NFTs</p>
          <p>Virtual World</p>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-title">
          <h1>Marketplace</h1>
        </div>
        <div className="raw">
          <p>Explore</p>
          <p>Collectibles</p>
          <p>All NFTs</p>
          <p>Virtual World</p>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-title">
          <h1>Receive Latest Updates</h1>
          <input placeholder="Email"></input>
          <button></button>
        </div>
      </div>
    </div>
  );
};
