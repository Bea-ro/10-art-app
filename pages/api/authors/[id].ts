import type { NextApiRequest, NextApiResponse } from "next";
import { getAuthorById } from "../../../libs/authors/authors";
import { Error } from "../../../types/error";

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Promise<void> | Error>
) => {
  const id = req.query.id as string;
  const author = getAuthorById(id)
    .then((response) => {
      if (!author) {
        res.status(404).json({ message: "Author not found" });
        return;
      }
      res.status(200).json(author);
    })
    .catch((err) => res.status(500).json({ message: err }));
};
