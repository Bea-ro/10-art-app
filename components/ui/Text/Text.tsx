import React from 'react'
import { TextStyled } from './TextStyled'

const Text = ( {text, fontSize}: Props ) => {
  return (
    <TextStyled fontSize={fontSize}>{text}</TextStyled>
    )
}

export type Props = {
  fontSize?: string
  text: string | string[]
} 

export default Text