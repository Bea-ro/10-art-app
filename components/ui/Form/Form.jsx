import { useForm} from 'react-hook-form'
import React, { useState }  from 'react'
import { FormStyled } from './FormStyled';
import Input from '../Input/Input';
import Button from '../Button/Button';


const Form = () => {

        const { handleSubmit, register, formState } = useForm({defaultValues: 
        {email: '',
        password: ''
      }
      })

      const [emptyForm, setEmptyForm] = useState(true)
      
      console.log(formState)
      
      const onSubmit = (values) => { console.log(values) }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
     <Input
          type="email"
          placeholder="email address"
          id="email"
          onChange={()=> setEmptyForm(false) }
        />

        <Input
          type="password"
          placeholder="password"
          id="password"
          onChange={ ()=> setEmptyForm(false) }
        />
        <Button buttonText="Submit" emptyForm={emptyForm}/>
   
   </FormStyled>
     )
}

export default Form
