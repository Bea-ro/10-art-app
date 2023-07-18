import Link from 'next/link'
import { useState } from 'React'
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import Message from '../ui/Message/Message';

const Login = () => {

  const [userLogged, setUserLogged] = useState<Record<string, string>>({
    email: '',
    password: ''
  })

  const [error, setError] = useState<string>('')

  //tipar lo que recibe y devuelve
  const handleFormSubmit = (event: object) : Record<string, string> => {
    event.preventDefault();
//fetch login
    event.target.reset();
  };

    //tipar lo que recibe y devuelve
  const handleInputChange = (event: object) : Record<string, string> => {
    setUserLogged({
      ...userLogged,
      [event.target.name]: event.target.value
    });
  };


  return (
 
    <div className="register-login-container">
     
      <form onSubmit={handleFormSubmit} className="register-login-form">
        <Input
          type="email"
          placeholder="email address"
          name="email"
          value={userLogged?.email}
          onChange={handleInputChange}
        />

        <Input
          type="password"
          placeholder="password"
          name="password"
          value={userLogged?.password}
          onChange={handleInputChange}
        />
        <Button buttonText="Submit"/>
      </form>

      {error && <Message messageText={error} />}
         
      <div className="register-container">

      {/* <Link to="/register">
        <p className="register-cta" onClick={() => setError('')}>Create your account if you don't have one yet</p>
      </Link> */}
      
      <Button buttonText="Register"/>
      </div>
      
  
    </div>
   
  );
};

export default Login;