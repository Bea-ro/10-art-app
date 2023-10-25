import { Artwork } from "../../types/artwork";

export const getArtworks = async (): Promise<Artwork[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/artworks`
  ).then((res) => res.json());
  return response;
};

export const getArtworkById = async (id: string): Promise<Artwork> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/artworks/${id}`
  ).then((res) => res.json());
  return response;
};
