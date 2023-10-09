import { Item } from '../types/item';

export const addFetch = async (itemType: string, token: string, values: Item, setMessage: (arg0: string) => void) => {
  // const formData = new FormData();

//   if (itemType === 'artworks') {
//     if (values.image) {
//     formData.append("files", values.image[0]);
//     values = { ...values, image: values.image[0].name };
//   }
//     formData.append("artwork", JSON.stringify(values));
// } else {
//   formData.append("author", JSON.stringify(values));
// }

  await fetch(`https://complete-server-rtc.onrender.com/api/${itemType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //'multipart/form-data'
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data es', data)
        if (data === 'Authentication failed. Please, login again.') {
          setMessage(data);
        } else {
          setMessage(`Your ${itemType.slice(0,-1)} has been added.`);
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
        setMessage('Your changes were not saved.');
      });
  };