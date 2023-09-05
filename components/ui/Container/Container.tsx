import { ContainerStyled } from './ContainerStyled';

const Container = ( {children, flexDirection, justifyContent}: Props) => {

return (
    <>
        <ContainerStyled flexDirection={flexDirection} justifyContent={justifyContent}>{children}</ContainerStyled>
    </>
  )
}

export type Props = {
    children: React.ReactNode
    flexDirection?: string
    justifyContent?: string
   }

export default Container