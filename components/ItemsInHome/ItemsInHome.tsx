import { useContext } from 'react';
import { MessageContext } from '../../pages/_app';
import { useModal } from '../../customHooks/useModal';
import { handleAddModal } from '../../utils/handleAddModal';
import { Item } from '../../types/item';

import Link from 'next/link';
import Button from '../ui/Button/Button';
import Container from '../ui/Container/Container';
import Subtitle from '../ui/Subtitle/Subtitle';
import Modal from '../ui/Modal/Modal';
import Carousel from '../ui/Carousel/Carousel';

const ItemsInHome = ({ items, itemType }: Props) => {
  const { setMessage } = useContext(MessageContext);
  const {
    isModalOpen,
    modalDisplay,
    modalContent,
    setModalContent,
    openModal,
    closeModal,
  } = useModal(setMessage);

  return (
    <div style={{ position: "relative", padding: "10px" }}>
      <Subtitle subtitle={itemType === "authors" ? "artists" : itemType} />
      <Container>
        {modalDisplay && (
          <Button
            buttonText={`Add a new ${
              itemType === "authors" ? "artist" : itemType.slice(0, -1)
            }`}
            type="button"
            onClick={() =>
              handleAddModal(itemType, openModal, closeModal, setModalContent)
            }
          />
        )}
        {modalDisplay && (
          <Link className="button" href={`/${itemType}`}>
            See all {itemType === "authors" ? "artists" : itemType}
          </Link>
        )}
        {isModalOpen &&<Modal>{modalContent}</Modal>}
      </Container>
<Carousel carouselItems={items} itemType={itemType} isModalOpen={isModalOpen}></Carousel>

    </div>
  );
};

export type Props = {
  items: Item[];
  itemType: string;
};

export default ItemsInHome;
