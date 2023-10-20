import type { NextApiRequest, NextApiResponse } from "next";
import { getAuthors } from "../../../libs/authors/authors";
import { Author } from "../../../types/author";
import { Error } from "../../../types/error";

type Authors = {
  authors: Author[];
};

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Authors | Error>
) => {
  return getAuthors()
    .then((response) => res.status(200).json({ authors: response }))
    .catch((err) => res.status(500).json({ message: err }));
};
