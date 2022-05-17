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
        <Menu />
        <div className="line" />
        <div style={{ display: "flex", marginTop: "79px", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              width: "448px",
              height: "445px",
            }}
          >
            <img style={{ width: "100%" }} src={singleCard.coverImg}></img>
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
                <img src={nft}></img>
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

        <div className="description">
          <h1>Description</h1>
          <div className="line-for-div"></div>
          <div className="scroll">
            <p>
              We can predict in advance the main argument of the critics - a
              housewife cannot be considered a real professional in each of the
              listed areas! But we do not argue with this, because the
              activities of a housewife include the skills of almost all of the
              listed professions. But that's not all - a housewife is a mother
              who tries her best to raise future worthy members of society, and
              does it on her own, without resorting to the help of surrogate
              mothers, whose services cost from 25 thousand dollars. Who, if not
              the state itself, should devote more time to them, protect their
              rights and, in the end, start playing for their hard work?! We
              urge you to respect and appreciate
            </p>
          </div>
        </div>

        <div className="description">
          <h1>Properties</h1>
          <div className="line-for-div"></div>
          <div className="hider"></div>
          <div className="div-wrapper">
            <div className="small-div">
              <p></p>
              <h1></h1>
              <p></p>
            </div>
            <div className="small-div">
              <p></p>
              <h1></h1>
              <p></p>
            </div>
            <div className="small-div">
              <p></p>
              <h1></h1>
              <p></p>
            </div>

            <div className="small-div">
              <p></p>
              <h1></h1>
              <p></p>
            </div>

            <div className="small-div">
              <p></p>
              <h1></h1>
              <p></p>
            </div>

            <div className="small-div">
              <p></p>
              <h1></h1>
              <p></p>
            </div>
            <div className="small-div">
              <p></p>
              <h1></h1>
              <p></p>
            </div>
            <div className="small-div">
              <p></p>
              <h1></h1>
              <p></p>
            </div>
            <div className="small-div">
              <p></p>
              <h1></h1>
              <p></p>
            </div>
          </div>
        </div>

        <div className="history"></div>

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
      </div>
      <Footer />
    </>
  );
};
