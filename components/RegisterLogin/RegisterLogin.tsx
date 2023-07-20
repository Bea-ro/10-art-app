import { useForm} from 'react-hook-form'
import { useState } from 'react'
import Button from '../ui/Button/Button';
import Message from '../ui/Message/Message';

const Login = () => {

  const { handleSubmit, register, formState } = useForm<Record<string, string>>({defaultValues: 
  {email: '',
  password: ''
}
})

const [emptyForm, setEmptyForm] = useState(true)

console.log(formState)

  const onSubmit: handleSubmit<Record<string, string>> = (values) => {
    console.log(values)
   
  };

  return (
 
    <div className="register-login-container">
     
      <form onSubmit={handleSubmit(onSubmit)} className="register-login-form">
        <input 
          type="email"
          placeholder="email address"
          id="email"
          onChange={()=> setEmptyForm(false) }
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={ ()=> setEmptyForm(false) }
        />
        <Button buttonText="Submit" emptyForm={emptyForm}/>
      </form>

      <Message/>
         
    </div>
   
  );
};

export default Login;