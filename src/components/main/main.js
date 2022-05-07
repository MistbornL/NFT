import React from "react";
import "./index.css";
import Popular from "./Popular/Popular";

import NtfCard from "./nftCard/NtfCard";
import NFT_CARDS from "../../dummyData/data";
import { TopSellers } from "./top_sellers_section/TopSellers";
import Data from "../../dummyData/second_data";
import aboutImg from "../../ui/aboutImg.png";
import Explore from "../../dummyData/explore_data";
import { resolvePath } from "react-router-dom";

function Main({ item }) {
  return (
    <div className="wrapper">
      <Popular first_word="Most" second_word="Popular" />
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "73px",
        }}
      >
        {NFT_CARDS.map((item) => (
          <NtfCard item={item} key={item.id} />
        ))}
      </section>

      <Popular first_word="Top" second_word="Sellers" />

      <section className="middleel">
        {Data.map((item) => (
          <TopSellers item={item} key={item.id} />
        ))}
      </section>

      <div className="popular">
        <h1>
          About <span>Cube</span>
        </h1>
      </div>

      <div className="about" style={{ display: "flex" }}>
        <div className="img">
          <img src={aboutImg}></img>
        </div>

        <div className="desc">
          <p>
            At Cube, we're excited about a brand new type of digital good called
            a non-fungible token, or NFT. NFTs have exciting new properties:
            they’re unique, provably scarce, tradeable, and usable across
            multiple applications. Just like physical goods, you can do whatever
            you want with them! You could throw them in the trash, gift them to
            a friend across the world, or go sell them on an open marketplace.
            But unlike physical goods, they're armed with all the
            programmability of digital goods. A core part of our vision is that
            open protocols like Ethereum and interoperable standards like
            ERC-721 and ERC-1155 will enable vibrant new economies. We're
            building tools that allow consumers to trade their items freely,
            creators to launch new digital works, and developers to build rich,
            integrated marketplaces for their digital items. We’re proud to be
            the first and largest marketplace for NFTs.
          </p>
        </div>
      </div>
      <Popular first_word="Explore" second_word="Artworks" />

      <section
        style={{ display: "grid", gridTemplateColumns: "repeat(4,  1fr) " }}
      >
        {Explore.map((item) => (
          <NtfCard item={item} key={item.id} />
        ))}
      </section>
    </div>
  );
}

export default Main;
