import { Item } from '../types/item'

export const deleteFetch = async (currentPath: string, item: Item, token: string, setError: (arg0: string) => void, closeModal: () => void) => {

  await fetch(`https://complete-server-rtc.onrender.com/api${currentPath}/${item._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data en delete', data)
        if (data === 'Authentication failed') {
          setError('This item could not been removed.');
        } else {
          setError(`${item.title || item.name} was removed.`);
          closeModal()      
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
        setError('This item could not been deleted.');
      });
  };