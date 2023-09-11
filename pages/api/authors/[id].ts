import type { NextApiRequest, NextApiResponse } from 'next'
import { Author } from '../../../types/author'
import { Error } from '../../../types/error'
import { getAuthorById } from '../../../libs/authors/authors'

  
export const handler = (
    req: NextApiRequest,
    res: NextApiResponse<Author | Error>
  ) => {
    const id = req.query.id as string
    const author = getAuthorById(id)
    if (!author) {
        res.status(404).json({message: 'Author not found'})      
        return
    }
  res.status(200).json(author)
  }

