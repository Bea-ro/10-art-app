import { loginPostFetch } from './loginPostFetch';
import { Values } from '../types/values'

export const registerPostFetch = async (values: Values, setError: (arg0: string) => void, handleNavigate: (arg0: string) => void, setIsAuth: (arg0: boolean) => void) => {
  await fetch('https://complete-server-rtc.onrender.com/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('data en register', data)
      if (data.message) {
        setError(data.message);
      } else {
        setError('');
        const userStored = {
          email: data.email,
          password: data.password
        };
        localStorage.setItem('userStored', JSON.stringify(userStored));
        loginPostFetch(values, setError, handleNavigate, setIsAuth);
      }
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};