import { Artwork } from "../types/artwork";
import { Author } from "../types/author";

export const getAuthorId = (authors: Author[], artwork: Artwork) => {
    const authorFound = authors.find((author) => author.name === artwork.author)
    const authorId = authorFound?._id
    return authorId
}