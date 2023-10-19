import { TextStyled } from './TextStyled'

const Text = ( {text, fontSize, color, background}: Props ) => {
  return (
    <TextStyled fontSize={fontSize} color={color} background={background}>{text}</TextStyled>
    )
}

export type Props = {
  fontSize?: string
  text: string | string[]
  color?: string
  background?: string
} 

export default Text