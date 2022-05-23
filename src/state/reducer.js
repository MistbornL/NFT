import NFT_CARDS from "../dummyData/data";
import { CHANGE_LIKED, LIKED } from "./types";

const initialState = [...NFT_CARDS];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LIKED:
      return state.map((nft) => {
        if (nft.id === action.payload.id) {
          return {
            ...nft,
            liked: action.payload.liked,
            numberOfLikes: action.payload.numberOfLikes,
          };
        }
        return nft;
      });
    default:
      return state;
  }
};

export default reducer;
