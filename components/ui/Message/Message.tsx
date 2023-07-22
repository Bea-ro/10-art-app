import styled from 'styled-components';
import { useForm } from 'react-hook-form'

const Message = () => {

  const { formState } = useForm<Record<string, string>>({defaultValues: 
    {email: '',
    password: ''
  }
  })

    return (

formState.errors.email? <p>{formState.errors.email.message}</p> : (formState.errors.password? <p>{formState.errors.password.message}</p> : null ) 

    );
  };

   
  export default Message;