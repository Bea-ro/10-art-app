import { Author } from "../../types/author";

export const getAuthors = async (): Promise<Author[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/authors`
  ).then((res) => res.json());
  return response;
};

export const getAuthorById = async (id: string): Promise<Author> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/authors/${id}`
  ).then((res) => res.json());
  return response;
};
