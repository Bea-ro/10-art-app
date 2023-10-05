import { ContainerStyled } from './ContainerStyled';

const Container = ( {children, direction, justify, color, background}: Props) => {

return (
    <>
        <ContainerStyled direction={direction} justify={justify} color={color} background={background}
        >{children}</ContainerStyled>
    </>
  )
}

export type Props = {
    children: React.ReactNode
    direction?: string
    justify?: string
    color?: string
    background?: string
   }

export default Container