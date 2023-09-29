import { Values } from '../types/values'

export const addPostFetch = async (values: Values, setError: (arg0: string) => void, handleNavigate: (arg0: string) => void, setIsAuth: (arg0: boolean) => void) => {
  await fetch('https://complete-server-rtc.onrender.com/api/authors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (data.message) {
          setError(data.message);
        } else {
          setError('');
         //mostrar mensaje de artista/obra creado
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
      });
  };