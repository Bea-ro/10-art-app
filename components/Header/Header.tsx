import { useContext } from 'react';
import { useRouter } from 'next/router';
import { HeaderStyled } from './HeaderStyled';

import { AuthContext } from '../../pages/index';

import Button from '../ui/Button/Button';
import Container from '../ui/Container/Container';


const Header = () => {

  const router = useRouter();
  const { action } = router.query;
  const { isAuth } = useContext(AuthContext) 

  const handleButtonClick = () => {
   if ( action === "login" || action === "register") {
    isAuth && localStorage.removeItem('userStored')
      router.push('/')  
    } else if ( action === undefined) {
      router.push('/user?action=login')
    } 
  };

return (
    <HeaderStyled>
      <Container> 
  <Button type="button" buttonText={
     action === "register" || action === "login"? "Home" : (isAuth? "Logout" : "Login")
  }
onClick={handleButtonClick}/>
 </Container>
</HeaderStyled>
  )
}

type Props = {
  action: string | undefined | string[]
} 

export default Header