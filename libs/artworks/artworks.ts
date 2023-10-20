import { Artwork } from "../../types/artwork";

export const getArtworks = async (): Promise<Artwork[]> => {
  const response = await fetch(
    "https://complete-server-rtc.onrender.com/api/artworks"
  ).then((res) => res.json());
  return response;
};

export const getArtworkById = async (id: string): Promise<Artwork> => {
  const response = await fetch(
    `https://complete-server-rtc.onrender.com/api/artworks/${id}`
  ).then((res) => res.json());
  return response;
};
