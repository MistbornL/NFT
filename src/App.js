import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Activity from "./pages/activity";
import { NFT } from "./pages/NFT";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/Activity" element={<Activity />} />
      <Route path="/Nft-card/:id" element={<NFT />} />
    </Routes>
  );
}

export default App;
