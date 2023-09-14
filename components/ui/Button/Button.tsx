import { ButtonStyled } from './ButtonStyled';

const Button = ({type, buttonText, onClick, disabled} : Props) => {

return (
    <>
        <ButtonStyled type={type} onClick={onClick} disabled={disabled}>{buttonText}</ButtonStyled>
    </>
  )
}

export type Props = {
  type: "button" | "submit" | "reset" | undefined
  buttonText: string 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
 }

export default Button