import { useContext } from 'react';
import { useRouter } from 'next/router';
import { HeaderStyled } from './HeaderStyled';

import { AuthContext, ErrorContext } from '../../pages/_app';

import Link from 'next/link';
import Navbar from '../ui/Navbar/Navbar';


const Header = () => {

  const router = useRouter();
  const { action } = router.query;
  const { isAuth, setIsAuth } = useContext(AuthContext) 
  const {setError} = useContext(ErrorContext)

  const handleButtonClick = () => {
    isAuth && localStorage.removeItem('userStored'); 
    isAuth && setIsAuth(false)
    setError('')
  };

return (
    <HeaderStyled>
     <Navbar></Navbar> 
<Link className="button" href={action === undefined && !isAuth? "/user?action=login" : "/"} onClick={handleButtonClick}>{action === "register" || action === "login"? "Home" : (isAuth? "Logout" : "Login")}</Link>

</HeaderStyled>
  )
}

type Props = {
  action: string | undefined | string[]
} 

export default Header