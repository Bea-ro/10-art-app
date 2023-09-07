import { ButtonStyled } from './ButtonStyled';

const Button = ({type, buttonText, onClick} : Props) => {

return (
    <>
        <ButtonStyled type={type} onClick={onClick}>{buttonText}</ButtonStyled>
    </>
  )
}

export type Props = {
  type: "button" | "submit" | "reset" | undefined
  buttonText: string 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
 }

export default Button