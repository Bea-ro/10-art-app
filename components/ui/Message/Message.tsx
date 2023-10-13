import { MessageStyled } from './MessageStyled';
import { useContext } from 'react'
import { MessageContext } from '../../../pages/_app';
import { AuthFormData } from '../../../types/formData'


const Message = ({formState, action, padding, shadow}: Props) => {
  
  const {message} = useContext(MessageContext);

  const otherMessage = () => {
if (action === "login" && (formState.errors.email || formState.errors.password)) {
"Please, check your email and password and try again."
//este parece que sale bien con mensaje a secas (viene del backend)
//el de eliminar también sale bien del backend
} else if (action === "register" && formState.errors.password) {
  "Password must be at least six characters long and contain both uppercase and lowercase letters."
} else if (action === "register" && formState.errors.email) {
  "User already exists."}
  }

  
  // {(formState.errors.name || formState.errors.movement || formState.errors.area) && <p>Please, check your data and try again.</p>}

  
  return (
<MessageStyled padding={padding} shadow={shadow}>{message}</MessageStyled>
    );
  };

  export type Props = {
    formState?: AuthFormData
    action?: string
    padding?: string
    shadow?: string
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