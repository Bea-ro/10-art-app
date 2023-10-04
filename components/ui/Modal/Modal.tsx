import { ModalStyled } from './ModalStyled'

const Modal = ( { children, modal}: Props ) => {

  return (
        <ModalStyled modal={modal}>{children}</ModalStyled>        
  )
}

export type Props = {
    children: React.ReactNode
    modal?: boolean | undefined
  };

export default Modal