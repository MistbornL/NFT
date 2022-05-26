import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NFT_CARDS from "../dummyData/data";

const Search = () => {
  const reduxNft = useSelector((state) => state);
  const [searchVar, setSearchVar] = useState("");
  const params = useParams();
  const [singleCard, setSingleCard] = useState({ title: "" });

  useEffect(() => {
    const card = NFT_CARDS.filter((c) => c.title === params.title)[0];
    setSingleCard(card);
  }, [params.title]);

  const handleChange = (e) => {
    setSearchVar(e.target.value);
  };

  const handleKeyPress = (e) => {
    reduxNft.nftData.map((nft) => {
      console.log(nft.title);
      if (e.key === "Enter") {
        if (searchVar == nft.title) {
          <Link to={`/Nft-card/${nft.id}`}></Link>;
        } else {
          console.log(nft.title === searchVar);
        }
      }
    });
  };

  return (
    <div className="search">
      <input
        onKeyPress={handleKeyPress}
        type="search"
        placeholder="Search"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Search;
