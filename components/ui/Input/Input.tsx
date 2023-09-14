import React from 'react'
import { InputStyled } from './InputStyled'
import { UseFormRegisterReturn } from 'react-hook-form'

const Input = ( {register, type, placeholder, id } : Props ) => {

  return (
    <>
  <InputStyled
         {...register}
          type={type}
          placeholder={placeholder}
          id={id}
        />
    </>
  )
}

export type Props = {
  register: UseFormRegisterReturn
    // register: (options:{
    //   required: boolean
    //   pattern: {
    //     value: RegExp
    //   message: string
    //   }
    // }) => void
    type: string
    placeholder: string
    id: string
}

export default Input





