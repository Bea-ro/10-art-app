import { ModalStyled } from './ModalStyled'

const Modal = ( { children, modal, buttonText}: Props ) => {

  return (
        <ModalStyled modal={modal} buttonText={buttonText}>{children}</ModalStyled>        
  )
}

export type Props = {
    children: React.ReactNode
    modal?: boolean | undefined
    buttonText: string 
  };

export default Modal