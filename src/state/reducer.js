import NFT_CARDS from "../dummyData/data";
import EXPLORE_DATA from "../dummyData/explore_data";

import { CHANGE_LIKED, CHANGE_LIKED_EXPLORE } from "./types";

const initialState = {
  data: [...NFT_CARDS],
  exploreData: [...EXPLORE_DATA],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LIKED:
      return state.data.map((nft) => {
        if (nft.id === action.payload.id) {
          return {
            ...nft,
            liked: action.payload.liked,
            numberOfLikes: action.payload.numberOfLikes,
          };
        }
        return nft;
      });
    case CHANGE_LIKED_EXPLORE:
      return state.exploreData.map((nft) => {
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
