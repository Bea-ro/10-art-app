import { ItemsGridStyled } from './ItemsGridStyled';
import { useContext } from 'react';
import { ModalContext } from '../../../pages/_app';
import { Item } from '../../../types/item';

import ItemCard from '../../ItemCard/ItemCard';

const ItemsGrid = ({ items, itemType }: Props) => {
  
  const { isModalOpen } = useContext(ModalContext);

  return (
    <ItemsGridStyled >
      {items.map((item) => (
        <ItemCard key={item._id} item={item} itemType={itemType as string} isModalOpen={isModalOpen}></ItemCard>
      ))}
    </ItemsGridStyled>
  );
};
export type Props = {
  items: Item[];
  itemType?: string;
};

export default ItemsGrid;
