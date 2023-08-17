import React from 'react'
import { InputStyled } from './InputStyled'

const Input = ( {register, type, placeholder, id, onChange } : Props ) => {
  return (
    <>
  <InputStyled
         {...register}
          type={type}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
        />
    </>
  )
}

export type Props = {
    register: {
      email: string
      password: string
    }
    type: string
    placeholder: string
    id: string
    onChange: () => void
}

export default Input