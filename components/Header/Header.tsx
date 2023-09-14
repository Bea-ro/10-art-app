import { useContext } from 'react';
import { useRouter } from 'next/router';
import { HeaderStyled } from './HeaderStyled';

import { AuthContext } from '../../pages/index';

import Container from '../ui/Container/Container';
import Button from '../ui/Button/Button';
import Navbar from '../ui/Navbar/Navbar';


const Header = () => {

  const router = useRouter();
  const { action } = router.query;
  const { isAuth, setIsAuth } = useContext(AuthContext) 

  const handleButtonClick = () => {
    isAuth && localStorage.removeItem('userStored'); 
    isAuth && setIsAuth(false)
    action === undefined && !isAuth? router.push('/user?action=login') : router.push('/')
  };

return (
    <HeaderStyled>
    
     <Navbar></Navbar> 
  <Button type="button" buttonText={
     action === "register" || action === "login"? "Home" : (isAuth? "Logout" : "Login")
  }
onClick={handleButtonClick}/>

</HeaderStyled>
  )
}

type Props = {
  action: string | undefined | string[]
} 

export default Header