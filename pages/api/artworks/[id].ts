import type { NextApiRequest, NextApiResponse } from "next";
import { getArtworkById } from "../../../libs/artworks/artworks";
import { Error } from "../../../types/error";

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Promise<void> | Error>
) => {
  const id = req.query._id as string;
  const artwork = getArtworkById(id)
    .then((response) => {
      if (!artwork) {
        res.status(404).json({ message: "Artwork not found" });
        return;
      }
      res.status(200).json(artwork);
    })
    .catch((err) => res.status(500).json({ message: err }));
};
