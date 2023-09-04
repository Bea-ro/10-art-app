import React, { useState }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'

import Input from '../Input/Input';
import Button from '../Button/Button';
import Container from '../Container/Container';

import { Values } from '../../../types/values'
import { registerPostFetch } from '../../../services/registerPostFetch';
import { loginPostFetch } from '../../../services/loginPostFetch';

const Form = ( {action, setIsAuth}: Props) => {

        const { handleSubmit, register, formState } = useForm({defaultValues: 
        {email: '',
        password: ''
      }
      })

      const [error, setError] = useState<string>('');
      
  
      const onSubmitRegister = (values: Values) => { 
        registerPostFetch(values, setError, setIsAuth); 
       }
      
      const onSubmitLogin = (values: Values) => { 
       loginPostFetch(values, setError, setIsAuth); 
      }


  return (

    <FormStyled onSubmit={action === "register" ? handleSubmit(onSubmitRegister): handleSubmit(onSubmitLogin)}>
      <Container style={{padding: '12px', flexDirection: 'column'}}>
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
  setIsAuth: () => void
} 

export default Form
