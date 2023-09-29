import { GetStaticProps } from 'next';
import { useContext } from 'react';
import { AuthContext } from '../_app';
import { Author } from '../../types/author'
import { getAuthors } from '../../libs/authors/authors';

import Layout from '../../components/ui/Layout/Layout'
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import Carousel from '../../components/ui/Carousel/Carousel';


const AuthorsPage = ( { authors }: Props ) => {

  const { isAuth } = useContext(AuthContext)

  return (
      <Layout title="Authors" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <PageTitle title="Artists"/>
      {
      isAuth?
      <Carousel carouselItems={authors}></Carousel> : <Text text="Please, log in to discover artists."/>
        }
        

      </Layout>
  
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const authors = await getAuthors()
    return {
      props: {
        authors: authors
      },
      revalidate: 30
     };
  };

export type Props = {
  authors: Author[]
  }
 

export default AuthorsPage