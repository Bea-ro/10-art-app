import { GetStaticProps } from 'next';
import { useContext } from 'react';
import { AuthContext } from '../_app';
import { Artwork } from '../../types/artwork'
import { getArtworks } from '../../libs/artworks/artworks';

import Layout from '../../components/ui/Layout/Layout'
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Carousel from '../../components/ui/Carousel/Carousel';
import Text from '../../components/ui/Text/Text';


const ArtworksPage = ( { artworks }: Props ) => {

  const { isAuth } = useContext(AuthContext)

  return (
         
  <Layout title="Artworks" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      
      <PageTitle title="Artworks"/>
      {isAuth? <Carousel carouselItems={artworks}></Carousel> : <Text text="Please, log in to discover artworks."/>}         
      </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const artworks = await getArtworks()
    return {
      props: {
        artworks: artworks
      },
      revalidate: 30
     };
  };

export type Props = {
  artworks: Artwork[]
  }
 

export default ArtworksPage