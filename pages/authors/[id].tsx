import styled from 'styled-components';
import { GetStaticProps } from "next"; 
import { GetStaticPaths } from "next"; 
import { useContext } from 'react';
import { AuthContext } from '../_app';
import { Author } from "../../types/author";
import Link from "next/link";
import Image from 'next/image'

import Layout from '../../components/ui/Layout/Layout';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import Button from '../../components/ui/Button/Button';



const AuthorPage = ({ author }: Props) => {

  const { isAuth } = useContext(AuthContext)

  return (
    <Layout title={`Artist ${author.name}`}
      description={`Find information about artwork ${author.name}`}>
      
      <PageTitle title={author.name}/>
      {isAuth? 
      <>
      <h3>{author.name}</h3>
      <Button buttonText="Add a new artist" type="button"/>
      <Button buttonText="Delete" type="button"/>
      
      {/* <Image src={author.image || ''} alt={author.name} 
      height={400} width={400*(16/9)}
      ></Image> */}
    
      <ul>
             {author.mainArtworks?.map((artwork) => (
               <li key={artwork._id}>
                <p>{artwork.title}</p>
               </li>
            ))}
             </ul>                   
       <p>{author.area}</p>
       <p>{author.movement}</p>
       </>
       : <Text text={`Please, log in to discover ${author.name}.`}/>}
      </Layout>
     
  );
};              

export const getStaticPaths: GetStaticPaths = async () => {
  const response: Author[] = await fetch(
    `https://my-json-server.typicode.com/bea-ro/shop-api/authors/`
  ).then((res) => res.json());
  return {
    // paths: response.map((author) => ({
    //   params: { id: author._id }
    // })),
    // fallback: false
    paths:[],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id as string;

      const response: Author = await fetch(
        `https://complete-server-rtc.onrender.com/api/authors/${id}`
      ).then((res) => res.json());
     
      return {
        props: {
          author: response,
        },
        revalidate: 10
      };
    };



export type Props = {
  author: Author;
};

export default AuthorPage;


