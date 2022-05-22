import { LIKED, RENAME } from "./types";

export const rename = (name) => ({
  type: RENAME,
  payload: name,
});

export const toggleLIke = (liked) => ({
  type: LIKED,
  payload: liked,
});
