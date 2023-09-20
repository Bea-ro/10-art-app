import { GetStaticProps } from "next"; 
import { GetStaticPaths } from "next"; 
import { useContext } from "react";
import { AuthContext } from "../_app";
import { Artwork } from "../../types/artwork";
import Link from "next/link";
import Image from 'next/legacy/image'

import Layout from '../../components/ui/Layout/Layout';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import Button from '../../components/ui/Button/Button';
import Container from '../../components/ui/Container/Container';


const ArtworkPage = ({ artwork }: Props) => {

  const { isAuth } = useContext(AuthContext)

  return (
    
    <Layout title={`Artwork ${artwork.title}`}
      description={`Find information about artwork ${artwork.title}`}>
      
      <PageTitle title={artwork.title}/>
      {isAuth? 
      <>
      <Container direction="column">
      <p>{`${artwork.author},  ${artwork.year}`} </p>   
      <p>{artwork.movement}  {artwork.area}</p>
      <Image src={artwork.image || ''} alt={artwork.title} 
      height={400} width={400*(16/9)}
      ></Image> 
      </Container>
      <Container>
      <Button buttonText="Add a new artwork" type="button"/>
      <Button buttonText="Delete" type="button"/>
      </Container>
       </>
       : <Text text={`Please, log in to discover ${artwork.title}.`}/>}
      </Layout>
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