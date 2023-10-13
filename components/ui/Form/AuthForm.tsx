import React, { useContext }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'
import { useRouter } from 'next/router';

import Button from '../Button/Button';
import Container from '../Container/Container';

import { AuthFormData } from '../../../types/formData'
import { registerPostFetch } from '../../../services/registerPostFetch';
import { loginPostFetch } from '../../../services/loginPostFetch';
import { AuthContext, MessageContext } from '../../../pages/_app';
import Message from '../Message/Message';


const AuthForm = ( {action}: Props) => {

const { setIsAuth, setToken } = useContext(AuthContext) 
const {setMessage} = useContext(MessageContext);
const router = useRouter();

const defaultValues = {
  email: '',
  password: ''
}

        const { handleSubmit, register, formState } = useForm<AuthFormData>({defaultValues})
     
      
      const handleNavigate = (url: string) => {
        router.push(url);
      };

      const onSubmit = (values: AuthFormData) => { 
       formState.isValid && (action === "register" ? registerPostFetch(values, setMessage, handleNavigate, setIsAuth, setToken)
      : loginPostFetch(values, setMessage, handleNavigate, setIsAuth, setToken))
      }


  return (

    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Container direction='column'>
        <input type="email" id="email" placeholder="email"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          }
            )}
            />
        <input type="password" id="password" placeholder="password" 
          {...register('password', {
            required: true,
            pattern: /^(?=.*?[a-z])(?=.*?[A-Z]).{6,}$/
          }
            )}
            />
     
        {/* {(formState.errors.email || formState.errors.password) && <p>Please, check your email and password and try again.</p>}
        <p>{error}</p> */}
      <Message formState={formState} action={action}></Message>
        </Container>
        <Button type="submit" buttonText="Submit" 
        disabled={!formState.isValid || formState.isSubmitting}
        />
   
   </FormStyled>
     )
}

type Props = {
  action: string | undefined
} 

export default AuthForm
