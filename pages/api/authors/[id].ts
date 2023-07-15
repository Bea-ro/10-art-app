import type { NextApiRequest, NextApiResponse } from 'next'
import { Author } from '../../../types/author'
import { Error } from '../../../types/error'

//en algún sitio debe faltar el fetch por id
  
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Author | Error>
  ) {
   
    const id = req.query._id as string
    const author = Author[id]
    if (!author) {
        res.status(404).json({error: 'Author not found'})      
        return
    }
  res.status(200).json(author)
  }

