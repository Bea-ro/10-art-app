import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext, MessageContext, ModalContext } from '../_app';
import { getAuthors } from '../../libs/authors/authors';
import { handleDeleteModal } from '../../utils/handleDeleteModal';
import { handleEditModal } from '../../utils/handleEditModal';
import { upperCaseArea } from '../../utils/upperCaseArea';
import { getAuthorId } from '../../utils/getAuthorId';
import { Artwork } from '../../types/artwork';
import { Author } from '../../types/author';

import Layout from '../../components/ui/Layout/Layout';
import Image from 'next/legacy/image';
import Link from 'next/link';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import Button from '../../components/ui/Button/Button';
import Container from '../../components/ui/Container/Container';
import Modal from '../../components/ui/Modal/Modal';


const ArtworkPage = ({ artwork, authors }: Props) => {
  const { isAuth, token } = useContext(AuthContext);
  const { setMessage } = useContext(MessageContext);
  const {
    openModal,
    closeModal,
    isModalOpen,
    setModalContent,
    modalDisplay,
    modalContent,
  } = useContext(ModalContext);
 
  const router = useRouter();

const authorId = getAuthorId(authors, artwork) 

return (
    <Layout
      title={`Artwork ${artwork.title}`}
      description={`Find information about artwork ${artwork.title}`}
    >
      <PageTitle title={artwork.title} fontSize="40px"/>
      {isAuth ? (
        <>
          <Container direction="column" isModalOpen={isModalOpen} gap="14px">
            <div>
            <Link className="author-link" href={`/authors/${authorId}`}>{artwork.author}
            </Link>
            <p>{`${artwork.movement} ${upperCaseArea(artwork.area)},  ${artwork.year}`}</p>
            </div>
            <div className="image-container">
            <Image
              src={typeof artwork.image === "string" && artwork.image || ""}
              alt={artwork.title}
              layout="fill"
              objectFit="contain"
            ></Image>
            </div>
          </Container>

          {modalDisplay && (
            <Container>
              <Button
                text="Edit"
                type="button"
                onClick={() =>
                  handleEditModal(
                    artwork,
                    "artworks",
                    openModal,
                    setModalContent
                  )
                }
              />
              <Button
                text="Delete"
                type="button"
                onClick={() =>
                  handleDeleteModal(
                    artwork,
                    "artworks",
                    token,
                    openModal,
                    closeModal,
                    setMessage,
                    setModalContent,
                    router
                  )
                }
              />
            </Container>
          )}

          {isModalOpen && <Modal>{modalContent}</Modal>}
        </>
      ) : (
        <Text text={`Please, log in to discover ${artwork.title}.`} />
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response: Artwork[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/artworks/`
  ).then((res) => res.json());
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const response: Artwork = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/artworks/${id}`
  ).then((res) => res.json());
  const authors: Author[] = await getAuthors();

  return {
    props: {
      artwork: response,
      authors: authors,
    },
    revalidate: 10,
  };
};


export type Props = {
  artwork: Artwork;
  authors: Author[]
};

export default ArtworkPage;
