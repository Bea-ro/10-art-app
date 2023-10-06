import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [display, setDisplay] = useState<boolean>(true)

  const openModal = () => {
      setIsModalOpen(true);
      setDisplay(false)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDisplay(true)
  };

  return { isModalOpen, setIsModalOpen, openModal, closeModal, modalContent, setModalContent, display};
};

export type useModal = {
  isModalOpen: boolean 
  setIsModalOpen: (arg0: boolean) => void
  openModal: ()=> void
  closeModal: ()=> void
  modalContent: React.ReactNode
  setModalContent: (arg0: React.ReactNode) => void
  display: boolean
 }