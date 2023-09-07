import { ContainerStyled } from './ContainerStyled';

const Container = ( {children, flexDirection, justifyContent, backgroundColor, color}: Props) => {

return (
    <>
        <ContainerStyled flexDirection={flexDirection} justifyContent={justifyContent}
        backgroundColor={backgroundColor} color={color}
        >{children}</ContainerStyled>
    </>
  )
}

export type Props = {
    children: React.ReactNode
    flexDirection?: string
    justifyContent?: string
    backgroundColor?: string
    color?: string
   }

export default Container