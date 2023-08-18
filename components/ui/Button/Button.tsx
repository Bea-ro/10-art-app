import { ButtonStyled } from './ButtonStyled';

const Button = ({type, buttonText} : Props) => {

return (
    <>
        <ButtonStyled type={type}>{buttonText}</ButtonStyled>
    </>
  )
}

export type Props = {
  type: "button" | "submit" | "reset" | undefined
  buttonText: string 
 }

export default Button