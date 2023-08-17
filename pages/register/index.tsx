import styled from 'styled-components';
import Layout from '../../components/ui/Layout'
import Link from 'next/link'
import Image from 'next/image'
import useSwr from 'swr';
import { GetStaticProps } from 'next';
import { Author } from '../../types/author'
import { getAuthors } from '../../libs/authors/authors';
import { fetcher } from '../../utils/fetcher';
import PageTitle from '@/components/ui/PageTitle/PageTitle';
import { Form } from 'react-hook-form';

const RegisterPage = () => {

  return (
      <Layout title="Authors" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <main>
      <PageTitle title="Authors"/>
      <Form/>
      </main>
      </Layout>
  
  )
}
 

export default RegisterPage