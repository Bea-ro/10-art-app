const Button = ({buttonText, emptyForm} : Props) => {

  return (
    <>
        <button type="submit" disabled={emptyForm}
        >{buttonText}</button>
    </>
  )
}

export type Props = {
  buttonText: string,
  emptyForm: boolean
 }

export default Button