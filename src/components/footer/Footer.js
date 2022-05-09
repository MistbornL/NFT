import React from "react";
import Logo from "../../ui/logo.svg";
import Elipse from "../../ui/elipse.png";
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
          <div className='footer-logo'>
            <img src={Elipse}></img>
            <img src={Elipse}></img>
            <img src={Elipse}></img>
            <img src={Elipse}></img>
          </div>
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
          <input placeholder="Email Address"></input>
          <button>Subscribe</button>
        </div>
      </div>
      <div className='linee'>
        <div style={{ alignItems: 'center', textAlign: 'center', padding: '20px' }}><p style={{ display: 'contents', alignItems: 'center' }}>Copyright © 2022 CUBE | NFT Marketplace Template Kit. Designed by
          Irakli Tchekhani</p></div>
      </div>
    </div>
  );
};
