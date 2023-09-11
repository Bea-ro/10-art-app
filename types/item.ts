import { Artwork } from './artwork'

export type Item = {
    _id: string,
    title?: string,
    author?: string,
    year?: number,
    area: string | string[],
    // area: 'pinture' | 'sculpture' | 'arquitecture',
    movement: string,
   image?: string | undefined,
   name?: string,
    mainArtworks?: Artwork[],
}
