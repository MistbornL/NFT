import { CHANGE_LIKED, RENDER_POPUP } from "./types";

export const changeLiked = (id, liked, numberOfLikes) => ({
  type: CHANGE_LIKED,
  payload: {
    id,
    liked,
    numberOfLikes,
  },
});

export const renderPopUp = (isPopUp) => ({
  type: RENDER_POPUP,
  payload: {
    isPopUp,
  },
});
