import React, { useContext, useState }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'
import { useRouter } from 'next/router';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Container from '../Container/Container';

import { Values } from '../../../types/values'
import { FormData } from '../../../types/formData'
import { registerPostFetch } from '../../../services/registerPostFetch';
import { loginPostFetch } from '../../../services/loginPostFetch';
import { AuthContext } from '../../../pages/_app';


const Form = ( {action}: Props) => {
  
const { setIsAuth } = useContext(AuthContext) 
const router = useRouter();

        const { handleSubmit, register, formState } = useForm<FormData>({defaultValues: 
        {email: '',
        password: ''
      }
      })

      const [error, setError] = useState<string>('');
  
      const onSubmitRegister = (values: Values) => { 
       formState.isValid && registerPostFetch(handleNavigate, values, setError, setIsAuth); 
       }
      
      const handleNavigate = (url: string) => {
        router.push(url);
      };

      const onSubmitLogin = (values: Values) => { 
        formState.isValid && loginPostFetch(handleNavigate, values, setError, setIsAuth); 
      }


  return (

    <FormStyled onSubmit={action === "register" ? handleSubmit(onSubmitRegister): handleSubmit(onSubmitLogin)}>
      <Container direction='column'>
     <Input
          register={register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Please, check your email and password and try again.',
          }}
          )}
          type="email"
          placeholder="email address"
          id="email"
        />
        <Input
          register={register("password", {
          required: true,
          pattern: {
            value: /^(?=.*?[a-z])(?=.*?[A-Z]).{6,}$/,
            message: 'Please, check your email and password and try again.',
          }}
          )}
          type="password"
          placeholder="password"
          id="password"
        />
        {formState.errors.password && (<p>{formState.errors.password.message}</p>) ||
        formState.errors.email && (<p>{formState.errors.email.message}</p>)}
        {!formState.errors.password && !formState.errors.email && error && (<p>{error}</p>)}
        </Container>
        <Button type="submit" buttonText="Submit" 
        // disabled={!formState.isValid || formState.isSubmitting}
        />
   
   </FormStyled>
     )
}

type Props = {
  action: string | undefined | string[]
} 

export default Form
