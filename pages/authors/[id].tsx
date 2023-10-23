import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext, MessageContext, ModalContext } from '../_app';
import { upperCaseArea } from '../../utils/upperCaseArea';
import { handleDeleteModal } from '../../utils/handleDeleteModal';
import { handleEditModal } from '../../utils/handleEditModal';
import { Author } from '../../types/author';

import Layout from '../../components/ui/Layout/Layout';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import Button from '../../components/ui/Button/Button';
import Container from '../../components/ui/Container/Container';
import ItemsGrid from '../../components/ui/ItemsGrid/ItemsGrid';
import Modal from '../../components/ui/Modal/Modal';

const AuthorPage = ({ author }: Props) => {
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
      title={`Artist ${author.name}`}
      description={`Find information about artist ${author.name}`}
    >
      <PageTitle title={author.name} />
      {isAuth ? (
        <>
          <p>
            {author.movement}{" "}
            {author.area.length > 0 &&
              author.area.map((area, index) => (
                <span key={area}>
                  {upperCaseArea(area)}
                  {index < author.area.length - 1 && ", "}
                </span>
              ))}
          </p>
          <ItemsGrid itemType="" items={author.mainArtworks}></ItemsGrid>
          {modalDisplay && (
            <Container>
              <Button
                buttonText="Edit"
                type="button"
                onClick={() =>
                  handleEditModal(author, "authors", openModal, setModalContent)
                }
              />
              <Button
                buttonText="Delete"
                type="button"
                onClick={() =>
                  handleDeleteModal(
                    author,
                    "authors",
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
        <Text text={`Please, log in to discover ${author.name}.`} />
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response: Author[] = await fetch(
    `https://my-json-server.typicode.com/bea-ro/shop-api/authors/`
  ).then((res) => res.json());
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const response: Author = await fetch(
    `https://complete-server-rtc.onrender.com/api/authors/${id}`
  ).then((res) => res.json());

  return {
    props: {
      author: response,
    },
    revalidate: 10,
  };
};

export type Props = {
  author: Author;
};

export default AuthorPage;
