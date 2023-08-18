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


const UserPage = () => {
  
  const router = useRouter();
  const { action } = router.query;

  return (
      <Layout title="Register" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <main>
      <PageTitle title={action === "register" ? "Register" : "Login"}/>
      <p className="register-cta">Create your account if you don't have one yet</p>
      <Form action={action}/>
      </main>
      </Layout>
  
  )
}
 
export default UserPage