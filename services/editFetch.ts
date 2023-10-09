import { Item } from '../types/item';

export const editFetch = async (currentPath: string, item: Item, token: string, values: Item, setMessage: (arg0: string) => void, closeModal: () => void) => {
  
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
        console.log('data en edit', data)
        if (data.message) {
          setMessage('Your changes were not saved.');
        } else {
          setMessage(`${item.title || item.name} was successfully updated.`);       
          closeModal()
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
        setMessage('Your changes were not saved.');
      });
  };