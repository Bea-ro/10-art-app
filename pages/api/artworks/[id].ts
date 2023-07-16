import type { NextApiRequest, NextApiResponse } from 'next'
import { Artwork } from '../../../types/artwork'
import { Error } from '../../../types/error'
import { getArtworkById } from '../../../libs/artworks/artworks'

  export const handler = (
    req: NextApiRequest,
    res: NextApiResponse<Artwork | Error>
  ) => {
   
    const id = req.query._id as string
    const artwork = getArtworkById(id)
    
    if (!artwork) {
        res.status(404).json({message: 'Artwork not found'})      
        return
    }
  res.status(200).json(artwork)
  }


  