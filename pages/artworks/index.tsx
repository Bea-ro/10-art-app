import styled from 'styled-components';
import Layout from '../../components/ui/Layout'
import Link from 'next/link'
import Image from 'next/image'
import useSwr from 'swr';
import { GetStaticProps } from 'next';
import { Artwork } from '../../types/artwork'
import { getArtworks } from '../../libs/artworks/artworks';
import { fetcher } from '../../utils/fetcher';
import PageTitle from '../../components/ui/PageTitle/PageTitle';

const ArtworksPage = ( { artworks }: Props ) => {

  const { data, error } = useSwr('api/artworks', fetcher, {refreshInterval: 30000})

  const artworksList = data?.artworks as Artwork[] || artworks

  return (
      <Layout title="Artworks" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      
      <PageTitle title="Artowrks"/>
      
      <Link href="/">HOME</Link>
        <ul>
          {artworksList.map((artwork) => (
             <Link href={`/artworks/${artwork._id}`} key={artwork._id}>
            <li>
              <h3>{artwork.title}</h3>
              <p>{artwork.author}</p>
              <p>{artwork.year}</p>
              <Image src={artwork.image ? artwork.image : ''} alt={artwork.title} height={1260} width={750}></Image>
               <p>{artwork.area}</p>
               <p>{artwork.movement}</p>
              </li>
              </Link>
            ))
          }

        </ul>
    
   
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