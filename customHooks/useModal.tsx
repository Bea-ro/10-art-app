import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalDisplay, setModalDisplay] = useState<boolean>(true)

  const openModal = () => {
      setIsModalOpen(true);
      setModalDisplay(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalDisplay(true)
  };

  return { isModalOpen, setIsModalOpen, openModal, closeModal, modalContent, setModalContent, modalDisplay, setModalDisplay};
};

// export type useModal = {
//   isModalOpen: boolean 
//   setIsModalOpen: (arg0: boolean) => void
//   openModal: ()=> void
//   closeModal: ()=> void
//   modalContent: React.ReactNode
//   setModalContent: (arg0: React.ReactNode) => void
//   modalDisplay: boolean
//   setModalDisplay: (arg0: boolean) => void
//  }