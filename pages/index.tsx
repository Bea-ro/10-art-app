import React, { useContext } from 'react';

import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Artwork } from '../types/artwork'
import { Author } from '../types/author'
import { getArtworks } from '../libs/artworks/artworks';
import { getAuthors } from '../libs/authors/authors';
import { AuthContext } from './_app';
import { useModal } from '../customHooks/useModal';

import Layout from '../components/ui/Layout/Layout'
import PageTitle from '../components/ui/PageTitle/PageTitle';
import Subtitle from '../components/ui/Subtitle/Subtitle';
import Button from '../components/ui/Button/Button';
import Message from '../components/ui/Message/Message';
import Container from '../components/ui/Container/Container';
import Text from '../components/ui/Text/Text';
import ItemsInHome from '../components/ui/ItemsInHome/ItemsInHome';


const Home = ({ artworks, authors }: Props) => {

  const { isAuth } = useContext(AuthContext) 
  const router = useRouter();

  const {openModal, isModalOpen, modalContent, setModalContent, display} = useModal();


  const handleRegisterNavigation = () => router.push('/user?action=register')
  
  
  return (
      <Layout title="Art App" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture."
      >
      <PageTitle title="Your Art App"/>
      
{isAuth? 
(
 <>
 <ItemsInHome items={artworks} itemType='artworks'></ItemsInHome>
<ItemsInHome items={authors} itemType='authors'></ItemsInHome>
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