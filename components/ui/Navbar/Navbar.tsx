import { NavbarStyled } from './NavbarStyled';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {

  const router = useRouter();
  const currentPath = router.pathname

  return (
    <NavbarStyled>
        {currentPath !== '/' && <Link href={'/'}>Home | </Link>}
        {currentPath !== '/artworks' && <Link href={'/artworks'}>Artworks</Link>}
        {(currentPath !== '/artworks' && currentPath !== '/authors') &&  <Link href={'/artworks'}> | </Link>}
        {currentPath !== '/authors' && <Link href={'/authors'}>Artists</Link>}
    </NavbarStyled>
  )
}

export default Navbar