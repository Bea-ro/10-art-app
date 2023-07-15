 import { Artwork } from './artwork'

 export type Author = {
    _id: string,
    name: string,
    movement: string,
    area: string[],
    mainArtworks: Artwork[],
}