import { ContainerStyled } from './ContainerStyled';

const Container = ( {children, direction, justify, color}: Props) => {

return (
    <>
        <ContainerStyled direction={direction} justify={justify} color={color}
        >{children}</ContainerStyled>
    </>
  )
}

export type Props = {
    children: React.ReactNode
    direction?: string
    justify?: string
    color?: string
   }

export default Container