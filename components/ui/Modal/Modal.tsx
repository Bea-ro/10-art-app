import { useModal } from '@/customHooks/useModal';
import { ModalStyled } from './ModalStyled'

const Modal = ( { children}: Props ) => {
  
  return (
        <ModalStyled>{children}</ModalStyled>        
  )
}

export type Props = {
    children: React.ReactNode
  };

export default Modal