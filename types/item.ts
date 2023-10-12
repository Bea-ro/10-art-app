import { Artwork } from './artwork'

export type Item = {
    _id: string,
    title?: string,
    name?: string,
    author?: string,
    year?: number,
    area:  string | string[],
    movement: string,
   image?: string | undefined,
    mainArtworks?: Artwork | Artwork[],
}
