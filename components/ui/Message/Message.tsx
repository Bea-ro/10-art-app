import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthFormData } from '../../../types/formData'
import { ErrorContext } from '../../../pages/_app';

const Message = ({formState, action}: Props) => {
  
  const {error} = useContext(ErrorContext);

    return (
<>
{action === "login" && (formState.errors.email || formState.errors.password) && <p>Please, check your email and password and try again.</p>}
{action === "register" && formState.errors.password && <p>Password must be at least six characters long and contain both uppercase and lowercase letters.</p>}
{action === "register" && formState.errors.email && <p>User already exists.</p>}
<p>{error}</p>
</>
    );
  };

  export type Props = {
    formState: AuthFormData
    action: string
  } 

  // export type Props = {
  //   formState: { 
  //     errors: {
  //       email: string
  //       password: string
  //     },
  //   }
  // }
   
  export default Message;