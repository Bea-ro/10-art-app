import { Item } from '../types/item';

import EditForm from '../components/ui/Form/EditForm';

export const handleEditModal = (
  item: Item,
  itemType: string,
  openModal: () => void,
  setModalContent: (ar0: React.ReactNode) => void
) => {
  openModal();
  setModalContent(<EditForm item={item} itemType={itemType} />);
};
