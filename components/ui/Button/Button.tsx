const Button = ({buttonText, emptyInputs} : Props) => {

  return (
    <>
        <button type="submit" disabled={emptyInputs}
        >{buttonText}</button>
    </>
  )
}

export type Props = {
  buttonText: string,
  emptyInputs: boolean
 }

export default Button