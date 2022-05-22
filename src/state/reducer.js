import NFT_CARDS from "../dummyData/data";
import { LIKED, RENAME } from "./types";

const initialState = {
  name: "Lasha",
  data: NFT_CARDS,
  liked: Boolean,
};
const reducer = (state = initialState, action) => {
  NFT_CARDS.map((nft) => {
    return (initialState.liked = nft.liked);
  });
  switch (action.type) {
    case RENAME:
      return { ...state, name: action.payload };
    case LIKED:
      return { ...state, liked: action.payload };
    default:
      return state;
  }
};

export default reducer;
