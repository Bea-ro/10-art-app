import { useForm } from 'react-hook-form'
import { FormData } from '../../../types/formData'

const Message = () => {

  const { formState } = useForm<FormData>({defaultValues: 
    {email: '',
    password: ''
  }
  })

    return (
<>
{formState.errors.password && (<p>{formState.errors.password.message}</p>) || 
        formState.errors.email && (<p>{formState.errors.email.message}</p>)}
        </>
    );
  };

   
  export default Message;