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
      
      const handleNavigate = (url: string) => {
        router.push(url);
      };

      console.log(formState.isValid)
      const onSubmit = (values: Values) => { 
        console.log(formState.errors)
        console.log(error)
       formState.isValid && (action === "register" ? registerPostFetch(values, setError, handleNavigate, setIsAuth)
      : loginPostFetch(values, setError, handleNavigate, setIsAuth))
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

export default Form
