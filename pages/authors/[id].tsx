import { GetStaticProps } from "next"; 
import { GetStaticPaths } from "next"; 
import { Author } from "../../types/author";
import Link from "next/link";

const AuthorPage = ({ author }: Props) => {
  return (
    <>
      <main>
        <div>
          {" "}
          <h1>{author.name}</h1>

          <ul>
 {author.mainArtworks.map((artwork) => (
   <li key={artwork._id}>
    <p>{artwork.title}</p>
   </li>
 ))}
 </ul> 

<p>{author.area}</p>
<p>{author.movement}</p>

        </div>
        <Link href="/authors">BACK</Link>
      </main>
    </>
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


