import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const reduxNft = useSelector((state) => state);
  const [searchVar, setSearchVar] = useState("");
  const [searchBool, setSearchBool] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchVar(e.target.value);
  };

  const handleKeyPress = (e) => {
    reduxNft.nftData.map((nft) => {
      if (e.key === "Enter") {
        if (nft.title.includes(searchVar.slice(0, 3))) {
          setSearchBool(true);
          navigate(`/NFT-card/${nft.title}`);
        } else {
          setSearchBool(false);
          // navigate(`/NFT-card'/${nft.title}`);
        }
      }
      return nft;
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
