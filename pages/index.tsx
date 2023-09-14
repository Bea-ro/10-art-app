import React, {useState, createContext, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Artwork } from '../types/artwork'
import { Author } from '../types/author'
import { getArtworks } from '../libs/artworks/artworks';
import { getAuthors } from '../libs/authors/authors';

import Layout from '../components/ui/Layout/Layout'
import PageTitle from '../components/ui/PageTitle/PageTitle';
import Button from '../components/ui/Button/Button';
import Message from '../components/ui/Message/Message';
import Container from '../components/ui/Container/Container';
import Text from '../components/ui/Text/Text';
import Carousel from '../components/ui/Carousel/Carousel';
import ArtworkCard from '../components/ArtworkCard/ArtworkCard';
import ItemsGrid from '@/components/ui/Grid/ItemsGrid';


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
    <AuthContext.Provider
        value={{
          isAuth: isAuth,
          setIsAuth: setIsAuth
        }}
      >
      <Layout title="Art App" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <PageTitle title="Your Art App"/>
      


{isAuth? 
(
<>
<ItemsGrid artworks={artworks}></ItemsGrid>
<Link href="/artworks">See Artworks Detail</Link>

<Carousel carouselItems={authors}></Carousel>
<Link href="/authors">See all Authors</Link>
</>
)
:
(
<Container direction="column">
<Text fontSize="40px" text="Find your favourite artists and artworks"/>
<Text text="Still do not have an account?"></Text>
<Button type="button" buttonText="Free Register" onClick={handleRegisterNavigation}/>
</Container>
)
}

<Message/>
</Layout>
</AuthContext.Provider>
   
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