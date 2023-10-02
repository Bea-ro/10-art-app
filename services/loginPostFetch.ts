import { Values } from '../types/values'

export const loginPostFetch = async (values: Values, setError: (arg0: string) => void, handleNavigate: (arg0: string) => void, setIsAuth: (arg0: boolean) => void, setToken: (arg0:string) => void) => {
  console.log('se ejecuta el loginPostFetch')  
  await fetch('https://complete-server-rtc.onrender.com/api/users/login', {
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
          console.log('userStored', userStored)
          localStorage.setItem('userStored', JSON.stringify(userStored));
          handleNavigate('/');
          setIsAuth(true);
          setToken(data.token)
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
      });
  };