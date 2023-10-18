import { ButtonStyled } from './ButtonStyled';

const Button = ({type, onClick, disabled, display, buttonText} : Props) => {

return (
        <ButtonStyled type={type} onClick={onClick} disabled={disabled} display={display} buttonText={buttonText}>
          {buttonText}
          </ButtonStyled>
  )
}

export type Props = {
  type: "button" | "submit" | "reset" | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  display?: string 
  buttonText: string 
 }

export default Button