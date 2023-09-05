import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderStyled } from './HeaderStyled';
import Button from '../ui/Button/Button';
import Container from '../ui/Container/Container';

const Header = () => {

  const router = useRouter();
  const { action } = router.query;

return (
    <HeaderStyled>
      <Container justifyContent="flex-end">
 <Link href={
  action === "register" || action === "login"? "/" : "/user?action=login"
 }
 title="login"><Button type="button" buttonText={action === "register" || action === "login"? "Home" : "Login"}/></Link>
 </Container>
</HeaderStyled>
  )
}

type Props = {
  action: string | undefined | string[]
} 

export default Header