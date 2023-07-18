const Input = ({ type, placeholder, onChange, value, name } : Props) => {
    return (
      <>
        <input
          type={type}
          className="input"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      </>
    );
  };

  export type Props = {
    type: string,
    placeholder: string,
    // onChange: function
    value: string,
    name: string
   }
  
  
  export default Input;