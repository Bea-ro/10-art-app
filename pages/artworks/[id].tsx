import styled from 'styled-components';
import { GetStaticProps } from "next"; 
import { GetStaticPaths } from "next"; 
import { Artwork } from "../../types/artwork";
import Link from "next/link";
import Image from 'next/image'

const ArtworkPage = ({ artwork }: Props) => {
  return (
    <>
      <main>
        <div>
          {/* {" "} */}
          <h1>{artwork.title}</h1>
          <p>{artwork.author}</p>
          <p>{artwork.year}</p>
          {/* <Image src={artwork.image ? artwork.image : ''} alt={artwork.title} height={1260} width={750}></Image> */}
          <p>{artwork.area}</p>
          <p>{artwork.movement}</p>
        </div>
        <Link href="/artworks">BACK</Link>
      </main>
    </>
  );
};        

export const getStaticPaths: GetStaticPaths = async () => {
      const response: Artwork[] = await fetch(
        `https://my-json-server.typicode.com/bea-ro/shop-api/artworks/`
      ).then((res) => res.json());
      return {
        // paths: response.map((artwork) => ({
        //   params: { id: artwork._id }
        // })),
        // fallback:false
        paths:[],
        fallback: 'blocking'
      };
    }

    export const getStaticProps: GetStaticProps = async (context) => {
     
      const id = context.params?.id as string;
  
        const response: Artwork = await fetch(
          `https://complete-server-rtc.onrender.com/api/artworks/${id}`
        ).then((res) => res.json());
        
        return {
          props: {
            artwork: response,
          },
          revalidate: 10
        };
      };

      
export type Props = {
  artwork: Artwork;
};

export default ArtworkPage;