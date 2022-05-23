import React from "react";
import "./nftCard.css";
import { ReactComponent as Heart } from "../../../ui/heart.svg";
import nft from "../../../ui/nft.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLiked } from "../../../state/actions";

const NtfCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleLike = (id) => (e) => {
    dispatch(
      changeLiked(
        id,
        !item.liked,
        item.liked ? (item.numberOfLikes += 1) : (item.numberOfLikes -= 1)
      )
    );
  };

  return (
    <div className="card-wrapper">
      <div className="card-cover">
        <Link to={`/Nft-card/${item.id}`}>
          <img src={item.coverImg} alt="img" />
        </Link>
        <div
          style={{
            width: "60px",
            height: "25px",
            justifyContent: "center",
            background: "gba(50, 50, 50, 0.2)",
            backdropFilter: "blur(15px)",
            borderRadius: "2px",
            gap: "10px",
            display: "flex",
            position: "absolute",
            marginTop: "-35px",
            marginLeft: "204px",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <Heart
            style={{
              cursor: "pointer",
            }}
            onClick={handleLike(item.id)}
            fill={item.liked ? "#ff4646" : "#FFFFFF"}
          />
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
