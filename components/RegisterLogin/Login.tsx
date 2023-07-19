import Link from 'next/link'
import {useForm} from 'react-hook-form'
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import Message from '../ui/Message/Message';

const Login = () => {

  const { handleSubmit, register, formState } = useForm<Record<string, string>>({defaultValues: 
  {email: '',
  password: ''
}
})

console.log(formState)
const emptyInputs = !formState.isDirty

  const onSubmit = (values) => {
    console.log(values)
  };

  return (
 
    <div className="register-login-container">
     
      <form onSubmit={handleSubmit(onSubmit)} className="register-login-form">
        <Input
         htmlFor="email"
          type="email"
          placeholder="email address"
          id="email"
     
          registerInfo={
            {...register('email', {
              required: {
                value:true, 
                message: 'You should provide a valid email address'
            }
            })
            } 
          }
        />

        <Input
         htmlFor="password"
          type="password"
          placeholder="password"
          id="password"
          registerInfo={
            {...register('password', {
              required: {
                value:true, 
                message: "You should provide a valid password"
            },
          pattern: /^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/
          })
        }}
        />
        <Button buttonText="Submit" emptyInputs={emptyInputs}/>
      </form>

      <Message/>
         
      <div className="register-container">

      {/* <Link to="/register">
        <p className="register-cta">Create your account if you don't have one yet</p>
      </Link> */}
      
      <Button buttonText="Register" emptyInputs={emptyInputs}/>
      </div>
      
  
    </div>
   
  );
};

export default Login;