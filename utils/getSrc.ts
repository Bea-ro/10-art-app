import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { randomArtwork } from "./randomArtwork";
import { Item } from "../types/item";

export const getSrc = (item: Item) => {
  let src: string | StaticImport = "";
  if (typeof item.image === "string" && item.image) {
    src = item.image;
  } else if (
    item.mainArtworks &&
    Array.isArray(item.mainArtworks) &&
    item.mainArtworks[0]
  ) {
    const randomArtworkImage = randomArtwork(item.mainArtworks)?.image;
    if (randomArtworkImage) {
      src = randomArtworkImage.toString();
    }
  }
  return src;
};
