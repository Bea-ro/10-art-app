const Input = ({ type, placeholder, htmlFor, id, registerInfo } : Props) => {

    return (
      <>
        <input
          htmlFor={htmlFor}
          type={type}
          placeholder={placeholder}    
          id={id}   
          {...registerInfo}
        />
      </>
    );
  };
  export type Required = {
    value: boolean, 
    message: string
  }
  
  export type RegisterInfo = {
    htmlFor: string,
    type: string,
    placeholder: string,
    id: string,
    value: string
  required: Required,
  pattern?: RegExp | undefined
  }


  export type Props = {
    htmlFor?: string,
    type: string,
    placeholder: string,
    id: string
    registerInfo: RegisterInfo 
   }

 

    
  export default Input;