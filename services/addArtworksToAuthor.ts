export const addArtworksToAuthor = async (token: string, artworkId: string | string[], authorId: string, setMessage: (arg0: string) => void) => {
  console.log('el id de la obra', artworkId)
  console.log('id del autor', authorId)
  await fetch(`https://complete-server-rtc.onrender.com/api/authors/${authorId}/artwork`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({mainArtwork: artworkId})
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
//         if (typeof(data) === 'string') {
//           setMessage(data);
//         } else if (typeof(data) === 'object' && data.message) {
//           setMessage(data.message);
//         } else {
// console.log('se han populado las obras')
//         }
 })
      .catch((error) => {
        console.log('error:', error.message);
        setMessage(error.message);
      });
}

    
 