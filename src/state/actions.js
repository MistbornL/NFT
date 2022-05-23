import { CHANGE_LIKED, LIKED } from "./types";

export const toggleLIke = (liked) => ({
  type: LIKED,
  payload: !liked,
});

export const changeLiked = (id, liked, numberOfLikes) => ({
  type: CHANGE_LIKED,
  payload: {
    id,
    liked,
    numberOfLikes,
  },
});