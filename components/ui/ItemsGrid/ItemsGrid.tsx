import { ItemsGridStyled } from './ItemsGridStyled';
import { useContext } from 'react';
import { ModalContext } from '../../../pages/_app';
import { Item } from '../../../types/item';

import ItemCard from '../../ItemCard/ItemCard';

const ItemsGrid = ({ items, itemType, flow }: Props) => {
  const { isModalOpen } = useContext(ModalContext);

  return (
    <ItemsGridStyled flow={flow} isModalOpen={isModalOpen} itemType={itemType}>
      {items.map((item) => (
        <ItemCard key={item._id} item={item}></ItemCard>
      ))}
    </ItemsGridStyled>
  );
};
export type Props = {
  items: Item[];
  flow?: string;
  itemType?: string;
};

export default ItemsGrid;
