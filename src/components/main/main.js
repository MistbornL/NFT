import React from "react";
import "./index.css";
import Popular from "./Popular/Popular";

import NtfCard from "./nftCard/NtfCard";
import NFT_CARDS from "../../dummyData/data";
import { TopSellers } from "./top_sellers_section/TopSellers";
import Data from "../../dummyData/second_data";

function Main({ item }) {
  return (
    <div className="wrapper">
      <Popular />
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

      <div className="popular">
        <h1>
          Top <span>Sellers</span>
        </h1>
        <button className="view_all">View All</button>
      </div>

      <section className="middleel">
        {Data.map((item) => (
          <TopSellers item={item} key={item.id} />
        ))}
      </section>

      <div className="popular">
        <h1>
          About <span>Cube</span>
        </h1>
        <button className="view_all">View All</button>
      </div>

      <div className="about">
        <div className="img">
          <img></img>
        </div>

        <div className="desc">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Main;
