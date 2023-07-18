import Layout from '../../components/ui/Layout'
import Link from 'next/link'
import Image from 'next/image'
import useSwr from 'swr';
import { GetStaticProps } from 'next';
import { Author } from '../../types/author'
import { getAuthors } from '../../libs/authors/authors';
import { fetcher } from '../../utils/fetcher';

const AuthorsPage = ( { authors }: Props ) => {

  const { data, error } = useSwr('api/authors', fetcher, {refreshInterval: 30000})
  console.log({data, error})

  const authorsList = data?.artworks as Author[] || authors

  return (
      <Layout title="Authors" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <main>
      <h1>Authors</h1> 
      <Link href="/">HOME</Link>

        <ul>
          {authorsList.map((author) => (
             <Link href={`/authors/${author._id}`} key={author._id}>
            <li>
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
              </li>
              </Link>
            ))
          }

        </ul>
    
      </main>
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