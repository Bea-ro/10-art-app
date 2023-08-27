import { ContainerStyled } from './ContainerStyled';

const Container = ( {children}: Props) => {

return (
    <>
        <ContainerStyled>{children}</ContainerStyled>
    </>
  )
}

export type Props = {
    children: React.ReactNode 
   }

export default Container