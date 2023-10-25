import type { NextApiRequest, NextApiResponse } from "next";
import { getArtworks } from "../../../libs/artworks/artworks";
import { Artwork } from "../../../types/artwork";
import { Error } from "../../../types/error";

export type Artworks = {
  artworks: Artwork[];
};

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Artworks | Error>
) => {
  return getArtworks()
    .then((response) => res.status(200).json({ artworks: response }))
    .catch((err) => res.status(500).json({ message: err }));
};
