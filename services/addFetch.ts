import { Item } from '../types/formData';

export const addFetch = async (itemType: string, token: string, values: Item, setError: (arg0: string) => void) => {
  await fetch(`https://complete-server-rtc.onrender.com/api/${item}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (data.message) {
          setError(data.message);
        } else {
          setError(`Your ${currentPath} has been added.`);
       
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
      });
  };