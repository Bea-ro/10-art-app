import Link from 'next/link'
import Image from 'next/image'

import { GetStaticProps } from 'next';
import { Artwork } from '../types/artwork'
import { Author } from '../types/author'
import { getArtworks } from '../libs/artworks/artworks';
import { getAuthors } from '../libs/authors/authors';

import Layout from '../components/ui/Layout'
import PageTitle from '../components/ui/PageTitle/PageTitle';
import Button from '../components/ui/Button/Button';
import Message from '../components/ui/Message/Message';
import Container from '../components/ui/Container/Container';
import Text from '../components/ui/Text/Text';


const Home = ({ artworks, authors }: Props) => {

  const isClient = typeof window !== 'undefined';
  let isAuth = false;

  if (isClient) {
    const userStored = localStorage.getItem('userStored');
    isAuth = userStored ? true : false;
  }
  
    
  return (
      <Layout title="Art App" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <PageTitle title="Your Art App"/>
      <Text fontSize="40px" text="Find your favourite artists and artworks"></Text>
      

{isAuth? 
(
<>
<ul>
          {artworks.map((artwork) => (
            <li key={artwork._id}>
               <Link href="/artworks"> 
          
              <h3>{artwork.title}</h3>
              <p>{artwork.author}</p>
              <p>{artwork.year}</p>
              <Image src={artwork.image ? artwork.image : ''} alt={artwork.title} height={1260} width={750}></Image>
               <p>{artwork.area}</p>
               <p>{artwork.movement}</p>
               </Link>
               </li>
            ))
          }
        </ul>

          <Link href="/artworks">See all Artworks</Link>

        <ul>
          {authors.map((author) => (
            <li key={author._id}>
           <Link href="/authors"> 
           
              <h3>{author.name}</h3>
               <ul>
                {author.mainArtworks.map((artwork) => (
                  <li key={artwork._id}>
                   <p>{artwork.title}</p>
                  </li>
               ))}
                </ul> 
               <p>{author.area}</p>
               <p>{author.movement}</p>
              
              </Link>
              </li>
              ))
          }

        </ul>
<Link href="/authors">See all Authors</Link>
</>
)
:
(
<Container flexDirection="column">
<Text text="Still do not have an account?"></Text>
<Link href="/user?action=register" title="register"><Button type="button" buttonText="Free Register"/></Link> 
</Container>
)
}

<Message/>

      </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const artworks = await getArtworks()
  const authors = await getAuthors()
    return {
      props: {
        artworks: artworks,
        authors: authors
      },
      revalidate: 30
     };
  };

export type Props = {
  artworks: Artwork[]
  authors: Author[]
  title: string
 }
 

export default Home