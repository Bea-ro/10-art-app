import { loginPostFetch } from './loginPostFetch';
import { Values } from '../types/values'

export const registerPostFetch = (values: Values, setError: (arg0: string) => void, setIsLoggedIn: (arg0: boolean) => void) => {
  fetch('https://complete-server-rtc.onrender.com/api/users/register', {
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
        const userStored = {
          email: data.createdUser.email,
          password: data.createdUser.password
        };
        localStorage.setItem('userStored', JSON.stringify(userStored));
        loginPostFetch(values, setError, setIsLoggedIn);
      }
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};