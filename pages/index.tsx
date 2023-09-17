import React, { useEffect, useContext } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Artwork } from '../types/artwork'
import { Author } from '../types/author'
import { getArtworks } from '../libs/artworks/artworks';
import { getAuthors } from '../libs/authors/authors';
import { AuthContext } from './_app';

import Layout from '../components/ui/Layout/Layout'
import PageTitle from '../components/ui/PageTitle/PageTitle';
import Button from '../components/ui/Button/Button';
import Message from '../components/ui/Message/Message';
import Container from '../components/ui/Container/Container';
import Text from '../components/ui/Text/Text';
import ItemsGrid from '../components/ui/Grid/ItemsGrid';


const Home = ({ artworks, authors }: Props) => {

  const { isAuth, setIsAuth } = useContext(AuthContext) 
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
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture."
      >
      <PageTitle title="Your Art App"/>
      
{isAuth? 
(
<>
<Text fontSize="40px" text="Artworks" color="var(--color-blue)" background="var(--color-beige)"/>
<Button buttonText="Add new artwork" type="button"/>
<ItemsGrid items={artworks}></ItemsGrid>
<Link href="/artworks">See Artworks Detail</Link>
<Text fontSize="40px" text="Artists" color="var(--color-blue)" background="var(--color-beige)"/>
<Button buttonText="Add new artist" type="button"/>
<ItemsGrid items={authors}></ItemsGrid>
<Link href="/authors">See Artists Detail</Link>
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

export default Home