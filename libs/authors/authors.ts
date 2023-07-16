import { Author } from '../../types/author'

export const getAuthors = async (): Promise<Author[]> => {
const response = await fetch('https://complete-server-rtc.onrender.com/api/authors')
.then((res) => res.json())
return response
}

export const getAuthorById = async (id): Promise<Author> => {
    const response = await fetch(`https://complete-server-rtc.onrender.com/api/authors/${id}`)
    .then((res) => res.json())
    return response
    }