import { ModalStyled } from "./ModalStyled";

const Modal = ({ children, top }: Props) => {
  return <ModalStyled top={top}>{children}</ModalStyled>;
};

export type Props = {
  children: React.ReactNode;
    top?: string,
};

export default Modal;
