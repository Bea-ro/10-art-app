

const Button = ({buttonText} : Props) => {

  return (
    <>
        <button type="submit">{buttonText}</button>
    </>
  )
}

export type Props = {
  buttonText: string
 }

export default Button