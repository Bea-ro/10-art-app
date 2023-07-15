import type { NextApiRequest, NextApiResponse } from 'next'
import { Artwork } from '../../../types/artwork'
import { Error } from '../../../types/error'

//en algún sitio debe faltar el fetch por id
  
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Artwork | Error>
  ) {
   
    const id = req.query._id as string
    const artwork = Artwork[id]
    if (!artwork) {
        res.status(404).json({error: 'Artwork not found'})      
        return
    }
  res.status(200).json(artwork)
  }


  