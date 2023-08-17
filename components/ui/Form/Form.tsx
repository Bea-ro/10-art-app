import React, { useState }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'

import Input from '../Input/Input';
import Button from '../Button/Button';

import { loginPostFetch } from '../../../services/loginPostFetch';
import { Values } from '../../../types/values'

import { userStored } from '../../../utils/localStorage'

//cambia vista register/login según seleccione el usuario
// Esta vista no puede funcionar mediante SSR (poner SSG) ya que necesita fetch para comprobar que está autenticado

const Form = () => {

        const { handleSubmit, register, formState } = useForm({defaultValues: 
        {email: '',
        password: ''
      }
      })

      const [emptyForm, setEmptyForm] = useState<boolean>(true)

      const [error, setError] = useState<string>('');

      const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if (userStored) {
          return true;
        } else {
          return false;
        }
      });
      
      console.log(formState)
      
      const onSubmit = (values: Values) => { 
       loginPostFetch(values, setError, setIsLoggedIn); 
      }


  return (

    <FormStyled onSubmit={handleSubmit(onSubmit)}>
     <Input
          register={register("email")}
          type="email"
          placeholder="email address"
          id="email"
          onChange={() => setEmptyForm(false) }
        />

        <Input
          register={register("password")}
          type="password"
          placeholder="password"
          id="password"
          onChange={ () => setEmptyForm(false) }
        />
        <Button buttonText="Submit" emptyForm={emptyForm}/>
   
   </FormStyled>
     )
}

export default Form
