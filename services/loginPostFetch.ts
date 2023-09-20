import { Values } from '../types/values'

export const loginPostFetch = (handleNavigate: (arg0: string) => void, values: Values, setError: (arg0: string) => void, setIsAuth: (arg0: boolean) => void) => {
  console.log('se ejecuta el loginPostFetch')  
  fetch('https://complete-server-rtc.onrender.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data en login', data)
        if (data.message) {
          setError(data.message);
        } else {
          setError('');
          const userStored = {
            email: data.userDB.email,
            token: data.token
          };
          localStorage.setItem('userStored', JSON.stringify(userStored));
          handleNavigate('/');
          setIsAuth(true);
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
      });
  };