import { Item } from '../types/item';
import { uploadImageFetch } from './editFetch';

export const addFetch = async (itemType: string, token: string, values: Item, setMessage: (arg0: string) => void) => {

  await fetch(`https://complete-server-rtc.onrender.com/api/${itemType}`, {
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
        console.log('id es', data._id)
        if (data === 'Authentication failed. Please, login again.') {
          setMessage(data);
        } else {
          setMessage(`${itemType.slice(0,-1)} saved.`);
          //meterle aquí el upload img con data._id
       uploadImage(itemType, data._id, token, values)

        }
      })
      .catch((error) => {
        console.log('error:', error.message);
        setMessage(error.message);
      });
    }
  
  const uploadImage = async (itemType: string, id: string, token: string, values: Item) => {
    const formData = new FormData();
    console.log(values.image[0])
    formData.append('image', values.image[0]);

    await fetch(`https://complete-server-rtc.onrender.com/api/${itemType}/${id}`, {
  method: 'PATCH',
  headers: {
    Authorization: `Bearer ${token}`
  },
  body: formData
})
  .then((response) => response.json())
  .then((data) => {
    console.log('ejecuta el image')
    console.log(data)
  })
  .catch((error) => {
    console.log('error:', error);
  });
}

    
 