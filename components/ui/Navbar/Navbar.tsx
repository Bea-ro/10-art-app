import { NavbarStyled } from './NavbarStyled';
import Link from 'next/link';

const Navbar = () => {
  return (
    <NavbarStyled>
        <Link href={`/artworks`}>Artworks |</Link>
        <Link href={`/authors`}> Authors</Link>
    </NavbarStyled>
  )
}

export default Navbar