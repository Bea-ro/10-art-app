import React, {useState, createContext, useEffect} from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Artwork } from '../types/artwork'
import { Author } from '../types/author'
import { getArtworks } from '../libs/artworks/artworks';
import { getAuthors } from '../libs/authors/authors';

import Layout from '../components/ui/Layout'
import PageTitle from '../components/ui/PageTitle/PageTitle';
import Button from '../components/ui/Button/Button';
import Message from '../components/ui/Message/Message';
import Container from '../components/ui/Container/Container';
import Text from '../components/ui/Text/Text';
import Carousel from '../components/ui/Carousel/Carousel';


export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {}
})

const Home = ({ artworks, authors }: Props) => {

  const [isAuth, setIsAuth] = useState<boolean>(false)
  const router = useRouter();

  const handleRegisterNavigation = () => router.push('/user?action=register')
   

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      const userStored = localStorage.getItem('userStored')
      userStored ? setIsAuth(true) : setIsAuth(false);
      }
  },[])

  return (
      <Layout title="Art App" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <PageTitle title="Your Art App"/>
      <Text fontSize="40px" text="Find your favourite artists and artworks"/>

      <AuthContext.Provider
        value={{
          isAuth: isAuth,
          setIsAuth: setIsAuth
        }}
      >

{isAuth? 
(
<>
<Carousel carouselItems={artworks}></Carousel>
<Link href="/artworks">See all Artworks</Link>
<Carousel carouselItems={authors}></Carousel>
<Link href="/authors">See all Authors</Link>
</>
)
:
(
<Container direction="column">
<Text text="Still do not have an account?"></Text>
<Button type="button" buttonText="Free Register" onClick={handleRegisterNavigation}/>
</Container>
)
}

<Message/>
</AuthContext.Provider>
      </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const artworks = await getArtworks()
  const authors = await getAuthors()
    return {
      props: {
        artworks: artworks,
        authors: authors
      },
      revalidate: 30
     };
  };

export type Props = {
  artworks: Artwork[]
  authors: Author[]
 }

export type AuthContextType = {
  isAuth: boolean | undefined
  setIsAuth: (arg0: boolean) => void
 }

export default Home