import { useState } from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const reduxNft = useSelector((state) => state);
  const [searchVar, setSearchVar] = useState("");

  const handleChange = (e) => {
    setSearchVar(e.target.value);
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
    }
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
