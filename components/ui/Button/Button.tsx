import { ButtonStyled } from './ButtonStyled';
const Button = ({buttonText, emptyForm} : Props) => {

  return (
    <>
        <ButtonStyled type="submit" disabled={emptyForm}
        >{buttonText}</ButtonStyled>
    </>
  )
}

export type Props = {
  buttonText: string,
  emptyForm: boolean
 }

export default Button