import { Item } from '../types/item';
import { Artwork } from '../types/artwork'
import { Author } from '../types/author'
import { addArtworksToAuthor } from './addArtworksToAuthor';


export const addFetch = async (itemType: string, token: string, values: Item, setMessage: (arg0: string) => void,
artworks: Artwork[], setArtworks:(arg0: Artwork[]) => void, authors: Author[], setAuthors:(arg0: Author[]) => void
) => {
  await fetch(`https://complete-server-rtc.onrender.com/api/${itemType}`
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (typeof(data) === 'string') {
          setMessage(data);
        } else if (typeof(data) === 'object' && data.message) {
          setMessage(data.message);
        } else {
      if (itemType === 'artworks') {
        uploadImage(itemType, data._id, token, values);
        setArtworks([...artworks, data])
        setMessage(`${itemType.slice(0,-1)} saved.`);
      const existingAuthor = authors.find((author) => author.name === values.author) 
      existingAuthor && addArtworksToAuthor(token, data._id, existingAuthor._id, setMessage)
      } else {
        setAuthors([...authors, data])
       setMessage('artist saved.');
       const existingArtworks = artworks.filter((artwork) => artwork.author === values.name) 
       const existingArtworksIds = existingArtworks.map((existingArtwork) => existingArtwork._id)
       addArtworksToAuthor(token, existingArtworksIds, data._id, setMessage) 
       }
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
        setMessage(error.message);
      }); 
    }
  

  const uploadImage = async (itemType: string, id: string, token: string, values: Item) => {
    const formData = new FormData();
    formData.append('image', values.image[0]);
    await fetch(`https://complete-server-rtc.onrender.com/api/${itemType}/${id}`
      , {
  method: 'PATCH',
  headers: {
    Authorization: `Bearer ${token}`
  },
  body: formData
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log('error:', error);
  });
}
 
     