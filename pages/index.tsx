import Layout from '../components/ui/Layout'
import Link from 'next/link'
import Image from 'next/image'

// import { GetStaticProps } from 'next';
// import { Artwork } from '../types/artwork'
// import { Author } from '../types/author'
// import { getArtworks } from '../libs/artworks/artworks';
// import { getAuthors } from '../libs/authors/authors';

import PageTitle from '../components/ui/PageTitle/PageTitle';
import Form from '../components/ui/Form/Form';
import Message from '../components/ui/Message/Message';

const Home = ( 
  // { artworks, authors }: Props 
  ) => {

  return (
      <Layout title="Art App" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <PageTitle title="Your Art App"/>
      
{/* //cuando no estás autenticado te muestra register/login y cuando sí, te muestra los ul de abajo */}
{/* //con estado ver si ejecuta evento Login o Register */}
<button>Register</button>
<button>Login</button>

<Message/>
{/* <div className="register-container">
<Link href="/register">
  <p className="register-cta">Create your account if you don't have one yet</p>
</Link>
<Button buttonText="Register" emptyInputs={emptyInputs}/>
</div> */}

{/* ver dónde meter los ul */}
        {/* <ul>
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
<Link href="/authors">See all Authors</Link>      */}
      </Layout>
  
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const artworks = await getArtworks()
//   const authors = await getAuthors()
//     return {
//       props: {
//         artworks: artworks,
//         authors: authors
//       },
//       revalidate: 30
//      };
//   };

// export type Props = {
//   artworks: Artwork[]
//   authors: Author[]
//   title: string
//  }
 

export default Home