import NFT_CARDS from "../dummyData/data";
import { LIKED } from "./types";

const initialState = {
  data: Boolean,
};
const reducer = (state = initialState, action) => {
  NFT_CARDS.map((nft) => {
    return (initialState.liked = nft);
  });
  switch (action.type) {
    case LIKED:
      return { ...state, liked: action.payload };
    default:
      return state;
  }
};

export default reducer;
