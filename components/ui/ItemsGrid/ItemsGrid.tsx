import { ItemsGridStyled } from './ItemsGridStyled';
import { useContext } from 'react';
import { ModalContext } from '../../../pages/_app';
import { Item } from '../../../types/item';

import ItemCard from '../../ItemCard/ItemCard';

const ItemsGrid = ({ items, itemType, excludedItems }: Props) => {
  
  const { isModalOpen } = useContext(ModalContext);

  return (
    <ItemsGridStyled >
      {items.map((item) => (
        <ItemCard key={item._id} item={item} itemType={itemType as string} isModalOpen={isModalOpen}
        filter={
          excludedItems?.includes(item)? "none" : "flex"
        }
        ></ItemCard>
      ))}
    </ItemsGridStyled>
  );
};
export type Props = {
  items: Item[];
  itemType?: string;
  excludedItems?: Item[]; 
};

export default ItemsGrid;
