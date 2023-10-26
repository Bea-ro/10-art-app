import { NextRouter } from 'next/router';
import { deleteFetch } from '../services/deleteFetch';
import { Item } from '../types/item';

import Container from '../components/ui/Container/Container';
import Button from '../components/ui/Button/Button';
import Message from '../components/ui/Message/Message';


export const handleDeleteModal = (
  item: Item,
  itemType: string,
  token: string,
  openModal: () => void,
  closeModal: () => void,
  setMessage: (arg0: string) => void,
  setModalContent: (arg0: React.ReactNode) => void,
  router: NextRouter
) => {
  const closeWithNavigate = () => {
    closeModal();
    router.push(`/${itemType}`);
  };

  setModalContent(
    <>
      <p>Are you sure you want to delete {item.title || item.name}?</p>
      <Container>
        <Button
          text="Yes"
          type="button"
          onClick={() => {
            deleteFetch(itemType, item, token, setMessage);
            setModalContent(
              <>
                <Button type="button" text="x" onClick={closeWithNavigate} />
                <Message></Message>
              </>
            );
          }}
        ></Button>
        <Button text="No" type="button" onClick={closeModal}></Button>
      </Container>
    </>
  );
  openModal();
};
