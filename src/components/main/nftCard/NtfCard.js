import React from "react";
import "./nftCard.css";
import { ReactComponent as Heart } from "../../../ui/heart.svg";
import nft from "../../../ui/nft.png";
import { useState } from "react";
import NFT_CARDS from "../../../dummyData/data";

const NtfCard = ({ item }) => {
  // const handleLIke = (id) => {
  //     console.log(id)
  //     let temparray = [...NFT_CARDS];
  //     temparray.map(item => {
  //         console.log(item)
  //         if (item.liked && item.id === id) {
  //             item.liked = false;
  //             item.numberOfLikes -= 1
  //         } else {
  //             item.liked = true;
  //             item.numberOfLikes += 1
  //         }

  //         return item;
  //     })

  //     NFT_CARDS = temparray;
  // }
  return (
    <div className="card-wrapper">
      <div className="card-cover">
        <img src={item.coverImg} alt="img" />
        <div
          style={{
            width: '60px',
            height: '25px',
            justifyContent: 'center',
            background: 'gba(50, 50, 50, 0.2)',
            backdropFilter: 'blur(15px)',
            borderRadius: '2px',
            gap: "10px",
            display: "flex",
            position: "absolute",
            marginTop: "-35px",
            marginLeft: "204px",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <Heart fill={item.liked ? "#ff4646" : "#FFFFFF"} />
          <span
            style={{
              color: "white",
              width: "15px",
              height: "18px",
              fontFamily: "Poppins",
            }}
          >
            {item.numberOfLikes}
          </span>
        </div>
      </div>

      <div className="card-body">
        <div className="card-body-top">
          <img src={item.userIcon} alt="icon" />
          <div className="body-top-left">
            <span>{item.title}</span>
            <p>{item.user}</p>
          </div>
        </div>
        <div className="card-body-mid">
          <div className="body-mid-top">
            <span>Current Price</span>
            <span>Available</span>
          </div>
          <div className="body-mid-bottom">
            <span>
              <img src={nft} alt="icon" />
              {item.price} {item.currency}
            </span>
            <span>{item.raiting}</span>
          </div>
        </div>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default NtfCard;
