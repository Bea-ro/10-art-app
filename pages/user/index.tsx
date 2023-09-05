import styled from 'styled-components';
import Layout from '../../components/ui/Layout'
import Link from 'next/link'
import Image from 'next/image'
import useSwr from 'swr';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

import { Author } from '../../types/author'
import { getAuthors } from '../../libs/authors/authors';
import { fetcher } from '../../utils/fetcher';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Form from '../../components/ui/Form/Form';
import Text from '../../components/ui/Text/Text';

const UserPage = () => {
  
  const router = useRouter();
  const { action } = router.query;

  return (
      <Layout title={action === "register" ? "Register" : "Login"} 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <PageTitle title={action === "register" ? "Register" : "Login"}/>
      <Text text={action === "register" ? "Create your free account and start enjoying" : "Please, provide your email and password for start enjoying!"}>
      </Text>
      <Form action={action}/>
      </Layout>
  
  )
}
 
export default UserPage