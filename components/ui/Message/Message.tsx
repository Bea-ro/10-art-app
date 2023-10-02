import { useForm } from 'react-hook-form'
import { AuthFormData } from '../../../types/formData'

const Message = () => {

  const { formState } = useForm<AuthFormData>({defaultValues: 
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