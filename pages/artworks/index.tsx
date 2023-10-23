import { useContext } from 'react';
import { GetStaticProps } from 'next';
import { AuthContext, ModalContext, ModalTopContext } from '../_app';
import { getArtworks } from '../../libs/artworks/artworks';
import { Artwork } from '../../types/artwork';

import Layout from '../../components/ui/Layout/Layout';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import ItemsGrid from '../../components/ui/ItemsGrid/ItemsGrid';
import Modal from '../../components/ui/Modal/Modal';


const ArtworksPage = ({ artworks }: Props) => {
  const { isAuth } = useContext(AuthContext);
  const { isModalOpen, modalContent } = useContext(ModalContext);
  const {modalTop} = useContext(ModalTopContext)

  return (
    <Layout
      title="Artworks"
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture."
    >
      <PageTitle title="Artworks" />
      {isAuth ? (
      <>
        <ItemsGrid items={artworks} itemType="artworks"></ItemsGrid>
        {isModalOpen && <Modal top={`${modalTop.toString()}px`}>{modalContent}</Modal>}
        </>
      ) : (
        <Text text="Please, log in to discover artworks." />
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const artworks = await getArtworks();
  return {
    props: {
      artworks: artworks,
    },
    revalidate: 10,
  };
};

export type Props = {
  artworks: Artwork[];
};

export default ArtworksPage;
