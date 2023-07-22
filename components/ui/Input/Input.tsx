import React from 'react'
import { InputStyled } from './InputStyled'

const Input = ( {type, placeholder, id, onChange } : Props ) => {
  return (
    <>
  <InputStyled
          type={type}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
        />
    </>
  )
}

export type Props = {
    type: string
    placeholder: string
    id: string
    onChange: () => void
}

export default Input