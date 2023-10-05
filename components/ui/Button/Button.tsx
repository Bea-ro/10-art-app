import { ButtonStyled } from './ButtonStyled';

const Button = ({type, buttonText, onClick, disabled, display} : Props) => {

return (
    <>
        <ButtonStyled type={type} onClick={onClick} disabled={disabled} display={display}>{buttonText}</ButtonStyled>
    </>
  )
}

export type Props = {
  type: "button" | "submit" | "reset" | undefined
  buttonText: string 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  display?: string
 }

export default Button