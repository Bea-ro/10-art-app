import React, { useContext }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'
import { useRouter } from 'next/router';

import Button from '../Button/Button';
import Container from '../Container/Container';

import { AuthFormData } from '../../../types/formData'
import { registerPostFetch } from '../../../services/registerPostFetch';
import { loginPostFetch } from '../../../services/loginPostFetch';
import { AuthContext, ErrorContext } from '../../../pages/_app';


const AuthForm = ( {action}: Props) => {

const { setIsAuth, setToken } = useContext(AuthContext) 
const {error, setError} = useContext(ErrorContext);
const router = useRouter();

        const { handleSubmit, register, formState } = useForm<AuthFormData>({defaultValues: 
        {email: '',
        password: ''
      }
      })
     
      
      const handleNavigate = (url: string) => {
        router.push(url);
      };

      const onSubmit = (values: AuthFormData) => { 
       formState.isValid && (action === "register" ? registerPostFetch(values, setError, handleNavigate, setIsAuth, setToken)
      : loginPostFetch(values, setError, handleNavigate, setIsAuth, setToken))
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
     
        {(formState.errors.email || formState.errors.password) && <p>Please, check your email and password and try again.</p>}
        <p>{error}</p>
      
        </Container>
        <Button type="submit" buttonText="Submit" 
        disabled={!formState.isValid || formState.isSubmitting}
        />
   
   </FormStyled>
     )
}

type Props = {
  action: string | undefined | string[]
} 

export default AuthForm
