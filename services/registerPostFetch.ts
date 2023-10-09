import { AuthFormData } from '../types/formData';
import { loginPostFetch } from './loginPostFetch';

export const registerPostFetch = async (values: AuthFormData, setMessage: (arg0: string) => void, handleNavigate: (arg0: string) => void, setIsAuth: (arg0: boolean) => void, setToken: (arg0: string) => void) => {
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
        setMessage(data.message);
      } else {
        setMessage('');
        const userStored = {
          email: data.email,
          password: data.password
        };
        localStorage.setItem('userStored', JSON.stringify(userStored));
        loginPostFetch(values, setMessage, handleNavigate, setIsAuth, setToken);
      }
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};