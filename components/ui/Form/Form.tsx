import React, { useContext, useState }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'
import { useRouter } from 'next/router';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Container from '../Container/Container';

import { Values } from '../../../types/values'
import { registerPostFetch } from '../../../services/registerPostFetch';
import { loginPostFetch } from '../../../services/loginPostFetch';
import { AuthContext } from '../../../pages/index';

const Form = ( {action}: Props) => {

  
const { setIsAuth } = useContext(AuthContext) 
const router = useRouter();

        const { handleSubmit, register, formState } = useForm({defaultValues: 
        {email: '',
        password: ''
      }
      })

      const [error, setError] = useState<string>('');
      
  
      const onSubmitRegister = (values: Values) => { 
        registerPostFetch(handleNavigate, values, setError, setIsAuth); 
       }
      
      const handleNavigate = (url: string) => {
        router.push(url);
      };

      const onSubmitLogin = (values: Values) => { 
       loginPostFetch(handleNavigate, values, setError, setIsAuth); 
      }


  return (

    <FormStyled onSubmit={action === "register" ? handleSubmit(onSubmitRegister): handleSubmit(onSubmitLogin)}>
      <Container direction='column'>
     <Input
          register={register("email")}
          type="email"
          placeholder="email address"
          id="email"
        />

        <Input
          register={register("password")}
          type="password"
          placeholder="password"
          id="password"
        />
        </Container>
        <Button type="submit" buttonText="Submit"/>
   
   </FormStyled>
     )
}

type Props = {
  action: string | undefined | string[]
} 

export default Form
