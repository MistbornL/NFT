import { CHANGE_LIKED, TOGGLE_SEARCH } from "./types";

export const changeLiked = (id, liked, numberOfLikes) => ({
  type: CHANGE_LIKED,
  payload: {
    id,
    liked,
    numberOfLikes,
  },
});
