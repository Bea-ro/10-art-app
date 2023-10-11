import { Item } from '../types/item';

export const editFetch = async (itemType: string, item: Item, token: string, values: Item, setMessage: (arg0: string) => void) => {
  
  const valuesForPUT = { ...values };
  delete valuesForPUT.image;

  await fetch(`https://complete-server-rtc.onrender.com/api/${itemType}/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(valuesForPUT)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (typeof(data) === 'string') {
          setMessage(data);
        } else if (typeof(data) === 'object' && data.message) {
          setMessage(data.message);
        } else {
          setMessage(`${item.title || item.name} updated.`);       
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
        setMessage(error.message);
      });
    };

      export const uploadImageFetch = async (itemType: string, item: Item, token: string, values: Item) => {
        const formData = new FormData();
        console.log(values.image[0])
        formData.append('image', values.image[0]);
  
        await fetch(`https://complete-server-rtc.onrender.com/api/${itemType}/${item._id}`, {
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
  
    