import { useState } from "react";

export const useModal = (setMessage: (arg0: string) => void) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalDisplay, setModalDisplay] = useState<boolean>(true);

  const openModal = () => {
    setIsModalOpen(true);
    setModalDisplay(false);
    setMessage("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalDisplay(true);
    setMessage("");
  };

  return {
    isModalOpen,
    setIsModalOpen,
    openModal,
    closeModal,
    modalContent,
    setModalContent,
    modalDisplay,
    setModalDisplay,
  };
};
