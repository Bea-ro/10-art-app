import { Values } from '../types/values'

export const loginPostFetch = (values: Values, setError: (arg0: string) => void, setIsLoggedIn: (arg0: boolean) => void) => {
    fetch('https://complete-server-rtc.onrender.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data objeto con user y mensaje', data)
        if (data.message) {
          setError(data.message);
        } else {
          setError('');
          const userStored = {
            email: data.user.email,
            token: data.token
          };
          localStorage.setItem('userStored', JSON.stringify(userStored));
  
          // navigate('/favorites');
  
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log('error:', error.message);
      });
  };