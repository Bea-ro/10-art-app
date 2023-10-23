import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext, MessageContext, ModalContext } from '../_app';
import { handleDeleteModal } from '../../utils/handleDeleteModal';
import { handleEditModal } from '../../utils/handleEditModal';
import { upperCaseArea } from '../../utils/upperCaseArea';
import { Artwork } from '../../types/artwork';

import Layout from '../../components/ui/Layout/Layout';
import Image from 'next/legacy/image';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import Button from '../../components/ui/Button/Button';
import Container from '../../components/ui/Container/Container';
import Modal from '../../components/ui/Modal/Modal';

const ArtworkPage = ({ artwork }: Props) => {
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

  return (
    <Layout
      title={`Artwork ${artwork.title}`}
      description={`Find information about artwork ${artwork.title}`}
    >
      <PageTitle title={artwork.title} />
      {isAuth ? (
        <>
          <Container direction="column" isModalOpen={isModalOpen}>
            <p>{`${artwork.author},  ${artwork.year}`} </p>
            <p>
              {artwork.movement} {upperCaseArea(artwork.area)}
            </p>
            <Image
              src={typeof artwork.image === "string" && artwork.image || ""}
              alt={artwork.title}
              height={400}
              width={400 * (16 / 9)}
              id="image-in-detail"
            ></Image>
          </Container>

          {modalDisplay && (
            <Container>
              <Button
                buttonText="Edit"
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
                buttonText="Delete"
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
    `https://my-json-server.typicode.com/bea-ro/shop-api/artworks/`
  ).then((res) => res.json());
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const response: Artwork = await fetch(
    `https://complete-server-rtc.onrender.com/api/artworks/${id}`
  ).then((res) => res.json());

  return {
    props: {
      artwork: response,
    },
    revalidate: 10,
  };
};

export type Props = {
  artwork: Artwork;
};

export default ArtworkPage;
