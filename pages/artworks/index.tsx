import styled from 'styled-components';
import Layout from '../../components/ui/Layout/Layout'
import Link from 'next/link'
import Image from 'next/image'
import useSwr from 'swr';
import { GetStaticProps } from 'next';
import { Artwork } from '../../types/artwork'
import { getArtworks } from '../../libs/artworks/artworks';
import { fetcher } from '../../utils/fetcher';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Carousel from '../../components/ui/Carousel/Carousel';

const ArtworksPage = ( { artworks }: Props ) => {

  const { data, error } = useSwr('api/artworks', fetcher, {refreshInterval: 30000})

  const artworksList = data?.artworks as Artwork[] || artworks

  return (
      <Layout title="Artworks" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      
      <PageTitle title="Artowrks"/>
      
      <Link href="/">HOME</Link>
      <Carousel carouselItems={artworks}></Carousel>   
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