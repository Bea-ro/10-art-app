import { Artwork } from '../../types/artwork'

export const getArtworks = async (): Promise<Artwork[]> => {
const response = await fetch('https://complete-server-rtc.onrender.com/api/artworks')
.then((res) => res.json())
return response
}