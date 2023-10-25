import { ButtonStyled } from "./ButtonStyled";

const Button = ({ type, onClick, disabled, display, text }: Props) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      disabled={disabled}
      display={display}
      text={text}
    >
      {text}
    </ButtonStyled>
  );
};

export type Props = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  display?: string;
  text: string;
};

export default Button;
