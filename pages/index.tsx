import Layout from '../components/ui/Layout'
import Link from 'next/link'
import Image from 'next/image'
// import useSwr from 'swr';
import { GetStaticProps } from 'next';
import { Artwork } from '../types/artwork'
import { Author } from '../types/author'
import { getArtworks } from '../libs/artworks/artworks';
import { getAuthors } from '../libs/authors/authors';
import { fetcher } from '../utils/fetcher';
import Login from '../components/RegisterLogin/Login';

const Home = ( { artworks, authors }: Props ) => {

  // const { data, error } = useSwr('api/artworks', fetcher, {refreshInterval: 30000})
  // console.log({data, error})

  // const artworksList = (data?.artworks as Artwork[]) || artworks

  // const { data, error } = useSwr('api/authors', fetcher, {refreshInterval: 30000})
  // console.log({data, error})

  // const authorsList = (data?.authors as Author[]) || authors

  return (
      <Layout title="Art App" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <main>
      <h1>Your art app</h1>

<Login/>

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

          <Link href="/atrworks">See all Artworks</Link>

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
      </main>
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
 }
 

export default Home