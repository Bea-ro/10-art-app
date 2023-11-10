import { ItemsInHomeStyled } from './ItemsInHomeStyled';
import { useContext } from 'react';
import { AuthContext, MessageContext } from '../../pages/_app';
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
  const { isAuth } = useContext(AuthContext);
  const {
    isModalOpen,
    modalDisplay,
    modalContent,
    setModalContent,
    openModal,
    closeModal,
  } = useModal(setMessage);

  return (
    <ItemsInHomeStyled>
      <Subtitle
        subtitle={itemType === "authors" ? "artists" : itemType}
        align="left"
      />
      {isAuth && <Container>
        {modalDisplay && (
          <Button
            text={`New ${
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
            All {itemType === "authors" ? "artists" : itemType}
          </Link>
        )}
        {isModalOpen && <Modal>{modalContent}</Modal>}
      </Container>
      }
      <Carousel
        carouselItems={items}
        isModalOpen={isModalOpen}
      ></Carousel>
    </ItemsInHomeStyled>
  );
};

export type Props = {
  items: Item[];
  itemType: string;
};

export default ItemsInHome;
