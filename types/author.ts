import { Artwork } from "./artwork";

export type Author = {
  _id: string;
  name: string;
  movement: string;
  area: string | string[];
  mainArtworks: Artwork[];
};
