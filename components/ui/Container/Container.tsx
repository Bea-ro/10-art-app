import { ContainerStyled } from './ContainerStyled';

const Container = ( {children, direction, justify, color, background, isModalOpen}: Props) => {

return (
    <>
        <ContainerStyled direction={direction} justify={justify} color={color} background={background}
        isModalOpen={isModalOpen}
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
    isModalOpen?: boolean
   }

export default Container