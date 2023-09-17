import Link from 'next/link'
import useSwr from 'swr';

import { GetStaticProps } from 'next';
import { useContext } from 'react';
import { AuthContext } from '../_app';
import { Author } from '../../types/author'
import { getAuthors } from '../../libs/authors/authors';
import { fetcher } from '../../utils/fetcher';


import Layout from '../../components/ui/Layout/Layout'
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import Carousel from '../../components/ui/Carousel/Carousel';


const AuthorsPage = ( { authors }: Props ) => {

  const { isAuth } = useContext(AuthContext)
  const { data, error } = useSwr('api/authors', fetcher, {refreshInterval: 30000})

  const authorsList = data?.artworks as Author[] || authors

  return (
      <Layout title="Authors" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <PageTitle title="Artists"/>
      {
      isAuth?
      <Carousel carouselItems={authors}></Carousel> : <Text text="Please, login to discover artists"/>
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