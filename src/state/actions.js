import { RENAME } from "./types";

export const rename = (name) => ({
  type: RENAME,
  payload: name,
});
