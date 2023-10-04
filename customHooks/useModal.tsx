import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, setIsModalOpen, openModal, closeModal, modalContent, setModalContent};
};

// export type useModal = {
//   isModalOpen: boolean | undefined
//   setIsModalOpen: (arg0: boolean) => void
//  }