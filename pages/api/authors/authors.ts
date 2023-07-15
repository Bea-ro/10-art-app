import type { NextApiRequest, NextApiResponse } from 'next'
import { Author } from '../../../types/author'
import { Error } from '../../../types/error'
import { getAuthors } from '../../../libs/authors/authors'

type Authors = {
  authors: Author[]
  }
  
export const handler = (
    req: NextApiRequest,
    res: NextApiResponse<Authors | Error>
  ) => {
    console.log(req.body)
    console.log(req.query)
    // res.status(200).json({ name: 'Bea' })

    return getAuthors() 
  .then((response) => res.status(200).json({authors: response}))
  .catch((err) => res.status(500).json({message: err}))
  }