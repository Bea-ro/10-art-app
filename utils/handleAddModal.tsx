import AddForm from "../components/ui/Form/AddForm";

export const handleAddModal = (
  itemType: string,
  openModal: () => void,
  closeModal: () => void,
  setModalContent: (arg0: React.ReactNode) => void
) => {
  setModalContent(
    <AddForm
      itemType={itemType}
      closeModal={closeModal}
      setModalContent={setModalContent}
    />
  );
  openModal();
};
