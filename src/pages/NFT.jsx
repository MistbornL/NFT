import React, { useState, useEffect } from "react";
import NFT_CARDS from "../dummyData/data";
import { useParams } from "react-router-dom";
import "../components/header/index.css";
import { Menu } from "../components/header/Menu";
import NtfCard from "../components/main/nftCard/NtfCard";
import Popular from "../components/main/Popular/Popular";
import "../styles/pages/nft.css";
import { Footer } from "../components/footer/Footer";
import nft from "../ui/nft.png";

import { DescriptionHistory } from "../components/nft/DescriptionHistory";
import { PriceHistory } from "../components/nft/PriceHistory";

export const NFT = () => {
  const params = useParams();
  console.log(params);

  const [singleCard, setSingleCard] = useState({ id: 0 });

  useEffect(() => {
    let card = NFT_CARDS.filter((c) => c.id == params.id)[0];
    setSingleCard(card);
  }, []);

  console.log(singleCard);

  return (
    <>
      <div className="wrap">
        <header>
          <Menu />
        </header>

        <main>
          <div className="line" />
          <div style={{ display: "flex", marginTop: "79px", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                width: "448px",
                height: "445px",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={singleCard.coverImg}
                alt="coverimg"
              ></img>
            </div>
            <div className="description-card">
              <div className="description-top">
                <h1>{singleCard.title}</h1>
                <div className="description-top-right">
                  <div>
                    <img></img>
                    <p>189k</p>
                  </div>
                  <div>
                    <img />
                    <p>{singleCard.numberOfLikes}</p>
                  </div>
                  <div>
                    <img />
                  </div>
                </div>
              </div>

              <div className="owner">
                <p>
                  Owner <span>Humanin</span>
                </p>
              </div>
              <div className="line-for-description-card"></div>

              <div className="bid-countdown">
                <p>Current Bid</p>
                <p>Countdown</p>
              </div>

              <div className="description-main">
                <h1
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img src={nft} alt="nft"></img>
                  {setSingleCard.price} {singleCard.currency}
                  <span> = $ 44440.62 </span>
                </h1>
                <h1>
                  32
                  <span>days</span>
                </h1>
              </div>

              <div
                className="description-footer"
                style={{ display: "flex", gap: "30px" }}
              >
                <button>Buy Now</button>
                <button>Place Bid</button>
              </div>
            </div>
          </div>
          <DescriptionHistory />

          <div
            style={{
              flexDirection: "column",
              gap: "70px",
              float: "right",
              display: "flex",
              justifyContent: "center",
              marginTop: "-6em",
              width: "682px",
              marginRight: "18em",
              borderRadius: "10px",
              top: 0,
            }}
          >
            <div className="listings">
              <h1>Listings</h1>
            </div>
            <div className="listings">
              <h1>Price History</h1>
            </div>
          </div>
          <PriceHistory />
          <Popular first_word="Similar" second_word="Projects" />
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "70px",
            }}
          >
            {NFT_CARDS.map((item) => (
              <NtfCard item={item} key={item.id} />
            ))}
          </section>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
