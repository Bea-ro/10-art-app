import { GetStaticProps } from 'next';
import { useContext } from 'react';
import { AuthContext, ModalContext, ModalTopContext } from '../_app';
import { getAuthors } from '../../libs/authors/authors';
import { Author } from '../../types/author';

import Layout from '../../components/ui/Layout/Layout';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import ItemsGrid from '../../components/ui/ItemsGrid/ItemsGrid';
import Modal from '../../components/ui/Modal/Modal';


const AuthorsPage = ({ authors }: Props) => {
  const { isAuth } = useContext(AuthContext);
  const { isModalOpen, modalContent } = useContext(ModalContext);
  const { modalTop } = useContext(ModalTopContext);

  return (
    <Layout
      title="Authors"
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture."
    >
      <PageTitle title="Artists" />
      {isAuth ? (
          <>
        <ItemsGrid items={authors} itemType="authors"></ItemsGrid>
        {isModalOpen && <Modal top={`${modalTop.toString()}px`}>{modalContent}</Modal>}
        </>
      ) : (
        <Text text="Please, log in to discover artists." />
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const authors = await getAuthors();
  return {
    props: {
      authors: authors,
    },
    revalidate: 10,
  };
};

export type Props = {
  authors: Author[];
};

export default AuthorsPage;
