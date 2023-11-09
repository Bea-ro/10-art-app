import { useContext, useState } from 'react';
import { GetStaticProps } from 'next';
import { AuthContext, ModalContext, ModalTopContext } from '../_app';
import { getArtworks } from '../../libs/artworks/artworks';
import { scrollToTop } from '../../utils/scrollToTop';
import { Artwork } from '../../types/artwork';
import { Item } from '../../types/item';

import Layout from '../../components/ui/Layout/Layout';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import ItemsGrid from '../../components/ui/ItemsGrid/ItemsGrid';
import Modal from '../../components/ui/Modal/Modal';
import Filter from '../../components/ui/Filter/Filter';
import Button from '../../components/ui/Button/Button';



const ArtworksPage = ({ artworks }: Props) => {
  const { isAuth } = useContext(AuthContext);
  const { isModalOpen, modalContent } = useContext(ModalContext);
  const { modalTop } = useContext(ModalTopContext);
  const [ excludedItems, setExcludedItems ] = useState<Item[]>([])


  return (
    <Layout
      title="Artworks"
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture."
    >
      <PageTitle title="Artworks" />
      {isAuth ? (
        <>
        <Filter items={artworks} setExcludedItems={setExcludedItems}></Filter>
          <ItemsGrid items={artworks} itemType="artworks" excludedItems={excludedItems}></ItemsGrid>
          {isModalOpen && (
            <Modal top={`${modalTop.toString()}px`}>{modalContent}</Modal>
          )}
         <Button type="button" text="&#8743;" onClick={scrollToTop} id="scroll-button"></Button> 
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
