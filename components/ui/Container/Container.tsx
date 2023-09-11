import { ContainerStyled } from './ContainerStyled';

const Container = ( {children, direction, color}: Props) => {

return (
    <>
        <ContainerStyled direction={direction} color={color}
        >{children}</ContainerStyled>
    </>
  )
}

export type Props = {
    children: React.ReactNode
    direction?: string
    color?: string
   }

export default Container