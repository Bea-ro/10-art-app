import { Item } from '../types/item';
import { EditFormData } from '../types/formData';

export const editFetch = async (currentPath: string, item: Item, token: string, values: EditFormData, setError: (arg0: string) => void) => {
  
  await fetch(`https://complete-server-rtc.onrender.com/api${currentPath}/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data en delete', data)
        if (data.message) {
          setError('Your changes were not saved.');
        } else {
          setError(`${item.title || item.name} was successfully modified.`);       
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
        setError('Your changes were not saved.');
      });
  };