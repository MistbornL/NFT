import NFT_CARDS from "../dummyData/data";
import { RENAME } from "./types";

const initialState = {
  name: "Lasha",
  data: NFT_CARDS,
};

const reducer = (state = { data: NFT_CARDS }, action) => {
  switch (action.type) {
    case RENAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default reducer;
