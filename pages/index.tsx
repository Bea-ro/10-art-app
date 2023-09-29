import React, { useContext } from 'react';
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
import Subtitle from '../components/ui/Subtitle/Subtitle';
import Button from '../components/ui/Button/Button';
import Message from '../components/ui/Message/Message';
import Container from '../components/ui/Container/Container';
import Text from '../components/ui/Text/Text';
import ItemsGrid from '../components/ui/ItemsGrid/ItemsGrid';


const Home = ({ artworks, authors }: Props) => {

  const { isAuth } = useContext(AuthContext) 
  const router = useRouter();

  const handleRegisterNavigation = () => router.push('/user?action=register')
   

  return (
      <Layout title="Art App" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture."
      >
      <PageTitle title="Your Art App"/>
      
{isAuth? 
(
<>
<Subtitle subtitle="Artworks"/>
<Container>
<Button buttonText="Add a new artwork" type="button"/>
<Link href="/artworks"
style={{
  color: 'var(--color-grey)',
  backgroundColor: 'var(--color-light-blue)',
  textShadow: '2px 2px 4px var(--color-blue)',
  borderRadius: 'var(--border-radius)',
  padding: '8px 10px',
  margin: '0 10px',
  fontSize: '22px',
  width: 'fit-content',
  alignSelf: 'center'
}}
>See Artworks Detail</Link>
</Container>
<ItemsGrid items={artworks}></ItemsGrid>
<Subtitle subtitle="Artists"/>
<Container>
<Button buttonText="Add a new artist" type="button"/>
<Link href="/authors"
style={{
  color: 'var(--color-grey)',
  backgroundColor: 'var(--color-light-blue)',
  textShadow: '2px 2px 4px var(--color-blue)',
  borderRadius: 'var(--border-radius)',
  padding: '8px 10px',
  margin: '0 10px',
  fontSize: '22px',
  width: 'fit-content',
  alignSelf: 'center'
}}
>See Artists Detail</Link>
</Container>
<ItemsGrid items={authors}></ItemsGrid>
</>
)
:
(<>
<Subtitle subtitle="Find your favourite artists and artworks"/>
<Container direction="column">
<Text text="Still do not have an account?"></Text>
<Button type="button" buttonText="Free Register" onClick={handleRegisterNavigation}/>
</Container>
</>)
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