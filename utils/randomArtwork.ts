import { Artwork } from '../types/artwork';

export const randomArtwork = (artworks: Artwork[]) =>
  artworks[Math.floor(Math.random() * artworks.length)];
