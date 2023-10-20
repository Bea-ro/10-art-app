import { MessageStyled } from './MessageStyled';
import { useContext } from 'react'
import { MessageContext } from '../../../pages/_app';


const Message = ({ padding, shadow}: Props) => {
  
  
  const {message} = useContext(MessageContext);
  
  return (
    <MessageStyled padding={padding} shadow={shadow}>
      {message}
    </MessageStyled>
  );
  };

  export type Props = {
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